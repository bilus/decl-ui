# decl-ui

Declarative user inferface based on Reagent.

## Running app

rlwrap lein figwheel app

## Start REPL

Start "Figwheel REPL" in Cursive and then

```clojure
(use 'figwheel-sidecar.repl-api)
(cljs-repl)
```

## Running tests

lein doo phantom test

## License

Copyright © 2015 Marcin Bilski

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.

## TBD

- Remove app code from core.
- Demo.
- Rename callbacks to actions.
- Extract common functionality in callbacks/compile and functions/compile into a macro.
- Fix error reporting.
- Error for undefined global.
- Error for undefined local.

- Publish a short article.

- Parse HTML? # https://github.com/weavejester/hiccup/wiki/Converting-html-to-hiccup
  - Static html.
  - Mustache {{user.name}} => #= [:user :name]
  - on-click="ui/click-handler"
  - on-click="(ui/click-handler {{user.name}})"
  - on-click="ui.click-handler('a message')" -> via eval.

- Warn about undefined helpers (with namespace only).
- Separate callbacks and functions? Pass values to functions? Or fix first argument to callbacks.
- get nomenclature right

Maybe
- parametrized cell expressions :first-user (queries/first-user #< :sort-by #< :desc) -> reaction.
- allow binding to :ui so it can be mutated through helpers (handle-click #!= [...selector...])
  [see](https://github.com/davidsantiago/hickory#selectors)