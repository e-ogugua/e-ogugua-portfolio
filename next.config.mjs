/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  experimental: {
    mdxRs: true,
  },
  webpack: (config) => {
    // Handle file imports
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
        '@mdx-js/loader',
      ],
    });

    return config;
  },
};

export default nextConfig;
