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
  (reset! ui-root (compile/compile-ui cells str helpers callbacks)))

(load-ui "{:text \"Click me too!\"}"
         "[:div [:button {:on-click ui/handle-click} #bind :text] [:ui/special-div]]"
         (compile/helper-map 'decl-ui.helpers :ui)
         (compile/callback-map 'decl-ui.helpers :ui))

(get (compile/callback-map 'decl-ui.helpers :ui) 'ui/handle-click)
