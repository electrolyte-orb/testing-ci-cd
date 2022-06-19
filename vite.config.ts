import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [react()],
	resolve: {
		alias: {
			'@components': '/src/components/index.ts',
		},
	},
});
