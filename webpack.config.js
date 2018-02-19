var HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

var uglifyJsPlugInConfig = new UglifyJsPlugin({
  uglifyOptions: {
    ie8: false,
    ecma: 6,
    output: {
      comments: false,
      beautify: false,
    },
    compress: true,
    warnings: false
  }
})

module.exports = {
  devtool: 'eval',
  entry:[
    'babel-polyfill',
    'react-hot-loader/patch',
    __dirname + '/src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader:'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  output:{
    filename:'assets/script/bundle.js',
    path:__dirname+'/build'
  },
  plugins: [HTMLWebpackPluginConfig, uglifyJsPlugInConfig]
};