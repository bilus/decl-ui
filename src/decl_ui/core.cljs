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
  (let [globals {:title (atom "This is title")}]
    (reset! ui-root (fn []
                     (let [cells (compile/instantiate-cells globals cells)]
                       (fn []
                         (compile/compile-ui cells str helpers callbacks)))))))

(compile/instantiate-cells {:title (atom "This is title")}
                           "{:text \"Click me\" :pressed 0 :x #bind :title}")

(load-ui "{:text \"Click me\" :pressed 0 :x #bind :title}"
         "[:div [:button {:on-click ui/handle-click} #bind :text]
            [:div \"Change text\"]
            [:ui/input #= :text]
            [:ui/special-div]
            [:ui/count-click #= :pressed]
            [:div #bind :pressed]
            \"Global title:\"
            [:div #bind :x]]"
         (compile/helper-map 'decl-ui.helpers :ui)
         (compile/callback-map 'decl-ui.helpers :ui))

(get (compile/callback-map 'decl-ui.helpers :ui) 'ui/handle-click)


