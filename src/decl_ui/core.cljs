(ns decl-ui.core
  (:require [reagent.core :refer [render-component atom]]
            [decl-ui.compile :include-macros true :as compile]
            [decl-ui.helpers]
            [decl-ui.cells :as cells]
            [cljs.reader :as reader]))

(declare compile-ui compile->hiccup)

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

  (load-ui {:title (atom "This is title") :results (atom ["result1" "result2"])} "{:text \"Click me\"
           :pressed 0
           :query-result #= (ui/query)
           :x #bind :title}"
           "[:div [:button#click {:on-click ui/handle-click} #bind :text]
              [:div \"Change text\"]
              [:ui/input #= :text]
              [:ui/special-div]
              [:ui/count-click #= :pressed]
              [:div #bind :pressed]
              \"Global title:\"
              [:div #bind :x]
              \"Query result:\"
              [:div #= :query-result]]"
           (compile/helper-map 'decl-ui.helpers :ui)
           (compile/callback-map 'decl-ui.helpers :ui))
  (get (compile/callback-map 'decl-ui.helpers :ui) 'ui/handle-click))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile->hiccup
  [globals cell-def ui-def helpers callbacks]
  (let [cells (cells/compile globals cell-def callbacks)]
    (compile/compile-ui cells ui-def helpers callbacks)))

(defn compile-ui
  [globals cell-def ui-def helpers callbacks]
  (fn []
    (let [cells (cells/compile globals cell-def callbacks)]
      (fn []
        (compile/compile-ui cells ui-def helpers callbacks)))))

(comment
  (prn (compile->hiccup {} "{:user {:name \"John Smith\"}}"
                        "[:div#user-name #= [:user :name]]"
                        {} {}))



  (do
    (defprotocol IDependency
      (dependencies [_]))

    ;(defn resolve-callback
    ;  [callbacks form]
    ;  (when (seq? form)
    ;    (let [[_f & args] form]
    ;      (->> args
    ;           (filter #(satisfies? IDependency %))
    ;           (map dependencies)))))

    (defn gen-dependencies
      [& args]
      (prn "args" args)
      (->> args
           (filter #(satisfies? IDependency %))
           (map dependencies)))

    (defn resolve-callback
      [callbacks form]
      (cond
        (symbol? form) (or (callbacks form) form)
        (seq? form) (let [[f & args] form
                          callback (callbacks f)]
                      (assert (symbol? f) (str f " must be a symbol in " form))
                      (assert callback (str f " must be a registered symbol in " form))
                      (fn [ev] (apply callback ev args)))
        :else form))

    (defn read-bind-tag
      [callbacks form]
      (let [dependencies (cond
                           (keyword? form) [form]
                           (and (vector? form) (every? keyword? form)) [(first form)]
                           :else (when-let [callback (resolve-callback callbacks form)]
                                   (callback)))]
        ;(let [pad (fn [s w]
        ;            (apply str (take w (concat s (repeat " ")))))]
        ;  (println "Binding" (pad (pr-str form) 30) "\t=>\t" (pr-str dependencies)))
        (reify
          IDependency
          (dependencies [_]
            dependencies))))

    (cljs.reader/register-tag-parser! "=" (partial read-bind-tag
                                                   {'ui/query gen-dependencies
                                                    'ui/callback gen-dependencies}))
    (prn (->> (reader/read-string "{:text #= :global :upcased #= ui/callback
                               :foo #= [:bar :whatever]
                               :complicated #= (ui/query #= [:something] #= :other)}")

          (map (fn [[k v]] [k (flatten (dependencies v))]))
          (into {}))))
  )