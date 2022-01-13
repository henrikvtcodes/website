/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  devIndicators: {
    buildActivityPosition: "top-left",
  },
  swcMinify: true,
  experimental: {
    // urlImports: ["https://cdn.skypack.dev", "https://rsms.me/inter"],
  },
};
