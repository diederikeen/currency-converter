const path = require('path');

const common = {
  entry: {
    app: './resources/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist/assets/js'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};

module.exports = common;
