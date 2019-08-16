const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const prod = merge(common, {
  mode: 'production',
});

module.exports = prod;
