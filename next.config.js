/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = 'eval-source-map'; // 또는 다른 설정으로 변경
    }
    return config;
  },
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
