(ns decl-ui.core
  (:require [decl-ui.compile :include-macros true :as compile]
            [decl-ui.cells :as cells]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile-ui
  [globals cell-def ui-def helpers functions callbacks]
  (let [cells (cells/compile globals cell-def functions)]
    (fn [] (compile/compile-ui cells ui-def helpers callbacks))))

(defn compile->hiccup
  [globals cell-def ui-def helpers functions callbacks]
  (let [cells (cells/compile globals cell-def functions)]
    (compile/compile-ui cells ui-def helpers callbacks)))

(defn load-ui [ui-root globals cell-def ui-def helpers functions callbacks]
  (reset! ui-root (compile-ui globals cell-def ui-def helpers functions callbacks)))