module.exports = (api) => {
  api.cache(false);

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      [
        '@babel/plugin-proposal-decorators', { legacy: true },
        '@babel/plugin-proposal-class-properties',
      ],
    ],
  };
};

// {
//   "plugins": [
//     [
//       "@babel/plugin-proposal-decorators", { "legacy": true },
//       "@babel/plugin-proposal-class-properties"
//     ]
//   ],
//   "presets": ["@babel/preset-env", "@babel/preset-react"],
// }