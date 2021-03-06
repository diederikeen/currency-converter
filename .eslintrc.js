module.exports = { 
  "extends": ["airbnb-base", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react"],
};
