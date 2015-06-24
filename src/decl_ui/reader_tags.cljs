(ns decl-ui.reader-tags
  (:require [decl-ui.callbacks :as callbacks]
            [reagent.ratom :refer [cursor]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn read-bind-tag
  [cells callbacks form]
  (let [result (cond
                 (keyword? form) (cells form)
                 (and (vector? form) (every? keyword? form)) (if (= 1 (count form))
                                                               (cells (first form))
                                                               (cursor (cells (first form)) (rest form)))
                 :else (when-let [callback (callbacks/compile callbacks form)]
                         (reaction (callback))))]
    (assert (some? result) (str "Cannot bind to " form))
    ;(let [pad (fn [s w]
    ;            (apply str (take w (concat s (repeat " ")))))]
    ;  (println "Binding" (pad (pr-str form) 30) "\t=>\t" (pr-str result)))
    result))

(def default-tag-parsers {"bind" read-bind-tag
                          "="    read-bind-tag})