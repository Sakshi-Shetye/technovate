/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        net: false,
        tls: false,
        fs: false,
      };
    }
    return config;
  },
  // Add the images configuration
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;