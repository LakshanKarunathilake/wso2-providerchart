const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const APP_NAME = "ProviderChart";

module.exports = {
  entry: "./src/components/CustomWidget/CustomWidget.jsx",
  output: {
    path: `${__dirname}/dist/${APP_NAME}`,
    publicPath: "/",
    filename: `${APP_NAME}.js`
  },
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

      /* This part can be uncommented if you need to do styling in modular lecel*/

      // {
      //   test: /\.css$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       // options: {
      //       //   modules: true,
      //       //   localIdentName: "[local]__[name]__[hash:base64:5]"
      //       // }
      //     }
      //   ]
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/resources/widgetConf.json"
      }
    ])
  ]
};
