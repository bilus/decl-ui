(ns decl-ui.reader-tags
  (:require [decl-ui.functions :as functions]
            [decl-ui.bindings :refer [IUnresolvedBinding]]
            [reagent.ratom :refer [cursor]])
  (:require-macros [reagent.ratom :refer [reaction]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn read-bind-tag
  "Bind tag literal reader. Creates a binding that can be resolved later after cells are defined."
  [functions form]
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
                           (let [make-fun (functions/compile functions form)]
                             (assert (some? make-fun) (str "Cannot bind to " form))
                             (let [fun (make-fun cells)]
                               (assert (some? fun) (str "Internal error binding to " form))
                               (reaction (fun)))))))]
    (assert (some? result) (str "Cannot bind to " form))
    result))

(def default-tag-parsers
  "Tag literal readers used in actual compilation of ui and cell definitions."
  {"bind" read-bind-tag
   "="    read-bind-tag})