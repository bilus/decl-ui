(ns decl-ui.compile
  (:require [reagent.core :refer [atom]]
            [reagent.ratom :refer [RAtom Reaction cursor]]
            [clojure.walk :as walk]
            [cljs.reader :as reader])
  (:require-macros [decl-ui.reader-tags :refer [with-reader-tags]]
                   [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Helper/callback resolution

(defn fallback-handler
  [el]
  ;el
  (mapv
    (fn [x]
      (if (satisfies? IAtom x)
        @x
        x))
    el))

(defn resolve-helper
  [helpers el]
  (let [tag (first el)
        handler (helpers tag)]
    (or (when handler (handler el)) (fallback-handler el))))


(defn resolve-callback
  [callbacks form]
  (cond
    (symbol? form) (or (callbacks form) form)
    (seq? form) (let [[f & args] form
                      callback (callbacks f)]
                  (assert (symbol? f) (str "undefined " f " in " form))
                  (assert callback (str "undefined " f " in " form))
                  (fn [ev] (apply callback ev args)))
    :else form))

(defn resolve-callbacks
  [callbacks attrs]
  (->> attrs
       (map (fn [[k v]]
              [k (resolve-callback callbacks v)]))
       (into {})))

(defrecord CompileContext [helpers callbacks])

(defprotocol ICompileSubForm
  (compile-sub-form [this context]))

(extend-type PersistentArrayMap
  ICompileSubForm
  (compile-sub-form [this {callbacks :callbacks}]
    (resolve-callbacks callbacks this)))

(extend-type PersistentHashMap
  ICompileSubForm
  (compile-sub-form [this {callbacks :callbacks}]
    (resolve-callbacks callbacks this)))

(extend-type PersistentVector
  ICompileSubForm
  (compile-sub-form [this {helpers :helpers}]
    (resolve-helper helpers this)))

(extend-type default
  ICompileSubForm
  (compile-sub-form [this _context]
    this))

(defn compile-edn
  [helpers callbacks edn]
  (let [context (CompileContext. helpers callbacks)]
    (walk/postwalk
      (fn [x] (compile-sub-form x context))
      edn)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Cells

(defn read-bind-tag
  [cells callbacks form]
  (let [result (cond
                 (keyword? form) (cells form)
                 (and (vector? form) (every? keyword? form)) (if (= 1 (count form))
                                                               (cells (first form))
                                                               (cursor (cells (first form)) (rest form)))
                 :else (when-let [callback (resolve-callback callbacks form)]
                         (reaction (callback))))]
    (assert (some? result) (str "Cannot bind to " form))
    ;(let [pad (fn [s w]
    ;            (apply str (take w (concat s (repeat " ")))))]
    ;  (println "Binding" (pad (pr-str form) 30) "\t=>\t" (pr-str result)))
    result))

(def tag-parsers {"bind" read-bind-tag
                  "="    read-bind-tag})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public
(defn compile-ui
  [cells ui-def helpers callbacks]
  (with-reader-tags
    tag-parsers [cells callbacks]
    (->> ui-def
         reader/read-string
         (compile-edn helpers callbacks))))
