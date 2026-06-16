const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


const bundledPath = path.resolve(__dirname, 'dist');
const staticPath = path.resolve(__dirname, 'client/public');
const plugin = new HtmlWebpackPlugin({
  template: path.join(staticPath, 'index.html')
});


const mode = 'development';

const entry = './client/src/index.jsx';

const plugins = [plugin];

const resolve = {
  extensions: ['.js', '.jsx']
};

const output = {
  path: bundledPath,
  filename: 'bundled.js'
};

const webpackModule = {
  rules: [{
    test: /\.jsx$/,
    exclude: [/node_modules/, /server/],
    use: 'babel-loader'
  }]
};

const devServer = {
  port: 3006,
  static: {
    directory: staticPath
  }
}

module.exports = { mode, entry, plugins, resolve, output, module: webpackModule, devServer };