import { sveltekit } from '@sveltejs/kit/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svg from '@poppanator/sveltekit-svg'

/** @type {import('vite').UserConfig} */

const config = {
  plugins: [sveltekit(), tsconfigPaths(), svg()]
};

export default config;
