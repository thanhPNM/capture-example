import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
      scss: true,
      postcss: true
    })
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;
