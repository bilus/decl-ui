(ns decl-ui.core-test
  (:require [decl-ui.core :refer [compile-ui]]
            [dommy.core :include-macros true :as dommy :refer-macros [sel1] :refer [attr text]]
            [reagent.core :as reagent]
            [cljs.test :refer-macros [deftest is testing run-tests]]))

(defn new-id
  ([]
   (str "container-" (gensym)))
  ([id]
   (str "container-" id)))

(defn new-node [id]
  (-> (dommy/create-element "div")
      (dommy/set-attr! "id" id)))

(defn append-node [node]
  (dommy/append! (sel1 js/document :body) node))

(defn container!
  ([]
   (container! (new-id)))
  ([id]
   (-> id
       new-node
       append-node)
    (sel1 (str "#" id))))

(deftest test-binding
  (testing "One way binding"
    (reagent/render-component [:div {:id "some-test"}]
                              (container! "test"))

    (is (sel1 "#some-test"))))
