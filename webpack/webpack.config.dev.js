const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const dev = merge(common, {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/'),
    compress: true,
    port: 3000,
  },
});

module.exports = dev;
