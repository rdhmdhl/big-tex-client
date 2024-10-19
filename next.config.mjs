/** @type {import('next').NextConfig} */
import stringHash from 'string-hash';

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { 
            typescript: true, 
            ext: "tsx",
            // enable ref forwarding for svgs
            ref: true,
            svgo: false,
          },
        },
      ],
    });
  
      return config;
    },
  };

export default nextConfig;
