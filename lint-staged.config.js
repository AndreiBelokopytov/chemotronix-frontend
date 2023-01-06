module.exports = {
  "*.{ts,tsx,js,jsx}": "eslint --max-warnings=0",
  "*.{ts,tsx}": [() => ["tsc"]],
  "**/*": "prettier --write --ignore-unknown",
};
