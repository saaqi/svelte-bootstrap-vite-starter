const IN_PRODUCTION = process.env.NODE_ENV === 'production';
const bootstrap = 'node_modules/bootstrap';

module.exports = {
  plugins: [
    IN_PRODUCTION &&
      require('@fullhuman/postcss-purgecss')({
        content: [
          'index.html',
          './src/**/*.js',
          './src/**/*.svelte',
          // --- Import only the required components.
          // `${bootstrap}/js/dist/alert.js`,
          // `${bootstrap}/js/dist/base-component.js`,
          // `${bootstrap}/js/dist/button.js`,
          // `${bootstrap}/js/dist/carousel.js`,
          // `${bootstrap}/js/dist/collapse.js`,
          // `${bootstrap}/js/dist/dropdown.js`,
          `${bootstrap}/js/dist/modal.js`
          // `${bootstrap}/js/dist/offcanvas.js`,
          // `${bootstrap}/js/dist/popover.js`,
          // `${bootstrap}/js/dist/scrollspy.js`,
          // `${bootstrap}/js/dist/tab.js`,
          // `${bootstrap}/js/dist/toast.js`,
          // `${bootstrap}/js/dist/tooltip.js`,
        ],
        whitelistPatterns: [/svelte-/, /fa-icon/],
        defaultExtractor(content) {
          // Remove <style> blocks from the content to prevent PurgeCSS from skipping inline styles
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
          // Extract classes and identifiers from the content without style blocks
          const matches = contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
          return matches;
        },
        safelist: [/svelte-/, /modal-backdrop/],
        keyframes: true, // remove unsed keyframe rules
        variables: true // remove unused variables as well
      }),

    IN_PRODUCTION && require('autoprefixer'),

    IN_PRODUCTION &&
      require('cssnano')({
        preset: ['default', { discardComments: { removeAll: true } }]
      })
  ]
};
