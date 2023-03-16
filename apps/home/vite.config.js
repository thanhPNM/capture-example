import { sveltekit } from '@sveltejs/kit/vite';
// import autoprefixer from 'autoprefixer';

/** @type {import('vite').UserConfig} */
// const config = {
//   plugins: [sveltekit({
//     css: {
//       postcss: {
//         plugins: [
//           autoprefixer()
//         ]
//       }
//     }
//   })]
// };

const config = {
  plugins: [sveltekit()]
};

export default config;
