const defaultConfig = require('config/tailwind.config.cjs');

module.exports = {
  ...defaultConfig,
  plugins: [require('daisyui')]
};
