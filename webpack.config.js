const webpack = require('webpack');

module.exports = {
  entry: {
    main: './web/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/preset-env'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    }
  }
};
