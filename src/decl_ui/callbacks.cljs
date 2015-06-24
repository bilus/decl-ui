(ns decl-ui.callbacks)

(defn compile
  [callbacks form]
  (cond
    (symbol? form) (or (callbacks form) form)
    (seq? form) (let [[f & args] form
                      callback (callbacks f)]
                  (assert (symbol? f) (str "undefined " f " in " form))
                  (assert callback (str "undefined " f " in " form))
                  (fn [ev] (apply callback ev args)))
    :else form))

