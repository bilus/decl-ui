(ns decl-ui.handlers
  (:require [clojure.walk :as walk]))

(defn resolve-helper
  [handler-map el]
  (let [tag (first el)
        handler (handler-map tag)]
    (or (when handler (handler el)) el)))

(defn resolve-helpers
  [handler-map markup]
  (prn "handler-map" handler-map)
  (walk/postwalk
    (fn [el]
      (cond
        (and (vector? el) (keyword? (first el))) (resolve-helper handler-map el)
        :else el))
    markup))