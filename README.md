Trying to reproduce [webpack-contrib/extract-text-webpack-plugin#722](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/722)

- npm install
- npm run build (should succeed)
- uncomment line 6 in index.js
- npm run build (should fail)
