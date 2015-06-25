# decl-ui

A Clojure library designed to ... well, that part is up to you.

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

- Extract core parts to demos/hello_world. Do not use main.
- Fix the ev first argument to callbacks.
- Fix error reporting.
- Remove callbacks/compile dependency on cells.
- Error for undefined global.
- Error for undefined local.
- Demo.

- Publish a short article.

- Warn about undefined helpers (with namespace only).
- Separate callbacks and functions? Pass values to functions? Or fix first argument to callbacks.
- get nomenclature right

Maybe
- parametrized cell expressions :first-user (queries/first-user #< :sort-by #< :desc) -> reaction.
- allow binding to :ui so it can be mutated through helpers (handle-click #!= [...selector...])
  [see](https://github.com/davidsantiago/hickory#selectors)