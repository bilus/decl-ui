(ns decl-ui.compile
  (:require [cljs.analyzer.api :as ana-api]))

(defmacro helper-map [[_quote ns] prefix]
  `(into {}
         (list ~@(->>
                   (ana-api/ns-interns ns)
                   (remove (comp :macro second))
                   (filter (comp (comp :helper :meta) second))
                   (map (fn [[k# _]]
                          `[~(keyword (name prefix) (name k#)) ~(symbol (name ns) (name k#))]))))))

(defmacro callback-map [[_quote ns] prefix]
  `(into {}
         (list ~@(->>
                   (ana-api/ns-interns ns)
                   (remove (comp :macro second))
                   (filter (comp (comp :callback :meta) second))
                   (map (fn [[k# _]]
                          `['~(symbol (name prefix) (name k#)) ~(symbol (name ns) (name k#))]))))))

