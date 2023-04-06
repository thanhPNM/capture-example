import { defineConfig, loadEnv } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svg from '@poppanator/sveltekit-svg'

/** @type {import('vite').UserConfig} */

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
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
