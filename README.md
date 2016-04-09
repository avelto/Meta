# Meta

## Dependencies

express

## Dev

    nodemon --watch webpack.config.dev.js devServer.js

## Prod

    NODE_ENV=production webpack --config webpack.config.prod.js
    node prodServer.js