/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const isProduction = process.env.NODE_ENV === "production";

const config = {
  reactStrictMode: true,
};

// * 캐시를 하려면 다음의 코드 추가
// const runtimeCaching = require("next-pwa/cache.js");

const nextConfig = withPWA({
  dest: "public",
  disable: !isProduction,
  runtimeCaching: [],
  // runtimeCaching,
})(config);

module.exports = nextConfig;
