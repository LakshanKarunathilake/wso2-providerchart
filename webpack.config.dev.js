const webpack = require("webpack");
const APP_NAME = "ProviderChart";

module.exports = {
  entry: "./index.js",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.(png|jpg|svg|cur|gif|eot|svg|ttf|woff|woff2)$/,
        use: ["url-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: `${__dirname}/dist/${APP_NAME}`,
    publicPath: "/",
    filename: `${APP_NAME}.js`
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./public",
    hot: true
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
};
