import * as Sentry from '@sentry/react-native';
export default Sentry;

// Sentry.init({
//   dsn: 'https://b011133cb51645389fb69d306f1dd1f9@o371187.ingest.sentry.io/5994191',
//   environment: `${Platform.OS}-${subplatform ? `${subplatform}-` : ''}${__DEV__ ? 'development' : 'production'}`,
//   autoSessionTracking: true,
//   integrations: [
//     new Sentry.ReactNativeTracing({
//       tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
//     }),
//   ],
// });
