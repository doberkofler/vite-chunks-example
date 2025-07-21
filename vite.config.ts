import path from 'node:path';
import {defineConfig} from 'vite';

export default defineConfig({
	mode: 'production',
	publicDir: false,
	appType: 'mpa',
	build: {
		rollupOptions: {
			input: {
				global: 'src/global/global.ts',
				page_a: 'src/pages/page_a/index.ts',
				page_b: 'src/pages/page_b/index.ts',
			},
			output: {
				entryFileNames: '[name].js',
				assetFileNames: '[name][extname]',
				chunkFileNames: '[name]-[hash].js',
				manualChunks: (id, {getModuleInfo}) => {
					const moduleInfo = getModuleInfo(id);
					console.log(`manualChunks "${path.relative('.', id)}": isEntry=${moduleInfo?.isEntry}`);
					return undefined;
				},
			},
		},
		cssCodeSplit: true,
		outDir: 'dist',
		emptyOutDir: true,
		target: 'es2022',
		cssMinify: false,
		minify: false,
		reportCompressedSize: false,
	},
	resolve: {
		alias: {
			'@alias_root': path.resolve('./'),
		},
	},
});
