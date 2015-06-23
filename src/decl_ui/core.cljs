(ns decl-ui.core
  (:require [reagent.core :refer [render-component atom]]
            [decl-ui.compile :include-macros true :as compile]
            [decl-ui.helpers]
            [cljs.reader :as reader]))

(def ui-root (atom [:div "Empty"]))

(enable-console-print!)

(defn hello-view
  []
  @ui-root)

(render-component
  [hello-view]
  (. js/document (getElementById "app")))

(defn load-ui [cells str helpers callbacks]
  (reset! ui-root (fn []
                    (let [cells (compile/instantiate-cells (reader/read-string cells))]
                      (fn []
                       (compile/compile-ui cells str helpers callbacks))))))

(load-ui "{:text \"Click me\" :pressed 0}"
         "[:div [:button {:on-click ui/handle-click} #bind :text]
            [:div \"Change text\"]
            [:ui/input #bind :text]
            [:ui/special-div]
            [:ui/count-click #bind :pressed]
            [:div #bind :pressed]]"
         (compile/helper-map 'decl-ui.helpers :ui)
         (compile/callback-map 'decl-ui.helpers :ui))

(get (compile/callback-map 'decl-ui.helpers :ui) 'ui/handle-click)
