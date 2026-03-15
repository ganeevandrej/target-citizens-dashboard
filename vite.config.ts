import path from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const manualChunks = (id: string) => {
    if (!id.includes('node_modules')) {
        return undefined
    }

    if (
        id.includes('react-hook-form') ||
        id.includes('zod') ||
        id.includes('@hookform/resolvers')
    ) {
        return 'forms'
    }

    return undefined
}

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@app': path.resolve(__dirname, './src/app'),
            '@components': path.resolve(__dirname, './src/components'),
            '@features': path.resolve(__dirname, './src/features'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@shared': path.resolve(__dirname, './src/shared'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks,
            },
        },
    },
})
