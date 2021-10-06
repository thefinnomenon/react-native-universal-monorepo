const webpack = require('webpack');
const { getWebpackTools } = require('react-native-monorepo-tools');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

const monorepoWebpackTools = getWebpackTools();

module.exports = {
  webpack: {
    configure: webpackConfig => {
      // Allow importing from external workspaces.
      monorepoWebpackTools.enableWorkspacesResolution(webpackConfig);
      // Ensure nohoisted libraries are resolved from this workspace.
      monorepoWebpackTools.addNohoistAliases(webpackConfig);
      return webpackConfig;
    },
    devtool: 'source-map',
    plugins: [
      // Inject the "__DEV__" global variable.
      new webpack.DefinePlugin({
        __DEV__: process.env.NODE_ENV !== 'production',
      }),
      // Inject the "__SUBPLATFORM__" global variable.
      // It can be used to determine whether we're running within Electron or not.
      new webpack.DefinePlugin({
        __SUBPLATFORM__: JSON.stringify('electron'),
      }),
      // main process
      new webpack.DefinePlugin({
        'process.type': '"browser"',
      }),
      // renderer process
      new webpack.DefinePlugin({
        'process.type': '"renderer"',
      }),
      // Generate and upload sourcemaps
      new SentryWebpackPlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: 'the-finnternet',
        project: 'urns',
        release: process.env.SENTRY_RELEASE,
        include: '.',
        ignore: ['node_modules', 'craco.config.js'],
      }),
    ],
  },
};
