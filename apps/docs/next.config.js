module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui"],
  },
};
