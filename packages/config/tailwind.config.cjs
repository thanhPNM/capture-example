const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', '../../packages/ui/components/**/*.{svelte, ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};

module.exports = config;
