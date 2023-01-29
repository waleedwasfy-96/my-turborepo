const path = require('path');

module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  experimental: {
    transpilePackages: ["ui"],
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};
