(ns repl-tooling.prettify-exception
  (:require [clojure.string :as s]
            [repl-tooling.error-dictionary :as err-dict]
            [repl-tooling.dictionaries :as dictionaries]))

;; Main error processing file. Standard errors are processed by `standard` function, and
;; modified errors are processed by `prettify-exception` function.

;; Original babel function
(defn first-match
  [e-class message]
  (first (filter #(and (= (:class %) e-class) (re-matches (:match %) message))
                 err-dict/error-dictionary)))

;; Original babel function
(defn get-match
  [e-class message]
  (let [match (first-match e-class message)]
    (or match (first-match "default" message))))

;; Original babel function
(defn fn-name
  "Takes a function object and returns a symbol that corresponds to the result of
   the lookup of its name.
   If no name is found, a symbol 'anonymous function' (non-conformant)
   is returned.
   Handles spec-checking functions differently since they are looked up in corefns-map
   by full name.
   Warning: 'anonymous function' symbol is non-conformant"
  [f]
  (let [f-str (str f)]
    (if (re-matches #"clojure\.spec\.test\$spec_checking_fn(.*)" f-str)
      (symbol (get-function-name f-str))
      (symbol (get-function-name (.getName (type f)))))))

;; Original babel function
(defn msg-from-matched-entry
  "Returns the modified error message by applying a function in the error
  dictionary to the message. If no match found, returns the message as is"
  [entry message]
  (cond
    ;(and data entry) (msg-info-obj-with-data entry message data)
    entry ((:fn entry) (re-matches (:match entry) message))
    :else message))

;; Original babel function
(defn process-errors
  "Takes a message from an exception as a string and returns a message object,
  to be displayed by the repl or IDE"
  [t m]
  (let [e-class (nth (re-matches #"(\w+)\.(\w+)\.(.*)" (str t)) 3)
        message (or m "") ; m can be nil
        entry (get-match e-class message)
        modified (msg-from-matched-entry entry message)]
       modified))

;; Modified babel function, the only change is that t is given as a String, so 
;; we don't need to use (str t) in the re-matches for e-class
(defn str-process-errors
  "Takes a message from an exception as a string and returns a message object,
  to be displayed by the repl or IDE"
  [t m]
  (let [e-class (nth (re-matches #"(\w+)\.(\w+)\.(.*)" t) 3)
        message (or m "") ; m can be nil
        entry (get-match e-class message)
        modified (msg-from-matched-entry entry message)]
       modified))
;; 4/25/2023: e-class gets the correct "error class"
;; 4/25/2023: message gets the correct message
;; 4/25/2023: entry is "" for some reason, maybe something to do with get-match and the functions it uses? FIXED
;; 4/27/2023: TODO: There are a few cases in which msg-from-matched-entry leads to an error,
; (+ 2 "hi") for example, but for most cases it works find

;#########################################
;############ Location format  ###########
;#########################################

(defn line-number-format
  "Takes a line number and a character position and returns a string
   of how they are reported in an error message"
  [line ch]
  (str " on, or before, line " line))
