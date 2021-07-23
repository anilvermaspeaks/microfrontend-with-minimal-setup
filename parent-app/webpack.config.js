const HtmlWebpackPlugin = require('html-webpack-plugin');
const fedration = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
  mode: 'development',
  devServer: {
    port: 4000,
  },
  plugins: [
    new fedration({
      name: 'parent-app',
      remotes: {
        products: 'products@http://localhost:4001/remoteEntry.js',
        cart: 'cart@http://localhost:4002/remoteEntry.js',
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
