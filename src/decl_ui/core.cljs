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

(cljs.reader/register-tag-parser! "bind" identity)

(defn read-bind
  [cells arg]
  @(cells arg))


(defn compile-ui
  [cell-def ui-def helpers callbacks]
  (compile/bind-cells
    (reader/read-string cell-def)
    (->> ui-def
         reader/read-string
         (compile/compile-edn helpers callbacks))))

(defn load-ui [cells str helpers callbacks]
  (reset! ui-root (compile-ui cells str helpers callbacks)))

(load-ui "{:text \"Hello, world\"}"
         "[:div [:button {:on-click ui/handle-click} #bind :text] [:ui/special-div]]"
         (compile/helper-map 'decl-ui.helpers :ui)
         (compile/callback-map 'decl-ui.helpers :ui))

(compile-ui "{:text \"Hello, world\"}"
            "[:div [:button {:on-click ui/handle-click} #bind :text] [:ui/special-div]]"
            (compile/helper-map 'decl-ui.helpers :ui)
            (compile/callback-map 'decl-ui.helpers :ui))

(get (compile/callback-map 'decl-ui.helpers :ui) 'ui/handle-click)

