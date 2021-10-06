require('dotenv').config({ path: `../../envs/.env.${process.env.NODE_ENV}` });

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['transform-inline-environment-variables'],
};
