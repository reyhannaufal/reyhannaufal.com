/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig({
   i18n: {
      locales: ['id'],
      defaultLocale: 'id',
   },
   reactStrictMode: true,
   swcMinify: true,
   images: {
      formats: ['image/avif', 'image/webp'],
      domains: ['reyhannaufal.com', 'images.unsplash.com'],
   },
});
