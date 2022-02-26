/** @type {import('next').NextConfig} */
module.exports = {
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
};
