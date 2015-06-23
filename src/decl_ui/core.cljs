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

(defn compile-ui
  [str helpers callbacks]
  (->> str
       reader/read-string
       (compile/compile-edn helpers callbacks)))

(defn load-ui [str helpers callbacks]
  (reset! ui-root (compile-ui str helpers callbacks)))

(load-ui "[:div [:button {:on-click ui/handle-click} \"Click me\"] [:ui/special-div]]"
         (compile/helper-map 'decl-ui.helpers :ui)
         (compile/callback-map 'decl-ui.helpers :ui))

(prn (compile-ui "[:div [:button {:on-click ui/handle-click} \"Click me\"] [:ui/special-div]]"
          (compile/helper-map 'decl-ui.helpers :ui)
          (compile/callback-map 'decl-ui.helpers :ui)))

(prn (type (second
        (reader/read-string "[:div ttttt]"))))

(prn (get (compile/callback-map 'decl-ui.helpers :ui) 'ui/handle-click))