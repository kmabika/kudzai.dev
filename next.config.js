module.exports = {
  images: {
    domains: ['media.graphassets.com'],
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/in',
        destination: 'https://l.linklyhq.com/l/aU9a',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://l.linklyhq.com/l/aU9O',
        permanent: true,
      },
    ];
  },
};
