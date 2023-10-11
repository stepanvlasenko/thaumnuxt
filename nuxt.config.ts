import path from 'path'

export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
    ],

    alias: {
        '@types': path.join(__dirname, 'assets', 'ts', 'types.ts'),
    }
})
