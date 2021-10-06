require('dotenv').config({ path: `../../envs/.env.${process.env.NODE_ENV}` });

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['react-native-web', { commonjs: true }],
    'transform-inline-environment-variables',
    [
      'transform-define',
      {
        __DEV__: process.env.NODE_ENV,
        __SUBPLATFORM__: 'next',
      },
    ],
  ],
};
