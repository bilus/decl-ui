(ns decl-ui.reader-tags
  (:require [decl-ui.callbacks :as callbacks]
            [decl-ui.bindings :refer [IUnresolvedBinding]]
            [reagent.ratom :refer [cursor]])
  (:require-macros [reagent.ratom :refer [reaction]]))

(defn read-bind-tag
  [callbacks form]
  (let [result (cond
                 (keyword? form) (reify
                                   IUnresolvedBinding
                                   (-resolve [_ cells]
                                     (cells form)))
                 (and (vector? form) (every? keyword? form)) (if (= 1 (count form))
                                                               (reify
                                                                 IUnresolvedBinding
                                                                 (-resolve [_ cells]
                                                                   (cells (first form))))
                                                               (reify
                                                                 IUnresolvedBinding
                                                                 (-resolve [_ cells]
                                                                   (cursor (cells (first form)) (rest form)))))
                 :else (reify
                         IUnresolvedBinding
                         (-resolve [_ cells]
                           (let [callback (callbacks/compile cells callbacks form)]
                             (assert (some? callback) (str "Cannot bind to " form))
                             (when callback (reaction (callback)))))))]
    (assert (some? result) (str "Cannot bind to " form))
    result))

(def default-tag-parsers {"bind" read-bind-tag
                          "="    read-bind-tag})