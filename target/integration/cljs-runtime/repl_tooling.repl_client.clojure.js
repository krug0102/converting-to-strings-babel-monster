goog.provide('repl_tooling.repl_client.clojure');
repl_tooling.repl_client.clojure.clj_blob = "(clojure.core/let [nop (clojure.core/constantly nil)\ndone (promise)\ne (clojure.core/atom eval)]\n(-> (create-ns 'unrepl.repl$i9hjMxfOQ2IzbCA5TVia2QQEJNg)\n(intern '-init-done)\n(alter-var-root\n(fn [v]\n(if (instance? clojure.lang.IDeref v)\n(do\n(reset! e (if-some [ex @v]\n(fn [_] (throw ex))\nnop))\nv)\ndone))))\n(clojure.main/repl\n:read #(let [x (clojure.core/read)] (clojure.core/case x <<<FIN (do (deliver done nil) %2) x))\n:prompt nop\n:eval #(@e %)\n:print nop\n:caught #(do (set! *e %) (reset! e nop) (prn [:unrepl.upgrade/failed %]))))\n(ns unrepl.core (:refer-clojure :exclude [read eval print]))\n(def ^:once ^:private loaded-by \"unrepl.repl\")\n(def ^:once ^:dynamic *string-length* 80)\n(def ^:once ^:dynamic ^{:arglists '([x]) :doc \"Atomically machine-prints its input (a triple) to the output stream.\"} write)\n(defn ^:once non-eliding-write \"use with care\" [x]\n(binding [*print-length* Long/MAX_VALUE\n*print-level* Long/MAX_VALUE\n*string-length* Long/MAX_VALUE]\n(write x)))\n(declare ^:once ^:dynamic read ^:once ^:dynamic print ^:once ^:dynamic eval)(ns\nunrepl.printer$q0kQC1b9AWklEvoDzW2VNG7ZlCg\n(:require\n[clojure.string :as str]\n[clojure.edn :as edn]\n[clojure.main :as main]\n[unrepl.core :as unrepl]))\n(def ^:dynamic *print-budget*)\n(def ^:dynamic *elide*\n\"Function of 1 argument which returns the elision.\"\n(constantly nil))\n(def defaults {#'*print-length* 10\n#'*print-level* 8\n#'unrepl/*string-length* 72})\n(defn- bump [n m]\n(if (< n (- Long/MAX_VALUE m))\n(+ n m)\nLong/MAX_VALUE))\n(defn ensure-defaults [bindings]\n(let [bindings (merge-with #(or %1 %2) bindings defaults)]\n(assoc bindings #'*print-budget*\n(long (min (* 1N (bindings #'*print-level*) (bindings #'*print-length*)) Long/MAX_VALUE)))))\n(defprotocol MachinePrintable\n(-print-on [x write rem-depth]))\n(defn- really-satisfies? [protocol x]\n(when (class x)\n(let [default (get (:impls protocol) Object)\nimpl (find-protocol-impl protocol x)]\n(not (identical? impl default)))))\n(def ^:private datafiable?\n(if-some [Datafiable (some-> 'clojure.core.protocols/Datafiable resolve)]\n#(or (get (meta %) 'clojure.core.protocols/datafy) (really-satisfies? (deref Datafiable) %))\n(constantly false)))\n(def ^:private datafy\n(or (some-> 'clojure.core.protocols/datafy resolve deref)\n(clojure.lang.Var$Unbound. #'datafy)))\n(def ^:private navigable?\n(if-some [Navigable (some-> 'clojure.core.protocols/Navigable resolve)]\n#(or (get (meta %) 'clojure.core.protocols/nav) (really-satisfies? (deref Navigable) %))\n(constantly false)))\n(def ^:private nav\n(or (some-> 'clojure.core.protocols/nav resolve deref)\n(clojure.lang.Var$Unbound. #'nav)))\n(when (bound? #'datafy)\n(require 'clojure.datafy))\n(defn- browsify\n\"only for datafiables\"\n[x]\n(let [d (datafy x)]\n(if (and (navigable? x) (or (map? d) (vector? d)))\n(reduce-kv (fn [d k v] (assoc d k (tagged-literal 'unrepl/browsable [v #(nav x k v)]))) d d)\nd)))\n(defn print-on\n[write x rem-depth]\n(let [rem-depth (dec rem-depth)\nbudget (set! *print-budget* (dec *print-budget*))]\n(if (and (or (neg? rem-depth) (neg? budget)) (pos? (or *print-length* 1)))\n(binding [*print-length* 0]\n(print-on write x 0))\n(do\n(when (datafiable? x)\n(write \"#unrepl/browsable [\"))\n(when (and *print-meta* (meta x))\n(write \"#unrepl/meta [\")\n(-print-on (meta x) write rem-depth)\n(write \" \"))\n(-print-on x write rem-depth)\n(when (and *print-meta* (meta x))\n(write \"]\"))\n(when (datafiable? x)\n(write \" \")\n(set! *print-budget* (bump *print-budget* 1))\n(print-on write (tagged-literal 'unrepl/... (*elide* (lazy-seq [(list (browsify x))]))) (inc rem-depth))\n(write \"]\"))))))\n(defn base64-encode [^java.io.InputStream in]\n(let [table \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\"\nsb (StringBuilder.)]\n(loop [shift 4 buf 0]\n(let [got (.read in)]\n(if (neg? got)\n(do\n(when-not (= shift 4)\n(let [n (bit-and (bit-shift-right buf 6) 63)]\n(.append sb (.charAt table n))))\n(cond\n(= shift 2) (.append sb \"==\")\n(= shift 0) (.append sb \\=))\n(str sb))\n(let [buf (bit-or buf (bit-shift-left got shift))\nn (bit-and (bit-shift-right buf 6) 63)]\n(.append sb (.charAt table n))\n(let [shift (- shift 2)]\n(if (neg? shift)\n(do\n(.append sb (.charAt table (bit-and buf 63)))\n(recur 4 0))\n(recur shift (bit-shift-left buf 6))))))))))\n(defn base64-decode [^String s]\n(let [table \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\"\nin (java.io.StringReader. s)\nbos (java.io.ByteArrayOutputStream.)]\n(loop [bits 0 buf 0]\n(let [got (.read in)]\n(when-not (or (neg? got) (= 61 #_\\= got))\n(let [buf (bit-or (.indexOf table got) (bit-shift-left buf 6))\nbits (+ bits 6)]\n(if (<= 8 bits)\n(let [bits (- bits 8)]\n(.write bos (bit-shift-right buf bits))\n(recur bits (bit-and 63 buf)))\n(recur bits buf))))))\n(.toByteArray bos)))\n(def ^:dynamic *max-colls* 100)\n(def ^:dynamic *realize-on-print*\n\"Set to false to avoid realizing lazy sequences.\"\ntrue)\n(defmacro ^:private blame-seq [& body]\n`(try (seq ~@body)\n(catch Throwable t#\n (list (tagged-literal 'unrepl/lazy-error t#)))))\n(defn- may-print? [s]\n(or *realize-on-print* (not (instance? clojure.lang.IPending s)) (realized? s)))\n(declare ->ElidedKVs)\n(defn- print-kvs\n[write kvs rem-depth]\n(let [print-length *print-length*]\n(loop [kvs kvs i 0]\n(if (and (< i print-length) (pos? *print-budget*))\n(when-some [[[k v] & kvs] (seq kvs)]\n(when (pos? i) (write \", \"))\n(print-on write k rem-depth)\n(write \" \")\n(print-on write v rem-depth)\n(recur kvs (inc i)))\n(when (seq kvs)\n(when (pos? i) (write \", \"))\n(write \"#unrepl/... nil \")\n(print-on write (tagged-literal 'unrepl/... (*elide* (->ElidedKVs kvs))) rem-depth))))))\n(defn- print-vs\n[write vs rem-depth]\n(let [print-length *print-length*]\n(loop [vs vs i 0]\n(when-some [[v :as vs] (blame-seq vs)]\n(when (pos? i) (write \" \"))\n(if (and (< i print-length) (pos? *print-budget*) (may-print? vs))\n(if (and (tagged-literal? v) (= (:tag v) 'unrepl/lazy-error))\n(print-on write v rem-depth)\n(do\n(print-on write v rem-depth)\n(recur (rest vs) (inc i))))\n(print-on write (tagged-literal 'unrepl/... (*elide* vs)) rem-depth))))))\n(defrecord WithBindings [bindings x]\nMachinePrintable\n(-print-on [_ write rem-depth]\n(with-bindings (ensure-defaults bindings)\n(-print-on x write *print-level*))))\n(defrecord ElidedKVs [s]\nMachinePrintable\n(-print-on [_ write rem-depth]\n(write \"{\")\n(print-kvs write s rem-depth)\n(write \"}\")))\n(def atomic? (some-fn nil? true? false? char? string? symbol? keyword? #(and (number? %) (not (ratio? %)))))\n(defn- roundtrippable? [x]\n(try\n(= x (-> x pr-str read-string))\n(catch Exception e\nfalse)))\n(defn- as-str\n\"Like pr-str but escapes all ASCII control chars.\"\n[x]\n(cond\n(string? x) (str/replace (pr-str x) #\"\\p{Cntrl}\"\n#(format \"\\\\u%04x\" (int (.charAt ^String % 0))))\n(char? x) (str/replace (pr-str x) #\"\\p{Cntrl}\"\n#(format \"u%04x\" (int (.charAt ^String % 0))))\n(and (or (symbol? x) (keyword? x)) (not (roundtrippable? x)))\n(str (if (keyword? x) \"#unrepl/bad-keyword [\" \"#unrepl/bad-symbol [\")\n(as-str (namespace x)) \" \" (as-str (name x)) \"]\")\n:else (pr-str x)))\n(defmacro ^:private latent-fn [& fn-body]\n`(let [d# (delay (binding [*ns* (find-ns '~(ns-name *ns*))] (eval '(fn ~@fn-body))))]\n(fn\n([] (@d#))\n([x#] (@d# x#))\n([x# & xs#] (apply @d# x# xs#)))))\n(defrecord MimeContent [mk-in]\nMachinePrintable\n(-print-on [_ write rem-depth]\n(with-open [in (mk-in)]\n(write \"#unrepl/base64 \\\"\")\n(write (base64-encode in))\n(write \"\\\"\"))))\n(defn- mime-content [mk-in]\n(when-some [e (*elide* (MimeContent. mk-in))]\n{:content (tagged-literal 'unrepl/... e)}))\n(def ^:dynamic *object-representations*\n\"map of classes to functions returning their representation component (3rd item in #unrepl/object [class id rep])\"\n{clojure.lang.IDeref\n(fn [x]\n(let [pending? (and (instance? clojure.lang.IPending x)\n(not (.isRealized ^clojure.lang.IPending x)))\n[ex val] (when-not pending?\n(try [false @x]\n(catch Throwable e\n[true e])))\nfailed? (or ex (and (instance? clojure.lang.Agent x)\n(agent-error x)))\nstatus (cond\nfailed? :failed\npending? :pending\n:else :ready)]\n{:unrepl.ref/status status :unrepl.ref/val val}))\nclojure.lang.AFn\n(fn [x]\n(-> x class .getName main/demunge))\njava.io.File (fn [^java.io.File f]\n(into {:path (.getPath f)}\n(when (.isFile f)\n{:attachment (tagged-literal 'unrepl/mime\n(into {:content-type \"application/octet-stream\"\n:content-length (.length f)}\n(mime-content #(java.io.FileInputStream. f))))})))\njava.awt.Image (latent-fn [^java.awt.Image img]\n(let [w (.getWidth img nil)\nh (.getHeight img nil)]\n(into {:width w :height h}\n{:attachment\n(tagged-literal 'unrepl/mime\n(into {:content-type \"image/png\"}\n(mime-content #(let [bos (java.io.ByteArrayOutputStream.)]\n(when (javax.imageio.ImageIO/write\n(doto (java.awt.image.BufferedImage. w h java.awt.image.BufferedImage/TYPE_INT_ARGB)\n(-> .getGraphics (.drawImage img 0 0 nil)))\n\"png\" bos)\n(java.io.ByteArrayInputStream. (.toByteArray bos)))))))})))\nObject (fn [x]\n(if (-> x class .isArray)\n(seq x)\n(str x)))})\n(defn- object-representation [x]\n(reduce-kv (fn [_ class f]\n(when (instance? class x) (reduced (f x)))) nil *object-representations*))\n(defn- class-form [^Class x]\n(if (.isArray x) [(-> x .getComponentType class-form)] (symbol (.getName x))))\n(def unreachable (tagged-literal 'unrepl/... nil))\n(defn- print-tag-lit-on [write tag form rem-depth]\n(write (str \"#\" tag \" \"))\n(print-on write form rem-depth))\n(defn- sat-inc [n]\n(if (= Long/MAX_VALUE n)\nn\n(unchecked-inc n)))\n(defn- print-trusted-tag-lit-on [write tag form rem-depth]\n(print-tag-lit-on write tag form (sat-inc rem-depth)))\n(defn StackTraceElement->vec'\n\"Constructs a data representation for a StackTraceElement\"\n{:added \"1.9\"}\n[^StackTraceElement o]\n[(symbol (.getClassName o)) (symbol (.getMethodName o)) (.getFileName o) (.getLineNumber o)])\n(defn Throwable->map'\n\"Constructs a data representation for a Throwable.\"\n{:added \"1.7\"}\n[^Throwable o]\n(let [base (fn [^Throwable t]\n(merge {:type (symbol (.getName (class t)))\n:message (.getLocalizedMessage t)}\n(when-let [ed (ex-data t)]\n{:data ed})\n(let [st (.getStackTrace t)]\n(when (pos? (alength st))\n{:at (StackTraceElement->vec' (aget st 0))}))))\nvia (loop [via [] ^Throwable t o]\n(if t\n(recur (conj via t) (.getCause t))\nvia))\n^Throwable root (peek via)\nm {:cause (.getLocalizedMessage root)\n:via (vec (map base via))\n:trace (vec (map StackTraceElement->vec'\n(.getStackTrace ^Throwable (or root o))))}\ndata (ex-data root)]\n(if data\n(assoc m :data data)\nm)))\n(def Throwable->map''\n(if (neg? (compare (mapv *clojure-version* [:major :minor]) [1 9]))\nThrowable->map'\nThrowable->map))\n(extend-protocol MachinePrintable\nclojure.lang.TaggedLiteral\n(-print-on [x write rem-depth]\n(case (:tag x)\nunrepl/... (binding\n[*print-length* Long/MAX_VALUE\n*print-level* Long/MAX_VALUE\n*print-budget* Long/MAX_VALUE\nunrepl/*string-length* Long/MAX_VALUE]\n(write (str \"#\" (:tag x) \" \"))\n(print-on write (:form x) Long/MAX_VALUE))\nunrepl/browsable (let [[v thunk] (:form x)\nrem-depth (inc rem-depth)]\n(set! *print-budget* (bump *print-budget* 2))\n(write (str \"#\" (:tag x) \" [\"))\n(print-on write v rem-depth)\n(write \" \")\n(print-on write (tagged-literal 'unrepl/... (*elide* (lazy-seq [(thunk)]))) rem-depth)\n(write \"]\"))\n(print-tag-lit-on write (:tag x) (:form x) rem-depth)))\nclojure.lang.Ratio\n(-print-on [x write rem-depth]\n(print-trusted-tag-lit-on write \"unrepl/ratio\"\n[(.numerator x) (.denominator x)] rem-depth))\nclojure.lang.Var\n(-print-on [x write rem-depth]\n(print-tag-lit-on write \"clojure/var\"\n(when-some [ns (:ns (meta x))]\n(symbol (name (ns-name ns)) (name (:name (meta x)))))\nrem-depth))\njava.lang.reflect.Constructor\n(-print-on [m write rem-depth]\n(print-on write\n(cons (symbol (str \"new \" (.getName m)))\n(.getParameterTypes m))\nrem-depth))\njava.lang.reflect.Method\n(-print-on [m write rem-depth]\n(print-on write\n(if (-> m .getModifiers java.lang.reflect.Modifier/isStatic)\n(cons (symbol (-> m .getDeclaringClass .getName)\n(.getName m))\n(.getParameterTypes m))\n(apply list\n(symbol (str \".\" (.getName m)))\n'this\n(.getParameterTypes m)))\nrem-depth))\nThrowable\n(-print-on [t write rem-depth]\n(print-tag-lit-on write \"error\" (Throwable->map'' t) rem-depth))\nClass\n(-print-on [x write rem-depth]\n(print-tag-lit-on write \"unrepl.java/class\"\n[(class-form x)\n(tagged-literal 'unrepl/... (*elide*\n(concat (map (fn [m] (symbol (-> m .getClass .getName) (str m)))\n(.getEnumConstants x))\n(.getConstructors x)\n(.getMethods x))))]\nrem-depth))\njava.util.Date (-print-on [x write rem-depth] (write (pr-str x)))\njava.util.Calendar (-print-on [x write rem-depth] (write (pr-str x)))\njava.sql.Timestamp (-print-on [x write rem-depth] (write (pr-str x)))\nclojure.lang.Namespace\n(-print-on [x write rem-depth]\n(print-tag-lit-on write \"unrepl/ns\" (ns-name x) rem-depth))\njava.util.regex.Pattern\n(-print-on [x write rem-depth]\n(print-tag-lit-on write \"unrepl/pattern\" (str x) rem-depth))\nString\n(-print-on [x write rem-depth]\n(if (<= (count x) unrepl/*string-length*)\n(write (as-str x))\n(let [i (if (and (Character/isHighSurrogate (.charAt ^String x (dec unrepl/*string-length*)))\n(Character/isLowSurrogate (.charAt ^String x unrepl/*string-length*)))\n(inc unrepl/*string-length*) unrepl/*string-length*)\nprefix (subs x 0 i)\nrest (subs x i)]\n(if (= rest \"\")\n(write (as-str x))\n(do\n(write \"#unrepl/string [\")\n(write (as-str prefix))\n(write \" \")\n(print-on write (tagged-literal 'unrepl/... (*elide* rest)) rem-depth)\n(write \"]\")))))))\n(defn- print-coll [open close write x rem-depth]\n(write open)\n(print-vs write x rem-depth)\n(write close))\n(extend-protocol MachinePrintable\nnil\n(-print-on [_ write _] (write \"nil\"))\njava.math.BigDecimal\n(-print-on [x write _] (write (str \"#unrepl/bigdec \\\"\" x \"\\\"\")))\nclojure.lang.BigInt\n(-print-on [x write _] (write (str \"#unrepl/bigint \\\"\" x \"\\\"\")))\njava.util.UUID\n(-print-on [x write _] (write (str \"#uuid \\\"\" x \"\\\"\")))\nObject\n(-print-on [x write rem-depth]\n(cond\n(atomic? x) (write (as-str x))\n(map? x)\n(do\n(when (record? x)\n(write \"#\") (write (.getName (class x))) (write \" \"))\n(write \"{\")\n(print-kvs write x rem-depth)\n(write \"}\"))\n(vector? x) (print-coll \"[\" \"]\" write x rem-depth)\n(seq? x) (print-coll \"(\" \")\" write x rem-depth)\n(set? x) (print-coll \"#{\" \"}\" write x rem-depth)\n:else\n(let [repr (binding [*print-length* Long/MAX_VALUE\n*print-level* Long/MAX_VALUE\nunrepl/*string-length* Integer/MAX_VALUE]\n(as-str x))]\n(print-trusted-tag-lit-on write \"unrepl/object\"\n[(class x)\n(try\n(edn/read-string {:default tagged-literal} repr)\n(catch Throwable _ nil))\n(format \"0x%x\" (System/identityHashCode x)) (object-representation x)\n{:bean {unreachable (tagged-literal 'unrepl/... (*elide* (ElidedKVs. (bean x))))}}]\n(sat-inc rem-depth))))))\n(defn edn-str [x]\n(let [out (java.io.StringWriter.)\nwrite (fn [^String s] (.write out s))\nbindings (select-keys (get-thread-bindings) [#'*print-length* #'*print-level* #'unrepl/*string-length*])]\n(with-bindings (into (ensure-defaults bindings) {#'*print-readably* true})\n(print-on write x *print-level*))\n(str out)))\n(defn full-edn-str [x]\n(binding [*print-length* Long/MAX_VALUE\n*print-level* Long/MAX_VALUE\nunrepl/*string-length* Integer/MAX_VALUE]\n(edn-str x)))\n(ns\nunrepl.repl$i9hjMxfOQ2IzbCA5TVia2QQEJNg\n(:require\n[clojure.main :as m]\n[clojure.test :as t]\n[unrepl.core :as unrepl]\n[unrepl.printer$q0kQC1b9AWklEvoDzW2VNG7ZlCg :as p]\n[clojure.edn :as edn]\n[clojure.java.io :as io]))\n(alter-var-root #'t/*test-out*\n(constantly (java.io.OutputStreamWriter. System/out)))\n(defn classloader\n\"Creates a classloader that obey standard delegating policy.\n   Takes two arguments: a parent classloader and a function which\n   takes a keyword (:resource or :class) and a string (a resource or a class name) and returns an array of bytes\n   or nil.\"\n[parent f]\n(proxy [clojure.lang.DynamicClassLoader] [parent]\n(findResource [name]\n(when-some [bytes (f :resource name)]\n(let [file (doto (java.io.File/createTempFile \"unrepl-sideload-\" (str \"-\" (re-find #\"[^/]*$\" name)))\n.deleteOnExit)]\n(io/copy bytes file)\n(-> file .toURI .toURL))))\n(findClass [name]\n(if-some [bytes (f :class name)]\n(.defineClass ^clojure.lang.DynamicClassLoader this name bytes nil)\n(throw (ClassNotFoundException. name))))))\n(defn ^java.io.Writer tagging-writer\n([write]\n(proxy [java.io.Writer] []\n(close [])\n(flush [])\n(write\n([x]\n(write (cond\n(string? x) x\n(integer? x) (str (char x))\n:else (String. ^chars x))))\n([string-or-chars off len]\n(when (pos? len)\n(write (subs (if (string? string-or-chars) string-or-chars (String. ^chars string-or-chars))\noff (+ off len))))))))\n([tag write]\n(tagging-writer (fn [s] (write [tag s]))))\n([tag group-id write]\n(tagging-writer (fn [s] (write [tag s group-id])))))\n(defn blame-ex [phase ex]\n(if (::phase (ex-data ex))\nex\n(ex-info (str \"Exception during \" (name phase) \" phase.\")\n{::ex ex ::phase phase} ex)))\n(defmacro blame [phase & body]\n`(try ~@body\n(catch Throwable t#\n (throw (blame-ex ~phase t#)))))\n(defn atomic-write [^java.io.Writer w]\n(fn [x]\n(if (and (vector? x) (= (count x) 3))\n(let [[tag payload id] x\ns (blame :print (str \"[\" (p/edn-str tag)\n\" \" (p/edn-str payload)\n\" \" (p/edn-str id) \"]\"))]\n(locking w\n(.write w s)\n(.write w \"\\n\")\n(.flush w)))\n(let [s (blame :print (p/edn-str x))]\n(locking w\n(.write w s)\n(.write w \"\\n\")\n(.flush w))))))\n(definterface ILocatedReader\n(setCoords [coords-map]))\n(defn unrepl-reader [^java.io.Reader r]\n(let [offset (atom 0)\nlast-reset (volatile! {:col-off 0 :line 0 :file (str (gensym \"unrepl-reader-\"))})\noffset! #(swap! offset + %)]\n(proxy [clojure.lang.LineNumberingPushbackReader clojure.lang.ILookup ILocatedReader] [r]\n(getColumnNumber []\n(let [{:keys [line col-off]} @last-reset\noff (if (= (.getLineNumber this) line) col-off 0)]\n(+ off (proxy-super getColumnNumber))))\n(setCoords [{:keys [line col name]}]\n(locking this\n(when line (.setLineNumber this line))\n(let [line (.getLineNumber this)\ncol-off (if col (- col (.getColumnNumber this)) 0)\nname (or name (:file @last-reset))]\n(vreset! last-reset {:line line :col-off col-off :file name})))\n(:coords this))\n(valAt\n([k] (get this k nil))\n([k not-found] (case k\n:offset @offset\n:coords {:offset @offset\n:line (.getLineNumber this)\n:col (.getColumnNumber this)\n:file (:file @last-reset)}\nnot-found)))\n(read\n([]\n(let [c (proxy-super read)]\n(when-not (neg? c) (offset! 1))\nc))\n([cbuf]\n(let [n (proxy-super read cbuf)]\n(when (pos? n) (offset! n))\nn))\n([cbuf off len]\n(let [n (proxy-super read cbuf off len)]\n(when (pos? n) (offset! n))\nn)))\n(unread\n([c-or-cbuf]\n(if (integer? c-or-cbuf)\n(when-not (neg? c-or-cbuf) (offset! -1))\n(offset! (- (alength c-or-cbuf))))\n(proxy-super unread c-or-cbuf))\n([cbuf off len]\n(offset! (- len))\n(proxy-super unread cbuf off len)))\n(skip [n]\n(let [n (proxy-super skip n)]\n(offset! n)\nn))\n(readLine []\n(when-some [s (proxy-super readLine)]\n(offset! (count s))\ns)))))\n(defn ensure-unrepl-reader\n([rdr]\n(if (instance? ILocatedReader rdr)\nrdr\n(unrepl-reader rdr)))\n([rdr name]\n(if (instance? ILocatedReader rdr)\nrdr\n(doto (unrepl-reader rdr)\n(.setCoords {:file name})))))\n(defn soft-store [make-action]\n(let [ids-to-session+refs (atom {})\nrefs-to-ids (atom {})\nrefq (java.lang.ref.ReferenceQueue.)\nNULL (Object.)]\n(.start (Thread. (fn []\n(let [ref (.remove refq)]\n(let [id (@refs-to-ids ref)]\n(swap! refs-to-ids dissoc ref)\n(swap! ids-to-session+refs dissoc id)))\n(recur))))\n{:put (fn [session-id x]\n(let [x (if (nil? x) NULL x)\nid (keyword (gensym))\nref (java.lang.ref.SoftReference. x refq)]\n(swap! refs-to-ids assoc ref id)\n(swap! ids-to-session+refs assoc id [session-id ref])\n{:get (make-action id)}))\n:get (fn [id]\n(when-some [[session-id ^java.lang.ref.Reference r] (@ids-to-session+refs id)]\n(let [x (.get r)]\n[session-id (if (= NULL x) nil x)])))}))\n(defonce ^:private sessions (atom {}))\n(defn session [id]\n(some-> @sessions (get id) deref))\n(defonce ^:private elision-store (soft-store #(list `fetch %)))\n(defn fetch [id]\n(if-some [[session-id x] ((:get elision-store) id)]\n(unrepl.printer$q0kQC1b9AWklEvoDzW2VNG7ZlCg.WithBindings.\n(select-keys (some-> session-id session :bindings) [#'*print-length* #'*print-level* #'unrepl/*string-length* #'p/*elide*])\n(cond\n(instance? unrepl.printer$q0kQC1b9AWklEvoDzW2VNG7ZlCg.ElidedKVs x) x\n(string? x) x\n(instance? unrepl.printer$q0kQC1b9AWklEvoDzW2VNG7ZlCg.MimeContent x) x\n:else (seq x)))\np/unreachable))\n(defn interrupt! [session-id eval]\n(let [{:keys [^Thread thread eval-id promise]}\n(some-> session-id session :current-eval)]\n(when (and (= eval eval-id)\n(deliver promise\n{:ex (doto (ex-info \"Evaluation interrupted\" {::phase :eval})\n(.setStackTrace (.getStackTrace thread)))\n:bindings {}}))\n(.stop thread)\ntrue)))\n(defn background! [session-id eval]\n(let [{:keys [eval-id promise future]}\n(some-> session-id session :current-eval)]\n(boolean\n(and\n(= eval eval-id)\n(deliver promise\n{:eval future\n:bindings {}})))))\n(defn attach-sideloader! [session-id]\n(prn '[:unrepl.jvm.side-loader/hello])\n(some-> session-id session :side-loader\n(reset!\n(let [out *out*\nin *in*]\n(fn self [k name]\n(binding [*out* out]\n(locking self\n(prn [k name])\n(some-> (edn/read {:eof nil} in) p/base64-decode)))))))\n(let [o (Object.)] (locking o (.wait o))))\n(defn enqueue [session-id f]\n(some-> session-id session ^java.util.concurrent.BlockingQueue (:actions-queue) (.put f)))\n(defn set-file-line-col [session-id file line col]\n(enqueue session-id #(when-some [in (some-> session-id session :in)]\n(set! *file* file)\n(set! *source-path* file)\n(.setCoords ^ILocatedReader in {:line line :col col :file file}))))\n(defn patch-result! [id result]\n(unrepl/write [:patch id result]))\n(def schedule-flushes!\n(let [thread-pool (java.util.concurrent.Executors/newScheduledThreadPool 1)\nmax-latency-ms 20]\n(fn [w]\n(let [wr (java.lang.ref.WeakReference. w)\nvfut (volatile! nil)]\n(vreset! vfut\n(.scheduleAtFixedRate\nthread-pool\n(fn []\n(if-some [^java.io.Writer w (.get wr)]\n(.flush w)\n(.cancel ^java.util.concurrent.Future @vfut)))\nmax-latency-ms max-latency-ms java.util.concurrent.TimeUnit/MILLISECONDS))))))\n(defn scheduled-writer [& args]\n(-> (apply tagging-writer args)\njava.io.BufferedWriter.\n(doto schedule-flushes!)))\n(defmacro ^:private flushing [bindings & body]\n`(binding ~bindings\n(try ~@body\n(finally ~@(for [v (take-nth 2 bindings)]\n`(.flush ~(vary-meta v assoc :tag 'java.io.Writer)))))))\n(def ^:dynamic eval-id)\n(def ^:dynamic interrupted? (constantly false))\n(defn seek-readable\n\"Skips whitespace and comments on stream s. Returns true when a form may be read,\n  false otherwise.\n  Note that returning true does not guarantee that the next read will yield something.\n  (It may be EOF, or a discard #_ or a non-matching conditional...)\"\n[s]\n(loop [comment false]\n(let [c (.read s)]\n(cond\n(interrupted?) (do (.unread s c) false)\n(= c (int \\newline)) false\ncomment (recur comment)\n(= c -1) true\n(= c (int \\;)) (recur true)\n(or (Character/isWhitespace (char c)) (= c (int \\,))) (recur comment)\n:else (do (.unread s c) true)))))\n(defn unrepl-read [request-prompt request-exit]\n(blame :read\n(if (seek-readable *in*)\n(let [coords (:coords *in*)]\n(try\n(read {:read-cond :allow :eof request-exit} *in*)\n(finally\n(let [coords' (:coords *in*)]\n(unrepl/write [:read {:file (:file coords)\n:from [(:line coords) (:col coords)] :to [(:line coords') (:col coords')]\n:offset (:offset coords)\n:len (- (:offset coords') (:offset coords))}\neval-id])))))\nrequest-prompt)))\n(defn start [ext-session-actions]\n(with-local-vars [prompt-vars #{#'*ns* #'*warn-on-reflection*}\ncurrent-eval-future nil]\n(let [ext-session-actions\n(into {}\n(map (fn [[k v]]\n[k (if (and (seq? v) (symbol? (first v)) (namespace (first v)))\n(list `ensure-ns v)\nv)]))\next-session-actions)\nsession-id (keyword (gensym \"session\"))\nraw-out *out*\nin (ensure-unrepl-reader *in* (str \"unrepl-\" (name session-id)))\nactions-queue (java.util.concurrent.LinkedBlockingQueue.)\nsession-state (atom {:current-eval {}\n:in in\n:log-eval (fn [msg]\n(when (bound? eval-id)\n(unrepl/write [:log msg eval-id])))\n:log-all (fn [msg]\n(unrepl/write [:log msg nil]))\n:side-loader (atom nil)\n:prompt-vars #{#'*ns* #'*warn-on-reflection*}\n:actions-queue actions-queue})\ncurrent-eval-thread+promise (atom nil)\nsay-hello\n(fn []\n(unrepl/non-eliding-write\n[:unrepl/hello {:session session-id\n:actions (into\n{:start-aux `(start-aux ~session-id)\n:log-eval\n`(some-> ~session-id session :log-eval)\n:log-all\n`(some-> ~session-id session :log-all)\n:print-limits\n`(let [bak# {:unrepl.print/string-length unrepl/*string-length*\n:unrepl.print/coll-length *print-length*\n:unrepl.print/nesting-depth *print-level*}]\n(some->> ~(tagged-literal 'unrepl/param :unrepl.print/string-length) (set! unrepl/*string-length*))\n(some->> ~(tagged-literal 'unrepl/param :unrepl.print/coll-length) (set! *print-length*))\n(some->> ~(tagged-literal 'unrepl/param :unrepl.print/nesting-depth) (set! *print-level*))\nbak#)\n:set-source\n`(set-file-line-col ~session-id\n~(tagged-literal 'unrepl/param :unrepl/sourcename)\n~(tagged-literal 'unrepl/param :unrepl/line)\n~(tagged-literal 'unrepl/param :unrepl/column))\n:unrepl.jvm/start-side-loader\n`(attach-sideloader! ~session-id)\n:patch-result\n`(patch-result! ~(tagged-literal 'unrepl/param :unrepl/id)\n~(tagged-literal 'unrepl/param :unrepl/result))}\next-session-actions)}]))\ninterruptible-eval\n(fn [form]\n(try\n(let [original-bindings (get-thread-bindings)\np (promise)\nf\n(future\n(swap! session-state update :current-eval\nassoc :thread (Thread/currentThread))\n(with-bindings original-bindings\n(try\n(unrepl/non-eliding-write\n[:started-eval\n{:actions\n{:interrupt (list `interrupt! session-id eval-id)\n:background (list `background! session-id eval-id)}}\neval-id])\n(let [v (blame :eval (eval form))]\n(deliver p {:eval v :bindings (get-thread-bindings)})\nv)\n(catch Throwable t\n(deliver p {:ex t :bindings (get-thread-bindings)})\n(throw t)))))]\n(swap! session-state update :current-eval\ninto {:eval-id eval-id :promise p :future f})\n(let [{:keys [ex eval bindings]} @p]\n(swap! session-state assoc :bindings bindings)\n(doseq [[var val] bindings\n:when (not (identical? val (original-bindings var)))]\n(var-set var val))\n(if ex\n(throw ex)\neval)))\n(finally\n(swap! session-state assoc :current-eval {}))))\ncl (.getContextClassLoader (Thread/currentThread))\nslcl (classloader cl\n(fn [k x]\n(when-some [f (some-> session-state deref :side-loader deref)]\n(f k x))))]\n(swap! session-state assoc :class-loader slcl)\n(swap! sessions assoc session-id session-state)\n(binding [*out* (scheduled-writer :out unrepl/non-eliding-write)\nt/*test-out* (scheduled-writer :out unrepl/non-eliding-write)\n*err* (tagging-writer :err unrepl/non-eliding-write)\n*in* in\n*file* (-> in :coords :file)\n*source-path* *file*\n*default-data-reader-fn* tagged-literal\np/*elide* (partial (:put elision-store) session-id)\nunrepl/*string-length* unrepl/*string-length*\nunrepl/write (atomic-write raw-out)\nunrepl/read unrepl-read\neval-id 0\ninterrupted? #(.peek actions-queue)]\n(.setContextClassLoader (Thread/currentThread) slcl)\n(with-bindings {clojure.lang.Compiler/LOADER slcl}\n(try\n(m/repl\n:init #(do\n(swap! session-state assoc :bindings (get-thread-bindings))\n(say-hello))\n:need-prompt (constantly true)\n:prompt (fn []\n(when-some [f (.poll actions-queue)] (f))\n(unrepl/non-eliding-write [:prompt (into {:file *file*\n:line (.getLineNumber *in*)\n:column (.getColumnNumber *in*)\n:offset (:offset *in*)}\n(map (fn [v]\n(let [m (meta v)]\n[(symbol (name (ns-name (:ns m))) (name (:name m))) @v])))\n(:prompt-vars @session-state))\n(set! eval-id (inc eval-id))]))\n:read unrepl/read\n:eval (fn [form]\n(flushing [*err* (tagging-writer :err eval-id unrepl/non-eliding-write)\n*out* (scheduled-writer :out eval-id unrepl/non-eliding-write)]\n(interruptible-eval form)))\n:print (fn [x]\n(unrepl/write [:eval x eval-id]))\n:caught (fn [e]\n(let [{:keys [::ex ::phase]\n:or {ex e phase :repl}} (ex-data e)]\n(unrepl/write [:exception {:ex ex :phase phase} eval-id]))))\n(finally\n(.setContextClassLoader (Thread/currentThread) cl))))))))\n(defn start-aux [session-id]\n(let [cl (.getContextClassLoader (Thread/currentThread))]\n(try\n(some->> session-id session :class-loader (.setContextClassLoader (Thread/currentThread)))\n(start {})\n(finally\n(.setContextClassLoader (Thread/currentThread) cl)))))\n(defmacro ensure-ns [[fully-qualified-var-name & args :as expr]]\n`(do\n(require '~(symbol (namespace fully-qualified-var-name)))\n~expr))\n<<<FIN\n(clojure.core/ns user)\n(unrepl.repl$i9hjMxfOQ2IzbCA5TVia2QQEJNg/start (clojure.edn/read {:default tagged-literal} *in*))\n{}\n";
repl_tooling.repl_client.clojure.next_eval_BANG_ = (function repl_tooling$repl_client$clojure$next_eval_BANG_(state){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"ready","ready",1086465795))) && ((new cljs.core.Keyword(null,"processing","processing",-1576405467).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)) == null)))){
var temp__5753__auto__ = cljs.core.first(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(temp__5753__auto__)){
var cmd = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.Keyword(null,"pending","pending",-220036727),(function (p1__141450_SHARP_){
return cljs.core.vec(cljs.core.rest(p1__141450_SHARP_));
})),new cljs.core.Keyword(null,"processing","processing",-1576405467),cmd,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"evaluating","evaluating",-1934182114)], 0));
}));

return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)).write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cmd","cmd",-302931143).cljs$core$IFn$_invoke$arity$1(cmd)),"\n"].join(''));
} else {
return null;
}
} else {
return null;
}
});
repl_tooling.repl_client.clojure.add_to_eval_queue_BANG_ = (function repl_tooling$repl_client$clojure$add_to_eval_queue_BANG_(state,opts){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));

return repl_tooling.repl_client.clojure.next_eval_BANG_(state);
});
repl_tooling.repl_client.clojure.unrepl_cmd = (function repl_tooling$repl_client$clojure$unrepl_cmd(state,command,params){
var mapping = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__141462){
var vec__141463 = p__141462;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141463,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl-tooling","param","repl-tooling/param",-318862221),k], null),v], null);
}),params));
return clojure.walk.postwalk_replace(mapping,(function (){var G__141466 = new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
return (command.cljs$core$IFn$_invoke$arity$1 ? command.cljs$core$IFn$_invoke$arity$1(G__141466) : command.call(null,G__141466));
})());
});
repl_tooling.repl_client.clojure.prepare_opts = (function repl_tooling$repl_client$clojure$prepare_opts(repl,p__141468){
var map__141469 = p__141468;
var map__141469__$1 = cljs.core.__destructure_map(map__141469);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141469__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141469__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141469__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141469__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(repl)));
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("unrepl","sourcename","unrepl/sourcename",-2006456452),cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename),new cljs.core.Keyword("unrepl","column","unrepl/column",-1912295033),((function (){var or__4223__auto__ = col;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})() - (1)),new cljs.core.Keyword("unrepl","line","unrepl/line",-157112821),(((function (){var or__4223__auto__ = row;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})() - (1)) - (1))], null);
if(cljs.core.truth_(namespace)){
repl_tooling.repl_client.clojure.add_to_eval_queue_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),["(if (find-ns '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),")","  (in-ns '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),")","  (ns ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(namespace),"))"].join(''),new cljs.core.Keyword(null,"ignore-result?","ignore-result?",-184232560),true], null));
} else {
}

if(cljs.core.truth_((function (){var or__4223__auto__ = filename;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = row;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return col;
}
}
})())){
return repl_tooling.repl_client.clojure.add_to_eval_queue_BANG_(state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),repl_tooling.repl_client.clojure.unrepl_cmd(state,new cljs.core.Keyword(null,"set-source","set-source",-51914519),params),new cljs.core.Keyword(null,"ignore-result?","ignore-result?",-184232560),true], null));
} else {
return null;
}
});
repl_tooling.repl_client.clojure.default_tags = (function repl_tooling$repl_client$clojure$default_tags(tag,data){
return (new repl_tooling.editor_helpers.WithTag(data,tag));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IPrintWithWriter}
*/
repl_tooling.repl_client.clojure.IncompleteStr = (function (string){
this.string = string;
this.cljs$lang$protocol_mask$partition0$ = 2147614720;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(repl_tooling.repl_client.clojure.IncompleteStr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._write(writer,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(self__.string))," ..."].join('')], 0)));
}));

(repl_tooling.repl_client.clojure.IncompleteStr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-more","get-more",634750896),new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648).cljs$core$IFn$_invoke$arity$1(cljs.core.second(self__.string))], null);
}));

(repl_tooling.repl_client.clojure.IncompleteStr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"string","string",-349010059,null)], null);
}));

(repl_tooling.repl_client.clojure.IncompleteStr.cljs$lang$type = true);

(repl_tooling.repl_client.clojure.IncompleteStr.cljs$lang$ctorStr = "repl-tooling.repl-client.clojure/IncompleteStr");

(repl_tooling.repl_client.clojure.IncompleteStr.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"repl-tooling.repl-client.clojure/IncompleteStr");
}));

/**
 * Positional factory function for repl-tooling.repl-client.clojure/IncompleteStr.
 */
repl_tooling.repl_client.clojure.__GT_IncompleteStr = (function repl_tooling$repl_client$clojure$__GT_IncompleteStr(string){
return (new repl_tooling.repl_client.clojure.IncompleteStr(string));
});

repl_tooling.repl_client.clojure.decoders = (function (){var param_decoder = (function (p){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl-tooling","param","repl-tooling/param",-318862221),p], null);
});
var more_decoder = (function (p__141474){
var map__141475 = p__141474;
var map__141475__$1 = cljs.core.__destructure_map(map__141475);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141475__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("repl-tooling","...","repl-tooling/...",-2073461648),get], null);
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("unrepl","param","unrepl/param",131312670,null),param_decoder,new cljs.core.Symbol(null,"class","class",-390430469,null),cljs.core.identity,new cljs.core.Symbol("unrepl","...","unrepl/...",-549538797,null),more_decoder], null);
})();
repl_tooling.repl_client.clojure.eval_next_BANG_ = (function repl_tooling$repl_client$clojure$eval_next_BANG_(state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"ready","ready",1086465795));

return repl_tooling.repl_client.clojure.next_eval_BANG_(state);
});
repl_tooling.repl_client.clojure.start_eval_BANG_ = (function repl_tooling$repl_client$clojure$start_eval_BANG_(p__141480,state){
var map__141481 = p__141480;
var map__141481__$1 = cljs.core.__destructure_map(map__141481);
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141481__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"processing","processing",-1576405467),(function (p1__141478_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__141478_SHARP_,new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178).cljs$core$IFn$_invoke$arity$1(actions),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(actions)], 0));
}));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {repl_tooling.eval.Evaluator}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.repl_client.clojure.Evaluator = (function (session,__meta,__extmap,__hash){
this.session = session;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.repl_client.clojure.Evaluator.prototype.repl_tooling$eval$Evaluator$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.clojure.Evaluator.prototype.repl_tooling$eval$Evaluator$evaluate$arity$4 = (function (this$,command,opts,callback){
var self__ = this;
var this$__$1 = this;
var id = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.session));
var err = (function (){try{rewrite_clj.parser.parse_string_all(cljs.core.str.cljs$core$IFn$_invoke$arity$1(command));

return null;
}catch (e141488){var e = e141488;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e.message], 0)),new cljs.core.Keyword(null,"as-text","as-text",-449861067),e.message], null);
}})();
var eval_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"cmd","cmd",-302931143),["(do\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),"\n)"].join(''),new cljs.core.Keyword(null,"callback","callback",-705136228),callback,new cljs.core.Keyword(null,"ignore-result?","ignore-result?",-184232560),new cljs.core.Keyword(null,"ignore","ignore",-1631542033).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts)], null);
if(cljs.core.truth_(err)){
var fexpr__141490_141691 = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
(fexpr__141490_141691.cljs$core$IFn$_invoke$arity$1 ? fexpr__141490_141691.cljs$core$IFn$_invoke$arity$1(err) : fexpr__141490_141691.call(null,err));

(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(err) : callback.call(null,err));
} else {
repl_tooling.repl_client.clojure.prepare_opts(this$__$1,opts);

repl_tooling.repl_client.clojure.add_to_eval_queue_BANG_(state,eval_opts);
}

return id;
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.repl_tooling$eval$Evaluator$break$arity$2 = (function (this$,repl){
var self__ = this;
var this$__$1 = this;
var temp__5753__auto__ = new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"processing","processing",-1576405467).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.session)))));
if(cljs.core.truth_(temp__5753__auto__)){
var interrupt = temp__5753__auto__;
return repl_tooling.eval.evaluate(repl,interrupt,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true], null),cljs.core.identity);
} else {
return null;
}
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k141484,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__141494 = k141484;
var G__141494__$1 = (((G__141494 instanceof cljs.core.Keyword))?G__141494.fqn:null);
switch (G__141494__$1) {
case "session":
return self__.session;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k141484,else__4475__auto__);

}
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__141497){
var vec__141498 = p__141497;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141498,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141498,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.repl-client.clojure.Evaluator{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"session","session",1008279103),self__.session],null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__141483){
var self__ = this;
var G__141483__$1 = this;
return (new cljs.core.RecordIter((0),G__141483__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.repl_client.clojure.Evaluator(self__.session,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (1443790185 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this141485,other141486){
var self__ = this;
var this141485__$1 = this;
return (((!((other141486 == null)))) && ((((this141485__$1.constructor === other141486.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141485__$1.session,other141486.session)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141485__$1.__extmap,other141486.__extmap)))))));
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session","session",1008279103),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.repl_client.clojure.Evaluator(self__.session,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k141484){
var self__ = this;
var this__4479__auto____$1 = this;
var G__141514 = k141484;
var G__141514__$1 = (((G__141514 instanceof cljs.core.Keyword))?G__141514.fqn:null);
switch (G__141514__$1) {
case "session":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k141484);

}
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__141483){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__141517 = cljs.core.keyword_identical_QMARK_;
var expr__141518 = k__4481__auto__;
if(cljs.core.truth_((pred__141517.cljs$core$IFn$_invoke$arity$2 ? pred__141517.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"session","session",1008279103),expr__141518) : pred__141517.call(null,new cljs.core.Keyword(null,"session","session",1008279103),expr__141518)))){
return (new repl_tooling.repl_client.clojure.Evaluator(G__141483,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.repl_client.clojure.Evaluator(self__.session,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__141483),null));
}
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"session","session",1008279103),self__.session,null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__141483){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.repl_client.clojure.Evaluator(self__.session,G__141483,self__.__extmap,self__.__hash));
}));

(repl_tooling.repl_client.clojure.Evaluator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.repl_client.clojure.Evaluator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"session","session",-1646156666,null)], null);
}));

(repl_tooling.repl_client.clojure.Evaluator.cljs$lang$type = true);

(repl_tooling.repl_client.clojure.Evaluator.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.repl-client.clojure/Evaluator",null,(1),null));
}));

(repl_tooling.repl_client.clojure.Evaluator.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.repl-client.clojure/Evaluator");
}));

/**
 * Positional factory function for repl-tooling.repl-client.clojure/Evaluator.
 */
repl_tooling.repl_client.clojure.__GT_Evaluator = (function repl_tooling$repl_client$clojure$__GT_Evaluator(session){
return (new repl_tooling.repl_client.clojure.Evaluator(session,null,null,null));
});

/**
 * Factory function for repl-tooling.repl-client.clojure/Evaluator, taking a map of keywords to field values.
 */
repl_tooling.repl_client.clojure.map__GT_Evaluator = (function repl_tooling$repl_client$clojure$map__GT_Evaluator(G__141487){
var extmap__4512__auto__ = (function (){var G__141527 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__141487,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.record_QMARK_(G__141487)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__141527);
} else {
return G__141527;
}
})();
return (new repl_tooling.repl_client.clojure.Evaluator(new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(G__141487),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.repl_client.clojure.send_result_BANG_ = (function repl_tooling$repl_client$clojure$send_result_BANG_(res,exception_QMARK_,state){
var as_text = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([res], 0));
var key = (cljs.core.truth_(exception_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"result","result",1415092211));
var msg = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"processing","processing",-1576405467).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"as-text","as-text",-449861067),as_text,key,as_text])], 0));
var on_out = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(new cljs.core.Keyword(null,"ignore-result?","ignore-result?",-184232560).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"processing","processing",-1576405467).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))))){
} else {
(on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(msg) : on_out.call(null,msg));
}

var temp__5753__auto___141713 = new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"processing","processing",-1576405467).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)));
if(cljs.core.truth_(temp__5753__auto___141713)){
var callback_141714 = temp__5753__auto___141713;
(callback_141714.cljs$core$IFn$_invoke$arity$1 ? callback_141714.cljs$core$IFn$_invoke$arity$1(msg) : callback_141714.call(null,msg));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"processing","processing",-1576405467),null);
});
repl_tooling.repl_client.clojure.send_output_BANG_ = (function repl_tooling$repl_client$clojure$send_output_BANG_(out,state,err_QMARK_){
var on_out = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
if(cljs.core.truth_(err_QMARK_)){
var G__141545 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",-2089457205),out], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__141545) : on_out.call(null,G__141545));
} else {
var G__141546 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),out], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__141546) : on_out.call(null,G__141546));
}
});
repl_tooling.repl_client.clojure.send_patch_BANG_ = (function repl_tooling$repl_client$clojure$send_patch_BANG_(p__141550,state){
var vec__141551 = p__141550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141551,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141551,(1),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141551,(2),null);
var as_text = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([res], 0));
var on_out = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var G__141554 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-text","as-text",-449861067),as_text,new cljs.core.Keyword(null,"result","result",1415092211),as_text], null)], null)], null);
return (on_out.cljs$core$IFn$_invoke$arity$1 ? on_out.cljs$core$IFn$_invoke$arity$1(G__141554) : on_out.call(null,G__141554));
});
repl_tooling.repl_client.clojure.treat_unrepl_message_BANG_ = (function repl_tooling$repl_client$clojure$treat_unrepl_message_BANG_(raw_out,state){
var parsed = (function (){try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readers","readers",-2118263030),repl_tooling.repl_client.clojure.decoders,new cljs.core.Keyword(null,"default","default",-1987822328),repl_tooling.repl_client.clojure.default_tags], null),raw_out);
}catch (e141559){var _ = e141559;
return null;
}})();
var vec__141556 = ((cljs.core.vector_QMARK_(parsed))?parsed:null);
var cmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141556,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141556,(1),null);
var G__141562 = cmd;
var G__141562__$1 = (((G__141562 instanceof cljs.core.Keyword))?G__141562.fqn:null);
switch (G__141562__$1) {
case "prompt":
return repl_tooling.repl_client.clojure.eval_next_BANG_(state);

break;
case "started-eval":
return repl_tooling.repl_client.clojure.start_eval_BANG_(args,state);

break;
case "eval":
return repl_tooling.repl_client.clojure.send_result_BANG_(args,false,state);

break;
case "exception":
return repl_tooling.repl_client.clojure.send_result_BANG_(args,true,state);

break;
case "patch":
return repl_tooling.repl_client.clojure.send_patch_BANG_(parsed,state);

break;
case "out":
return repl_tooling.repl_client.clojure.send_output_BANG_(args,state,false);

break;
case "err":
return repl_tooling.repl_client.clojure.send_output_BANG_(args,state,true);

break;
default:
return new cljs.core.Keyword(null,"nothing-really","nothing-really",-524607723);

}
});
repl_tooling.repl_client.clojure.treat_hello_BANG_ = (function repl_tooling$repl_client$clojure$treat_hello_BANG_(hello,state){
var vec__141566 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),repl_tooling.repl_client.clojure.decoders], null),hello);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141566,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141566,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(res),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(res)], 0));
});
repl_tooling.repl_client.clojure.treat_all_output_BANG_ = (function repl_tooling$repl_client$clojure$treat_all_output_BANG_(raw_out,state){
var temp__5751__auto__ = cljs.core.re_find(/\[:unrepl\/hello.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_out));
if(cljs.core.truth_(temp__5751__auto__)){
var hello = temp__5751__auto__;
return repl_tooling.repl_client.clojure.treat_hello_BANG_(hello,state);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return repl_tooling.repl_client.clojure.treat_unrepl_message_BANG_(cljs.core.re_find(/\[.*/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_out)),state);
} else {
var G__141574 = cljs.core.deref(state);
var G__141574__$1 = (((G__141574 == null))?null:new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(G__141574));
var G__141574__$2 = (((G__141574__$1 == null))?null:cljs.core.deref(G__141574__$1));
var G__141574__$3 = (((G__141574__$2 == null))?null:new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(G__141574__$2));
if((G__141574__$3 == null)){
return null;
} else {
return (function (p1__141570_SHARP_){
var G__141577 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_out)], null);
return (p1__141570_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__141570_SHARP_.cljs$core$IFn$_invoke$arity$1(G__141577) : p1__141570_SHARP_.call(null,G__141577));
})(G__141574__$3);
}
}
}
});
repl_tooling.repl_client.clojure.prepare_unrepl_evaluator = (function repl_tooling$repl_client$clojure$prepare_unrepl_evaluator(conn,control,on_output){
var state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"starting","starting",-1852141466),new cljs.core.Keyword(null,"processing","processing",-1576405467),null,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"conn","conn",278309663),conn,new cljs.core.Keyword(null,"on-output","on-output",-2023300495),on_output], null));
var session = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),state], null));
conn.write(repl_tooling.repl_client.clojure.clj_blob);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(control,cljs.core.assoc,new cljs.core.Keyword(null,"on-line","on-line",657365746),(function (p1__141579_SHARP_){
if(cljs.core.truth_(p1__141579_SHARP_)){
return repl_tooling.repl_client.clojure.treat_all_output_BANG_(p1__141579_SHARP_,state);
} else {
return (on_output.cljs$core$IFn$_invoke$arity$1 ? on_output.cljs$core$IFn$_invoke$arity$1(null) : on_output.call(null,null));
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-fragment","on-fragment",-1898612620),cljs.core.identity], 0));

return repl_tooling.repl_client.clojure.__GT_Evaluator(session);
});
repl_tooling.repl_client.clojure.eval_code = (function repl_tooling$repl_client$clojure$eval_code(p__141585,opts){
var map__141586 = p__141585;
var map__141586__$1 = cljs.core.__destructure_map(map__141586);
var evaluator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141586__$1,new cljs.core.Keyword(null,"evaluator","evaluator",704655039));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141586__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141586__$1,new cljs.core.Keyword(null,"callback","callback",-705136228));
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141586__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141586__$1,new cljs.core.Keyword(null,"code","code",1586293142));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(evaluator),cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"callback","callback",-705136228),callback,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),new cljs.core.Keyword(null,"ignore","ignore",-1631542033).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(opts)], null));

var temp__5753__auto___141731 = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5753__auto___141731)){
var ns_name_141732 = temp__5753__auto___141731;
conn.write(["(in-ns '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name_141732),")\n"].join(''));
} else {
}

conn.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(code)),"\n"].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"evaluator","evaluator",704655039).cljs$core$IFn$_invoke$arity$1(evaluator)),cljs.core.assoc,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.PersistentVector.EMPTY);
});
repl_tooling.repl_client.clojure.cljs_blob = "(clojure.core/let [tooling$norm$walk (clojure.core/atom nil)\n\n                   tooling$norm$jsbeam\n                   (clojure.core/fn [js-obj]\n                     (clojure.core/tagged-literal\n                      'unrepl/browsable\n                      [(if (clojure.core/= js/Function (clojure.core/type js-obj))\n                         (clojure.core/let [fn-name (clojure.core/-> js-obj .-name cljs.core/demunge)\n                                            fn-name (if (clojure.core/empty? fn-name)\n                                                      (clojure.core/pr-str js-obj)\n                                                      fn-name)]\n                           (clojure.core/tagged-literal 'unrepl/bad-symbol\n                                                          [nil\n                                                           (clojure.core/str\n                                                            fn-name\n                                                            \" (function)\")]))\n                         (if (try (cljs.reader/read-string {:default clojure.core/tagged-literal}\n                                                           (clojure.core/pr-str js-obj))\n                               (catch :default _ nil))\n                           js-obj\n                           (clojure.core/tagged-literal 'unrepl/bad-symbol [nil (clojure.core/pr-str js-obj)])))\n                       {:repl-tooling/... `(quote\n                                             ~(->> js-obj\n                                                  js/Object.getPrototypeOf\n                                                  js/Object.getOwnPropertyNames\n                                                  (clojure.core/concat (js/Object.getOwnPropertyNames js-obj))\n                                                  distinct\n                                                  sort\n                                                  (clojure.core/map #(clojure.core/symbol (str \".\" %)))))}]))\n\n                   res-fn\n                   (clojure.core/fn [res]\n                     (clojure.core/cond\n                       (clojure.core/= \"cljs.core/Atom\" (clojure.core/pr-str (clojure.core/type res)))\n                       (clojure.core/tagged-literal 'atom\n                         (@tooling$norm$walk @res))\n\n                       ; Reagent fixes...\n                       (clojure.core/= \"reagent.ratom/RAtom\" (clojure.core/pr-str (clojure.core/type res)))\n                       (clojure.core/tagged-literal 'reagent.ratom/RAtom\n                         (@tooling$norm$walk @res))\n\n                       (clojure.core/instance? cljs.core/ExceptionInfo res)\n                       (clojure.core/tagged-literal 'error\n                         {:type \"cljs.core.ExceptionInfo\"\n                          :data (.-data res)\n                          :message (.-message res)\n                          :trace (clojure.core/->> res .-stack clojure.string/split-lines)})\n\n                       (clojure.core/instance? js/Error res)\n                       (clojure.core/tagged-literal 'error\n                         {:type (.-name res)\n                          :message (.-message res)\n                          :trace (clojure.core/->> res .-stack clojure.string/split-lines)})\n\n                       (clojure.core/symbol? res)\n                       (if (clojure.core/re-find (clojure.core/re-pattern \"\\\\s\") (str res))\n                        (clojure.core/symbol (clojure.core/str \"#unrepl/bad-symbol [nil \"\n                                                  (clojure.core/pr-str (clojure.core/str res))\n                                                  \"]\"))\n                        res)\n\n                       (clojure.core/keyword? res)\n                       (if (clojure.core/re-find (clojure.core/re-pattern \"\\\\s\") (str res))\n                        (clojure.core/symbol (clojure.core/str \"#unrepl/bad-keyword [\"\n                                               (clojure.core/pr-str (clojure.core/namespace res)) \" \"\n                                               (clojure.core/pr-str (clojure.core/name res))\n                                               \"]\"))\n                        res)\n\n                       (clojure.core/instance? js/Promise res)\n                       (clojure.core/let [id (clojure.core/gensym \"patch\")]\n                         (.then res\n                                (clojure.core/fn [resolved]\n                                  (cljs.core/tap>\n                                   (clojure.core/tagged-literal\n                                    'repl-tooling/patch\n                                    [id\n                                     (clojure.core/pr-str\n                                      (clojure.core/tagged-literal\n                                       'promise\n                                       (@tooling$norm$walk resolved)))]))))\n                         (clojure.core/tagged-literal\n                          'repl-tooling/patchable [id (clojure.core/tagged-literal 'promise '<pending>)]))\n\n                       ;; Collections...\n                       (clojure.core/map? res)\n                       (clojure.core/let [norm (clojure.core/->> res\n                                                                 (clojure.core/map #(clojure.core/mapv @tooling$norm$walk %))\n                                                                 (clojure.core/into {}))]\n                         (if (clojure.core/record? res)\n                           (clojure.core/tagged-literal\n                            (clojure.core/symbol (clojure.core/pr-str (clojure.core/type res)))\n                            norm)\n                           norm))\n\n                       (clojure.core/vector? res)\n                       (clojure.core/mapv @tooling$norm$walk res)\n\n                       (clojure.core/set? res)\n                       (clojure.core/->> res (clojure.core/map @tooling$norm$walk) (clojure.core/into #{}))\n\n                       (clojure.core/coll? res)\n                       (clojure.core/map @tooling$norm$walk res)\n\n                       (clojure.core/keyword? res) res\n                       (clojure.core/= nil res) res\n                       (clojure.core/boolean? res) res\n                       (clojure.core/number? res) res\n                       (clojure.core/string? res) res\n                       (clojure.core/regexp? res) res\n                       :else (tooling$norm$jsbeam res)))]\n  (try\n    (clojure.core/reset! tooling$norm$walk (clojure.core/memoize res-fn))\n                        ; (clojure.core/fn [res]\n                          ; (if (clojure.core/record? res)\n                          ;   (clojure.walk/postwalk (clojure.core/fn [a] (res-fn a false)) res)\n                            ; (if (clojure.core/coll? res)\n                            ;   (clojure.walk/postwalk (clojure.core/fn [a] (res-fn a)) res)\n                              ; (res-fn res))\n\n    (clojure.core/let [res (do __COMMAND__)]\n      ['tooling$eval-res '__ID__ {:result (clojure.core/pr-str (@tooling$norm$walk res))\n                                  :as-text (clojure.core/pr-str (@tooling$norm$walk res))}])\n    (catch :default e ['tooling$eval-res '__ID__ {:error (clojure.core/pr-str (@tooling$norm$walk e))\n                                                  :as-text (clojure.core/pr-str (@tooling$norm$walk e))}])))\n";

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {repl_tooling.eval.Evaluator}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
repl_tooling.repl_client.clojure.SelfHostedCljs = (function (evaluator,pending,__meta,__extmap,__hash){
this.evaluator = evaluator;
this.pending = pending;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.repl_tooling$eval$Evaluator$ = cljs.core.PROTOCOL_SENTINEL);

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.repl_tooling$eval$Evaluator$evaluate$arity$4 = (function (self,command,opts,callback){
var self__ = this;
var self__$1 = this;
var id = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var state = cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(self__.evaluator))));
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(state);
var code = repl_tooling.repl_client.source.wrap_command.cljs$core$IFn$_invoke$arity$5(repl_tooling.repl_client.clojure.cljs_blob,id,command,new cljs.core.Keyword(null,"default","default",-1987822328),false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674).cljs$core$IFn$_invoke$arity$1(opts))){
conn.write([cljs.core.str.cljs$core$IFn$_invoke$arity$1(command),"\n"].join(''));

var G__141605_141737 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),"nil",new cljs.core.Keyword(null,"as-text","as-text",-449861067),"nil"], null);
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__141605_141737) : callback.call(null,G__141605_141737));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(code))){
var output_141739 = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(state);
(output_141739.cljs$core$IFn$_invoke$arity$1 ? output_141739.cljs$core$IFn$_invoke$arity$1(code) : output_141739.call(null,code));

(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(code) : callback.call(null,code));
} else {
repl_tooling.repl_client.clojure.eval_code(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"evaluator","evaluator",704655039),self__$1,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"callback","callback",-705136228),callback,new cljs.core.Keyword(null,"conn","conn",278309663),conn,new cljs.core.Keyword(null,"code","code",1586293142),code], null),opts);
}
}

return id;
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.repl_tooling$eval$Evaluator$break$arity$2 = (function (this$,repl){
var self__ = this;
var this$__$1 = this;
return null;
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k141595,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__141611 = k141595;
var G__141611__$1 = (((G__141611 instanceof cljs.core.Keyword))?G__141611.fqn:null);
switch (G__141611__$1) {
case "evaluator":
return self__.evaluator;

break;
case "pending":
return self__.pending;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k141595,else__4475__auto__);

}
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__141613){
var vec__141614 = p__141613;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141614,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141614,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#repl-tooling.repl-client.clojure.SelfHostedCljs{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"evaluator","evaluator",704655039),self__.evaluator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pending","pending",-220036727),self__.pending],null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__141594){
var self__ = this;
var G__141594__$1 = this;
return (new cljs.core.RecordIter((0),G__141594__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluator","evaluator",704655039),new cljs.core.Keyword(null,"pending","pending",-220036727)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new repl_tooling.repl_client.clojure.SelfHostedCljs(self__.evaluator,self__.pending,self__.__meta,self__.__extmap,self__.__hash));
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1719236377 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this141596,other141597){
var self__ = this;
var this141596__$1 = this;
return (((!((other141597 == null)))) && ((((this141596__$1.constructor === other141597.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141596__$1.evaluator,other141597.evaluator)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141596__$1.pending,other141597.pending)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this141596__$1.__extmap,other141597.__extmap)))))))));
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pending","pending",-220036727),null,new cljs.core.Keyword(null,"evaluator","evaluator",704655039),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new repl_tooling.repl_client.clojure.SelfHostedCljs(self__.evaluator,self__.pending,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k141595){
var self__ = this;
var this__4479__auto____$1 = this;
var G__141635 = k141595;
var G__141635__$1 = (((G__141635 instanceof cljs.core.Keyword))?G__141635.fqn:null);
switch (G__141635__$1) {
case "evaluator":
case "pending":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k141595);

}
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__141594){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__141637 = cljs.core.keyword_identical_QMARK_;
var expr__141638 = k__4481__auto__;
if(cljs.core.truth_((pred__141637.cljs$core$IFn$_invoke$arity$2 ? pred__141637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"evaluator","evaluator",704655039),expr__141638) : pred__141637.call(null,new cljs.core.Keyword(null,"evaluator","evaluator",704655039),expr__141638)))){
return (new repl_tooling.repl_client.clojure.SelfHostedCljs(G__141594,self__.pending,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__141637.cljs$core$IFn$_invoke$arity$2 ? pred__141637.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),expr__141638) : pred__141637.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),expr__141638)))){
return (new repl_tooling.repl_client.clojure.SelfHostedCljs(self__.evaluator,G__141594,self__.__meta,self__.__extmap,null));
} else {
return (new repl_tooling.repl_client.clojure.SelfHostedCljs(self__.evaluator,self__.pending,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__141594),null));
}
}
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"evaluator","evaluator",704655039),self__.evaluator,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pending","pending",-220036727),self__.pending,null))], null),self__.__extmap));
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__141594){
var self__ = this;
var this__4471__auto____$1 = this;
return (new repl_tooling.repl_client.clojure.SelfHostedCljs(self__.evaluator,self__.pending,G__141594,self__.__extmap,self__.__hash));
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"evaluator","evaluator",-1949780730,null),new cljs.core.Symbol(null,"pending","pending",1420494800,null)], null);
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.cljs$lang$type = true);

(repl_tooling.repl_client.clojure.SelfHostedCljs.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"repl-tooling.repl-client.clojure/SelfHostedCljs",null,(1),null));
}));

(repl_tooling.repl_client.clojure.SelfHostedCljs.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"repl-tooling.repl-client.clojure/SelfHostedCljs");
}));

/**
 * Positional factory function for repl-tooling.repl-client.clojure/SelfHostedCljs.
 */
repl_tooling.repl_client.clojure.__GT_SelfHostedCljs = (function repl_tooling$repl_client$clojure$__GT_SelfHostedCljs(evaluator,pending){
return (new repl_tooling.repl_client.clojure.SelfHostedCljs(evaluator,pending,null,null,null));
});

/**
 * Factory function for repl-tooling.repl-client.clojure/SelfHostedCljs, taking a map of keywords to field values.
 */
repl_tooling.repl_client.clojure.map__GT_SelfHostedCljs = (function repl_tooling$repl_client$clojure$map__GT_SelfHostedCljs(G__141600){
var extmap__4512__auto__ = (function (){var G__141647 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__141600,new cljs.core.Keyword(null,"evaluator","evaluator",704655039),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pending","pending",-220036727)], 0));
if(cljs.core.record_QMARK_(G__141600)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__141647);
} else {
return G__141647;
}
})();
return (new repl_tooling.repl_client.clojure.SelfHostedCljs(new cljs.core.Keyword(null,"evaluator","evaluator",704655039).cljs$core$IFn$_invoke$arity$1(G__141600),new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(G__141600),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

repl_tooling.repl_client.clojure.treat_result_of_call = (function repl_tooling$repl_client$clojure$treat_result_of_call(out,pending,output_fn,buffer){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("repl-tooling.repl-client.clojure","ignore-next","repl-tooling.repl-client.clojure/ignore-next",11652063),cljs.core.deref(buffer))){
cljs.core.reset_BANG_(buffer,null);
} else {
}

var full_out = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(buffer)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(out)].join('');
var vec__141649 = cljs.core.re_find(/^\[tooling\$eval-res (.+?) /,full_out);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141649,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141649,(1),null);
var temp__5751__auto__ = (function (){var G__141652 = id;
var G__141652__$1 = (((G__141652 == null))?null:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__141652));
if((G__141652__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pending),G__141652__$1);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var pendency = temp__5751__auto__;
if(((clojure.string.ends_with_QMARK_(full_out,"\n")) || (clojure.string.ends_with_QMARK_(full_out,"\r\n")))){
var vec__141653 = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),repl_tooling.repl_client.clojure.default_tags], null),full_out);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141653,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141653,(1),null);
var parsed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__141653,(2),null);
cljs.core.reset_BANG_(buffer,new cljs.core.Keyword("repl-tooling.repl-client.clojure","ignore-next","repl-tooling.repl-client.clojure/ignore-next",11652063));

var G__141658_141763 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(pendency),parsed], 0));
var fexpr__141657_141764 = new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(pendency);
(fexpr__141657_141764.cljs$core$IFn$_invoke$arity$1 ? fexpr__141657_141764.cljs$core$IFn$_invoke$arity$1(G__141658_141763) : fexpr__141657_141764.call(null,G__141658_141763));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pending,cljs.core.dissoc,id);

if(cljs.core.truth_(new cljs.core.Keyword(null,"ignore","ignore",-1631542033).cljs$core$IFn$_invoke$arity$1(pendency))){
return null;
} else {
var G__141659 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(pendency),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-text","as-text",-449861067),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parsed], 0))], null),parsed], 0));
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__141659) : output_fn.call(null,G__141659));
}
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(buffer,cljs.core.str,out);
}
} else {
cljs.core.reset_BANG_(buffer,null);

var G__141660 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),full_out], null);
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__141660) : output_fn.call(null,G__141660));
}
});
repl_tooling.repl_client.clojure.pending_evals_for_cljs = (function repl_tooling$repl_client$clojure$pending_evals_for_cljs(pending,output_fn,buffer){
return (function (p__141662){
var map__141663 = p__141662;
var map__141663__$1 = cljs.core.__destructure_map(map__141663);
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__141663__$1,new cljs.core.Keyword(null,"out","out",-910545517));
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(buffer),new cljs.core.Keyword("repl-tooling.repl-client.clojure","ignore-next","repl-tooling.repl-client.clojure/ignore-next",11652063));
if(and__4221__auto__){
return cljs.core.re_find(/=> \r?\n?$/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(out));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.reset_BANG_(buffer,null);
} else {
if(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.deref(buffer);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = out;
if(cljs.core.truth_(and__4221__auto__)){
return clojure.string.starts_with_QMARK_(out,"[tooling$eval-res");
} else {
return and__4221__auto__;
}
}
})())){
return repl_tooling.repl_client.clojure.treat_result_of_call(out,pending,output_fn,buffer);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(out,"nil\n")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(out,"nil\r\n")))){
return cljs.core.reset_BANG_(buffer,new cljs.core.Keyword("repl-tooling.repl-client.clojure","ignore-next","repl-tooling.repl-client.clojure/ignore-next",11652063));
} else {
var G__141665 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"out","out",-910545517),out], null);
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__141665) : output_fn.call(null,G__141665));

}
}
}
});
});
repl_tooling.repl_client.clojure.make_requires_BANG_ = (function repl_tooling$repl_client$clojure$make_requires_BANG_(cljs_repl,resolve){
repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(cljs_repl,"(require 'clojure.string)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674),true], null));

repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$3(cljs_repl,"(require 'cljs.reader)",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674),true], null));

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(cljs_repl) : resolve.call(null,cljs_repl));
});
repl_tooling.repl_client.clojure.self_host = (function repl_tooling$repl_client$clojure$self_host(clj_evaluator,command){
var pending = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var buffer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var cljs_repl = repl_tooling.repl_client.clojure.__GT_SelfHostedCljs(clj_evaluator,pending);
var old_fn = new cljs.core.Keyword(null,"on-output","on-output",-2023300495).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(clj_evaluator)))));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(clj_evaluator))),cljs.core.assoc,new cljs.core.Keyword(null,"on-output","on-output",-2023300495),repl_tooling.repl_client.clojure.pending_evals_for_cljs(pending,old_fn,buffer));

return (new Promise((function (resolve){
repl_tooling.eval.evaluate(clj_evaluator,command,cljs.core.PersistentArrayMap.EMPTY,(function (res){
if(cljs.core.contains_QMARK_(res,new cljs.core.Keyword(null,"error","error",-978969032))){
return repl_tooling.editor_helpers.parse_result(res);
} else {
return repl_tooling.repl_client.clojure.make_requires_BANG_(cljs_repl,resolve);
}
}));

return setTimeout((function (){
return repl_tooling.repl_client.clojure.make_requires_BANG_(cljs_repl,resolve);
}),(500));
})));
});
repl_tooling.repl_client.clojure.disable_limits_BANG_ = (function repl_tooling$repl_client$clojure$disable_limits_BANG_(aux){
if((aux instanceof repl_tooling.repl_client.clojure.Evaluator)){
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(aux,":disable-limits").then((function (){
return repl_tooling.eval.eval.cljs$core$IFn$_invoke$arity$2(aux,repl_tooling.repl_client.clojure.unrepl_cmd(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(aux.session)),new cljs.core.Keyword(null,"print-limits","print-limits",1314606156),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("unrepl.print","string-length","unrepl.print/string-length",-1700407820),(9223372036854775807),new cljs.core.Keyword("unrepl.print","coll-length","unrepl.print/coll-length",-1957549145),(9223372036854775807),new cljs.core.Keyword("unrepl.print","nesting-depth","unrepl.print/nesting-depth",659752197),(9223372036854775807)], null)));
}));
} else {
return Promise.resolve(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"as-text","as-text",-449861067),"nil"], null));
}
});

//# sourceMappingURL=repl_tooling.repl_client.clojure.js.map
