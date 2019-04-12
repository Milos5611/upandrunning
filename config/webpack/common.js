// shared config (dev and prod)
const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"]
    },
    context: resolve(__dirname, "../../src"),
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    failOnError: false,
                    emitWarning: true
                }
            },
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            configFile: resolve(__dirname, "../babel.config.js")
                        }
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader"},
                        {
                            loader: "postcss-loader",
                            options: {
                                config: {
                                    path: resolve(__dirname, "../postcss.config.js")
                                }
                            }
                        },
                        "resolve-url-loader",
                        {loader: "sass-loader", options: {sourceMap: true}}
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images/",
                            name: "[name][hash].[ext]",
                        }
                    }
                ]
            },
            {
                test: /\.(svg)$/,
                exclude: /fonts/, /* dont want svg fonts from fonts folder to be included */
                oneOf: [
                    {
                        use: "svg-react-loader"
                    }
                ]
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /images/, /* dont want svg images from image folder to be included */
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts/",
                            name: "[name][hash].[ext]",
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: "html-loader",
                    options: {
                        attrs: [":data-src"]
                    }
                }
            }
        ]
    },
    plugins: [
        // Extract sass then postcss to css
        new ExtractTextPlugin({
            filename: "app.[hash].css",
            allChunks: true
        }),
        new HtmlWebpackPlugin(
            {
                template: "www/index.ejs",
                filename: "index.html",
                inject: true,
                minify: {
                    removeComments: true,
                    collapseWhitespace: false
                }
            }),
        new webpack.DefinePlugin({
            "window.com.upandrunning": {
                BASE_URL: JSON.stringify("/"),
                API_URL: JSON.stringify("http://tim.uardev.com/trial-project/api")
            }
        })
    ],
    performance: {
        hints: false
    }
};
