/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  env: {
    BASE_PATH: '',
    HTML_PREFIX: '', // Need to add '.html' prefix for static export if no javascript
  },
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
};

module.exports = nextConfig
