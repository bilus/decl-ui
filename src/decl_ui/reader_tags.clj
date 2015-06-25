(ns decl-ui.reader-tags)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defmacro with-reader-tags [tag-parsers args & body]
  "Sets up reader tags for a scope body forms are evaluated in.

   Arguments:

   - tag-parsers - a map of tags to their parsers
   - args - vector of extra arguments to pass to parsers
   - body - forms to evaluate."
  `(let [tag-parsers# ~tag-parsers]
     (try
       (doseq [[tag# parser#] tag-parsers#]
         (cljs.reader/register-tag-parser! tag# (partial parser# ~@args)))
       ~@body
       (finally
         (doseq [[tag# _] tag-parsers#]
           (cljs.reader/deregister-tag-parser! tag#))))))

