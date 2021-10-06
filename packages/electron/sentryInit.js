const { init } =
  process.type === 'browser' ? require('@sentry/electron/dist/main') : require('@sentry/electron/dist/renderer');

init({
  dsn: 'https://b011133cb51645389fb69d306f1dd1f9@o371187.ingest.sentry.io/5994191',
});
