# Build Docs

Install dependencies:

- sass
- webpack
- webpack-dev-server _(optional)_

```console
npm i -g sass webpack webpack-cli webpack-dev-server
```

Move to root (..) and run this command for generate `references.json` file

```console
node generate-references.js
```

Build sass file with

```console
sass ./docs/src/scss:docs/public // --watch --style compressed
```

Build js boundle with

```console
npx webpack --config ./docs/webpack.config.docs.js -p
```

or run server with

```console
npx webpack-dev-server --config ./docs/webpack.config.docs.js -p
```
