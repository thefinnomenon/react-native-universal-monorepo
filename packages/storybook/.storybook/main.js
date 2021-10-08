const { getWebpackTools } = require('react-native-monorepo-tools');
const monorepoWebpackTools = getWebpackTools();

module.exports = {
  "stories": [
    "../../app/src/**/*.stories.mdx",
    "../../app/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    // Ensure nohoisted libraries are resolved from this workspace.
    monorepoWebpackTools.addNohoistAliases(config);

    // Configure react-native-web aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
    };

    return config;
  },
}