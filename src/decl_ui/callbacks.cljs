(ns decl-ui.callbacks
  (:require [decl-ui.bindings :as bindings]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile
  "Compiles a form that may invoke callbacks resolving bindings using cells.
   If the form doesn't invoke callbacks, it returns nil.

   Arguments:

   - cells - a cell map
   - callbacks - callback map
   - form - a form to compile."
  [callbacks form]
  (cond
    (symbol? form) (fn [_cells] (or (callbacks form) form))
    (seq? form) (fn [cells] (let [[f & args] form
                                  callback (callbacks f)]
                              (assert (symbol? f) (str "undefined " f " in " form))
                              (assert callback (str "undefined " f " in " form))
                              (fn [event-object]
                                (apply callback event-object (map (partial bindings/resolve cells) args)))))))

