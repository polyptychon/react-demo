const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './_src/jsx/main.js',
  output: {
    path: 'builds/production/assets/js/',
    filename: "main.js",
    publicPath: '/assets/js/'
  },
  devServer: {
    inline: true,
    contentBase: './builds/development/',
    port: 3333
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   })
  // ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "_src"),
        ],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        // query: {
        //   presets: ['es2015', 'stage-2', 'react']
        // }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  }
};
