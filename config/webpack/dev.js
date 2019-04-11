const merge = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");

const port = process.env.PORT || 3000;

module.exports = merge(commonConfig, {
    mode: "development",
    entry: [
        "babel-polyfill",
        "react-hot-loader/patch",
        `webpack-dev-server/client?http://localhost:${port}`,
        "webpack/hot/only-dev-server",
        "./index.js",
    ],
    devServer: {
        hot: true,
        port,
        historyApiFallback: true,
        overlay: true,
        open: true,
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
});
