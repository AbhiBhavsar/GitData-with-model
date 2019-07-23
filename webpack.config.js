const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack');
// const PreloadWebpackPlugin = require('preload-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();
module.exports = {
    entry: ["./src/index.js",
            "./src/styles/main.scss"],

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.[name].[hash:8].js",
        publicPath: "/"
    },

    // context: require.path(__dirname, "/src")

    module: {
        rules: [
            { // 1. For JS and JSX Files
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },

            { // 2. For CSS and SaSS Files
                test: /\.css$|.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },

            { // 3. For Image Files
                test: /\.png$|.jpg$|.jpeg$|.gif$|.ico$/,
                use: {
                    loader: "file-loader?name=images/[name].[ext]"
                }
            },

            { // 4. For Audio and PDF Files
                test: /\.mp3$|.pdf$/,
                use: {
                    loader: "url-loader?limit=15000&name=media/[hash].[ext]"
                }
            },

            { // 5. For Video Files
                test: /\.mp4$/,
                use: {
                    loader: "url-loader?limit=15000&name=videos/[name].[ext]"
                }
            },

            { // For Font Type Files
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: "url-loader?limit=15000&name=fonts/[hash].[ext]"
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),

        new CopyWebpackPlugin([
            // { from: './index.css', to: './index.css' },
            // { from: './slick.css', to: './slick.css' },
            // { from: './slick.theme.css', to: './slick.theme.css' }
        ]),
        // new BundleAnalyzerPlugin()
        // new webpack.DefinePlugin({ 'process.env.API_URL': JSON.stringify(`${env.API_URL}`) }),
        // new webpack.DefinePlugin({ 'process.env.AUTH': JSON.stringify(`${env.AUTH}`) }),
        // preloadWebpackPlugin,
        // bundleAnalyzerPlugin

    ]
};
