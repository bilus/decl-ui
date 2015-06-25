(ns decl-ui.callbacks
  (:require [decl-ui.bindings :as bindings]))

(defn compile
  [cells callbacks form]
  (cond
    (symbol? form) (or (callbacks form) form)
    (seq? form) (let [[f & args] form
                      callback (callbacks f)]
                  (assert (symbol? f) (str "undefined " f " in " form))
                  (assert callback (str "undefined " f " in " form))
                  (fn [ev] (apply callback ev (map (partial bindings/resolve cells) args))))
    :else form))

