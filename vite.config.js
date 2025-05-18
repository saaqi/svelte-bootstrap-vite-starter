import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import webfontDownload from 'vite-plugin-webfont-dl';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
const IN_PRODUCTION = process.env.NODE_ENV === 'production';
// const IN_DEVELOPMENT = process.env.NODE_ENV === "development";

export default defineConfig({
	plugins: [
		sveltekit(),

		/* ## Download Google Fonts and attach them with production build for offline use
    --------------------------------------------- */
		// IN_PRODUCTION && webfontDownload([
		// 	'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
		// ]),

		/* ## Minify the output HTML files in production
    --------------------------------------------- */
		IN_PRODUCTION && ViteMinifyPlugin({})
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern'
			}
		}
	},

	base: './',
	server: {
		port: 3000
	},

	build: {
		// outDir: "./docs",
		minify: 'terser',
		terserOptions: {
			format: {
				comments: false
			}
		}
	}
});
