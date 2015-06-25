(ns decl-ui.compile
  (:require [cljs.analyzer.api :as ana-api]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defmacro helper-map [[_quote ns] prefix]
  "Takes a namespace and returns a map of keywords to tag helper functions.

   Arguments:

   - ns - the namespace
   - prefix - prefix to use on generated keywords.

   Example:

       (helper-map 'ui-helpers :ui) ;; => {:ui/contact-form ui-helpers/contact-form}"
  `(into {}
         (list ~@(->>
                   (ana-api/ns-interns ns)
                   (remove (comp :macro second))
                   (filter (comp (comp :helper :meta) second))
                   (map (fn [[k# _]]
                          `[~(keyword (name prefix) (name k#)) ~(symbol (name ns) (name k#))]))))))

(defmacro callback-map [[_quote ns] prefix]
  "Takes a namespace and returns a map of symbols to callback functions.

   Arguments:

   - ns - the namespace
   - prefix - prefix to use on generated symbols.

   Example:

       (helper-map 'ui-callbacks :ui) ;; => {'ui/save-user! ui-callbacks/save-user!}"
  `(into {}
         (list ~@(->>
                   (ana-api/ns-interns ns)
                   (remove (comp :macro second))
                   (filter (comp (comp :callback :meta) second))
                   (map (fn [[k# _]]
                          `['~(symbol (name prefix) (name k#)) ~(symbol (name ns) (name k#))]))))))
