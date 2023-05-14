(ns repl-tooling.editor-helpers
  (:require [clojure.string :as str]
            [cljs.reader :as edn]
            [cljs.tools.reader :as reader]
            [rewrite-clj.zip.move :as move]
            [rewrite-clj.zip :as zip]
            [rewrite-clj.zip.base :as zip-base]
            [rewrite-clj.node :as node]
            [rewrite-clj.reader :as clj-reader]
            [rewrite-clj.parser :as parser]
            [repl-tooling.processor :as processor]
            [repl-tooling.editor-integration.schemas :as schemas]
            [duck-repled.editor-helpers :as helpers]
            [promesa.core :as p]
            [schema.core :as s]
            ["fs" :as fs]
            ["path" :as path]))

(deftype LiteralRender [string]
  IPrintWithWriter
  (-pr-writer [_ writer opts]
    (-write writer string))
  Object
  (toString [_] (str string)))

(deftype Interactive [edn]
  IPrintWithWriter
  (-pr-writer [_ writer opts]
    (-write writer edn)))

(defprotocol IIncompleteStr
  (only-str [_])
  (concat-with [_ other]))

(deftype IncompleteStr [string]
  Object
  (toString [this] (str (only-str this) "..."))

  IPrintWithWriter
  (-pr-writer [_ writer opts]
    (-write writer (pr-str (str (first string) "..."))))

  IIncompleteStr
  (only-str [_] (first string))
  (concat-with [_ other]
    (if (string? other)
      (str (first string) other)
      (IncompleteStr. [(str (first string) (only-str other))
                       {:repl-tooling/... (-> other meta :get-more)}])))

  IMeta
  (-meta [coll] {:get-more (-> string second :repl-tooling/...)}))

(defprotocol Taggable
  (obj [this])
  (tag [this]))

(deftype WithTag [obj tag]
  IPrintWithWriter
  (-pr-writer [_ writer opts]
    (-write writer "#")
    (-write writer tag)
    (-write writer " ")
    ;TODO: See if this will work
    (-write writer (pr-str obj)))

  Taggable
  (obj [_] obj)
  (tag [_] (str "#" tag " ")))

(defrecord Browseable [object more-fn attributes]
  Object
  (toString [_] (str object)))

(defrecord IncompleteObj [more-fn])

(defrecord Error [type message add-data trace])

;; modified parse-error function which was used for testing
(defn- parse-error [hm]
  (let [{:keys [via trace cause] :as error} hm
        info (or (some-> via reverse first) error)
        {:keys [type message]} info]
    (->Error type #_(str (keys hm)) message (dissoc info :type :message :at :trace) trace)))

;; Original repl-tooling parse-error function
(defn- parse-error [{:keys [via trace cause] :as error}]
  (let [info (or (some-> via reverse first) error)
    {:keys [type message]} info]
      (->Error type (or cause message) (dissoc info :type :message :at :trace) trace)))

(defn- ->browseable [object additional-data]
  (cond
    (and (instance? WithTag object) (= "#class " (tag object)))
    (let [[f s] (obj object)] (->Browseable f (:repl-tooling/... s) nil))

    (and (map? object) (-> object keys (= [:repl-tooling/...])))
    (->IncompleteObj (:repl-tooling/... object))

    :else
    (->Browseable object (:repl-tooling/... additional-data) nil)))

;;; error-result doesn't seem to be called in the editor.
; Even when we changed things in this function, the result in electron
; never changed.
; (defn error-result
;   ([type message trace] (error-result type message trace nil))
;   ([type message trace add-data]
;    (let [error (->> (assoc add-data :message (str "hi" (:message add-data)))
;                     (merge {:type type :message (str "hello" message) :trace trace})
;                     (tagged-literal 'error)
;                     pr-str)]
;      {:error error :as-text error})))

(defrecord Patchable [id value])

(defn as-obj [data]
  (let [params (last data)
        [browseable pr-str-obj obj-id] data]
    (if pr-str-obj
      (->browseable pr-str-obj (get (:bean params) {:repl-tooling/... nil}))
      (->browseable (str (:object browseable) "@" obj-id) (get (:bean params) {:repl-tooling/... nil})))))

;; modified babel middleware modify-message using strings
(defn- str-modify-message
  [exc]
  "exc is a hashmap"
  (let [exc-type (str (:type (first (:via exc)))) #_(class exc)
        ;exc-type should be (first (:via exc))
        ;type should be (last (:via exc))
        {:keys [cause data via trace]} exc #_(Throwable->map exc)
        nested? (> (count via) 1)
        {:keys [type message]} (last via)
        nested-type (str type)
        phase (:clojure.error/phase (:data (first via)))
        exc-info? (= "clojure.lang.ExceptionInfo" exc-type)
        compiler-exc? (= "clojure.lang.Compiler$CompilerException" exc-type)]
        (cond (and nested? compiler-exc? (processor/macro-spec? cause via))
                   #_(str (processor/spec-macro-message cause data)
                        "\n"
                        (processor/location-macro-spec via))
                     "spec-macro-message"
              (and nested? compiler-exc? (processor/invalid-signature? cause via))
                   #_(str (processor/invalid-sig-message cause
                                                       (:clojure.error/symbol (:data (first via))))
                        "\n"
                        (processor/location-macro-spec via))
                      "invalid-sig-message"
              (or (and exc-info? (not nested?))
                  (and compiler-exc? (= "clojure.lang.ExceptionInfo" nested-type)))
                  #_(str (processor/spec-message data)
                       "\n"
                       (processor/location-function-spec data))
                      "spec-message"
              (and exc-info? (= "clojure.lang.ExceptionInfo" nested-type))
                  #_(str (processor/spec-message data)
                       "\n"
                       (processor/location-print-phase-spec data))
                      "spec-message-phase"
              ;; Non-spec message in the print-eval phase:
              (= phase :print-eval-result)
                  #_(str (processor/process-message type message)
                       "\n"
                       (processor/location-print-phase via trace))
                      "regular message print-phase"
              :else
                  #_(str (processor/process-message type message)
                       "\n"
                       (processor/location-non-spec via trace))
                      #_(class type)
                      #_(str "regular message: " (processor/process-message type message))
                      #_(str cause " nested = " nested?)
                      (str (processor/str-process-message (str type) (str message)))
                      #_"regular message")))

; arithmetic exception -> regular message
; macro (fn) -> something else


(defn- read-result [res]
  (try
    (edn/read-string {:readers {'unrepl/string #(IncompleteStr. %)
                                'js #(WithTag. % "js")
                                'unrepl/bad-keyword (fn [[ns name]] (keyword ns name))
                                'unrepl/bad-symbol (fn [[ns name]] (symbol ns name))
                                'unrepl/ratio (fn [[n d]] (LiteralRender. (str n "/" d)))
                                'unrepl/bigint (fn [n] (LiteralRender. (str n "N")))
                                'unrepl/ns (fn [n] (LiteralRender. (str n)))
                                'unrepl/bigdec (fn [n] (LiteralRender. (str n "M")))
                                'unrepl.java/class (fn [k] (WithTag. k "class"))
                                'unrepl/browsable (fn [[a b]]
                                                    (->browseable a b))
                                'unrepl/pattern re-pattern
                                'repl-tooling/literal-render #(LiteralRender. %)
                                'repl-tooling/interactive #(Interactive. %)
                                'repl-tooling/patchable #(->Patchable (first %) (second %))
                                'clojure/var #(->> % (str "#'") symbol)
                                ;'error parse-error
                                ;'error type returns cljs.PersistentArrayMap -> {:via [{:type :message :at}] :trace :cause} -> {:via [{cljs.core/Symbol #object[String] #object[String]}] cljs.core/PersistentVector #object[String]}
                                'error str-modify-message
                                ;'error get-error-type
                                ;'error str
                                ;'error #(str "hello" %)

                                'unrepl/object as-obj}
                      :default #(WithTag. %2 %1)}
                     res)
    (catch :default _
      (symbol res))))


(s/defn parse-result :- schemas/ReplResult [result :- s/Any]
  (assoc (if (contains? result :result)
           (update result :result #(if (:parsed? result)
                                     %
                                     (cond-> (read-result %)
                                             (:literal result) LiteralRender.
                                             (:interactive result) Interactive.)))
           (update result :error #(cond-> % (not (:parsed? result)) read-result)))
         :parsed? true))

(def text-in-range helpers/text-in-range)
(def top-levels helpers/top-blocks)
(def current-var helpers/current-var)
(def block-for helpers/block-for)

(defn top-block-for [text position]
  (let [tops (helpers/top-blocks text)]
    (helpers/top-block-for tops position)))

(defn ns-range-for [text position]
  (let [tops (helpers/top-blocks text)]
    (helpers/ns-range-for tops position)))

(def ^:dynamic *out-on-aux* false)

(defn with-out [fun]
  (set! *out-on-aux* true)
  (let [p (p/do! (fun))]
    (p/finally p #(set! *out-on-aux* false))
    p))

(s/defn get-possible-port :- (s/maybe s/Int)
  [project-paths :- [s/Str], detect-nrepl? :- s/Bool, typed-port :- (s/maybe s/Int)]
  (if typed-port
    typed-port
    (let [files (cond-> [".socket-repl-port"
                         (path/join ".shadow-cljs" "socket-repl.port")]
                        detect-nrepl? (conj ".nrepl-port"))
          paths (for [file files
                      path project-paths
                      :let [full-path (path/join path file)]
                      :when (fs/existsSync full-path)]
                  (-> full-path fs/readFileSync str js/parseInt))]
      (first paths))))
