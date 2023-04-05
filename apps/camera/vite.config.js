import { defineConfig, loadEnv } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svg from '@poppanator/sveltekit-svg'

/** @type {import('vite').UserConfig} */

export default defineConfig(({ mode }) => {
    console.log('🚀 ~ file: vite.config.js:20 ~ defineConfig ~ mode:', mode)
    const env = loadEnv(mode, process.cwd(), '')
    console.log('🚀 ~ file: vite.config.js:10 ~ defineConfig ~ env:', env)
    return {
        plugins: [sveltekit(), tsconfigPaths(), svg()],
        server: {
            port: env.PORT,
        },
        preview: {
            port: env.PORT,
        },
    }
})
