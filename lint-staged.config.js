module.exports = {
  "*.{ts,tsx,js,jsx}": (filenames) => {
    return [
      `eslint --max-warnings=0 ${filenames
        .filter((name) => !/.eslintrc/.test(name))
        .join(" ")}`,
    ];
  },
  "*.{ts,tsx}": [() => ["tsc"]],
  "**/*": "prettier --write --ignore-unknown",
};
