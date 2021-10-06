/** @type {import('next').NextConfig} */
const path = require('path');

const { withSentryConfig } = require('@sentry/nextjs');

const SentryWebpackPluginOptions = {};

// Necessary to handle statically imported images
const withImages = require('next-images');
// Necessary to handle statically imported fonts
const withFonts = require('next-fonts');

module.exports = withSentryConfig(
  withImages(
    withFonts({
      // Allows us to access other directories in the monorepo
      experimental: {
        externalDir: true,
      },
      // This feature conflicts with next-images
      images: {
        disableStaticImages: true,
      },
      webpack: (config, options) => {
        config.resolve.alias = {
          ...(config.resolve.alias || {}),
          // Transform all direct `react-native` imports to `react-native-web`
          'react-native$': 'react-native-web',
        };
        config.resolve.extensions = ['.web.js', '.web.ts', '.web.tsx', ...config.resolve.extensions];

        if (options.isServer) {
          config.externals = ['react', 'react-native-web', ...config.externals];
        }
        config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
        config.resolve.alias['react-native-web'] = path.resolve(__dirname, '.', 'node_modules', 'react-native-web');

        return config;
      },
    }),
  ),
  SentryWebpackPluginOptions,
);
