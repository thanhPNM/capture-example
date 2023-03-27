import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
      scss: true,
      postcss: true
    })
  ]
};

export default config;
