const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    '../../packages/ui/src/components/**/*.{svelte, ts}',
    '../../packages/ui/src/components/*.{svelte, ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};

module.exports = config;
