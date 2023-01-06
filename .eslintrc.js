module.exports = {
  extends: ["eslint:recommended", "plugin:storybook/recommended"],
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  env: {
    node: true,
  },
};
