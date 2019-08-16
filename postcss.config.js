const postcssNested = require('postcss-nested');
const postcssHexRgba = require('postcss-hexrgba');
const postcssSimpleVars = require('postcss-simple-vars');
const autoprefixer = require('autoprefixer');

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    autoprefixer(),
    postcssNested(),
    postcssHexRgba(),
    postcssSimpleVars(),
  ],
};
