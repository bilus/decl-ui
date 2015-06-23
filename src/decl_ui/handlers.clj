(ns decl-ui.handlers
  (:require [cljs.analyzer.api :as ana-api]))

(defmacro handler-map [[_quote ns] prefix]
  `(into {}
         (list ~@(->>
                   (ana-api/ns-interns ns)
                   (remove (comp :macro second))
                   (map (fn [[k# _]]
                          `[~(keyword (name prefix) (name k#)) ~(symbol (name ns) (name k#))]))))))