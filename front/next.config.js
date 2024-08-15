const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    const { isServer } = options;
    // WAV 파일 처리를 위한 설정
    config.module.rules.push({
      test: /\.(wav)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: `/_next/static/sounds/`,
          outputPath: `${isServer ? '../' : ''}static/sounds/`,
        },
      },
    });
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    if (fileLoaderRule) {
      config.module.rules.push({
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      });

      config.module.rules.push({
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      });

      fileLoaderRule.exclude = /\.svg$/i;
    }

    // 나머지 설정
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
      },
      {
        protocol: 'https',
        hostname: 'd2qtp7qksp5k9g.cloudfront.net',
        port: '',
      },
    ],
  },
};

module.exports = withVanillaExtract(nextConfig);
