import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    scss: true,
    postcss: true
  })
};
