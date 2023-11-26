/* eslint-disable import/no-extraneous-dependencies */
/* const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
}); */

/* module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  output: 'export',
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '', */
// The starter code load resources from `public` folder with `router.basePath` in React components.
// So, the source code is "basePath-ready".
// You can remove `basePath` if you don't need it.
/* reactStrictMode: true,
}); */
const nextConfig = {
  output: 'export',
  eslint: {
    dirs: ['.'],
  },
  basePath: '',
  reactStrictMode: true,

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
