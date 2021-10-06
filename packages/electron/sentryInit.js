require('dotenv').config({ path: `../../envs/.env.${process.env.NODE_ENV}` });

const { init } =
  process.type === 'browser' ? require('@sentry/electron/dist/main') : require('@sentry/electron/dist/renderer');

init({
  dsn: process.env.SENTRY_DSN,
});
