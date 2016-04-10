# Meta

## Dependencies

express

json-path
async-function-queue

redux-devtools redux-devtools-dock-monitor redux-devtools-log-monitor

## Dev

    nodemon --watch webpack.config.dev.js devServer.js

## Prod

    NODE_ENV=production webpack --config webpack.config.prod.js
    node prodServer.js