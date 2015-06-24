(ns decl-ui.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [decl-ui.core-test]
            [decl-ui.cells-test]))

(doo-tests 'decl-ui.core-test 'decl-ui.cells-test)