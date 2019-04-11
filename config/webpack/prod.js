// production config
const merge = require("webpack-merge");
const {resolve} = require("path");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
    mode: "production",
    entry: ["babel-polyfill", "./index.js"],
    output: {
        filename: "[name].[contenthash].min.js",
        path: resolve(__dirname, "../../dist"),
        publicPath: "/",
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    ecma: 8,
                    compress: {
                        inline: 1,
                        drop_console: true,
                    },
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    devtool: "source-map"
});
