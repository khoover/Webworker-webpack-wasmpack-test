const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = [
{
  mode: "development",
  entry: {
    index: "./js/index.js",
    index2: "./js/index2.js"
  },
  output: {
    path: dist,
    filename: "[name].js"
  },
  devServer: {
    contentBase: dist,
  },
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, "static")
    ]),
  ]
},
{
  mode: "development",
  entry: {
    worker: "./js/worker.js"
  },
  target: 'webworker',
  output: {
    path: dist,
    filename: "[name].js",
    publicPath: "http://localhost:8080/"
  },
  devServer: {
    contentBase: dist,
  },
  plugins: [
    new CopyPlugin([
      path.resolve(__dirname, "static")
    ]),

    /*new WasmPackPlugin({
      crateDirectory: __dirname,
    }),*/
  ]
}];
