(ns decl-ui.compile
  (:require [cljs.analyzer.api :as ana-api]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(defmacro bind-cells [callbacks cells & body]
  `(let [cells# ~cells
         callbacks# ~callbacks]
     (let [tag-parsers# {"bind"  decl-ui.compile/read-bind-tag
                         "="     decl-ui.compile/read-bind-tag}]
       (try
         (doseq [[tag# parser#] tag-parsers#]
           (cljs.reader/register-tag-parser! tag# (partial parser# cells# callbacks#)))
         ~@body
         (finally
           (doseq [[tag# _] tag-parsers#]
             (cljs.reader/deregister-tag-parser! tag#)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

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
