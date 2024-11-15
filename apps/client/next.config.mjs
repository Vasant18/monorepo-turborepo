// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   transpilePackages: ["ui"]
// };
// const withTM = require('next-transpile-modules')(['@repo/ui']);

// module.exports = withTM({
//   // Your existing Next.js configuration
// });

// export default nextConfig;

// next.config.mjs

import withTM from 'next-transpile-modules';

/** @type {import('next').NextConfig} */
const nextConfig = withTM(['@repo/ui'])({
  reactStrictMode: true,
  // Other Next.js configurations
});

export default nextConfig;