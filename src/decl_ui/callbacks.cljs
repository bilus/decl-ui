(ns decl-ui.callbacks
  (:require [decl-ui.bindings :as bindings]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile
  "Compiles a form that may invoke callbacks resolving bindings using cells.
   If the form doesn't invoke callbacks, it returns it as is.

   Arguments:

   - cells - a cell map
   - callbacks - callback map
   - form - a form to compile."
  [cells callbacks form]
  (cond
    (symbol? form) (or (callbacks form) form)
    (seq? form) (let [[f & args] form
                      callback (callbacks f)]
                  (assert (symbol? f) (str "undefined " f " in " form))
                  (assert callback (str "undefined " f " in " form))
                  (fn [ev] (apply callback ev (map (partial bindings/resolve cells) args))))
    :else form))

