(ns decl-ui.core
  (:require [reagent.core :refer [render-component atom]]
            [decl-ui.compile :include-macros true :as compile]
            [decl-ui.helpers]
            [cljs.reader :as reader]))

(declare compile-ui)

(def ui-root (atom [:div "Empty"]))

(enable-console-print!)

(defn hello-view
  []
  @ui-root)

(defn load-ui [globals cell-def ui-def helpers callbacks]
  (reset! ui-root (compile-ui globals
                              cell-def
                              ui-def
                              helpers
                              callbacks)))

(defn main []
  (render-component
    [hello-view]
    (. js/document (getElementById "app")))

  (compile/instantiate-cells {:title (atom "This is title")}
                             "{:text \"Click me\" :pressed 0 :x #bind :title}")
  (load-ui {:title (atom "This is title") :results (atom ["result1" "result2"])} "{:text \"Click me\"
           :pressed 0
           :x #bind :title}"
           "[:div [:button#click {:on-click ui/handle-click} #bind :text]
              [:div \"Change text\"]
              [:ui/input #= :text]
              [:ui/special-div]
              [:ui/count-click #= :pressed]
              [:div #bind :pressed]
              \"Global title:\"
              [:div #bind :x]]"
           (compile/helper-map 'decl-ui.helpers :ui)
           (compile/callback-map 'decl-ui.helpers :ui))

  (get (compile/callback-map 'decl-ui.helpers :ui) 'ui/handle-click))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile-ui
  [globals cell-def ui-def helpers callbacks]
  (fn []
    (let [cells (compile/instantiate-cells globals cell-def)]
      (fn []
        (compile/compile-ui cells ui-def helpers callbacks)))))
