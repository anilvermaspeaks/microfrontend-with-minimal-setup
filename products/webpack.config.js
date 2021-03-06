const HtmlWebpackPlugin = require('html-webpack-plugin');

const fedration = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 4001,
  },
  plugins: [
    new fedration({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductIndex': './src/main'
      }
      //shared module between app
      //shared:['']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
