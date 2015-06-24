(ns decl-ui.test-helpers
  (:require [dommy.core :include-macros true :as dommy :refer-macros [sel1] :refer [attr text]]))

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
