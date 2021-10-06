import { AppRegistry } from 'react-native';
import { App } from '@my-app/app';
import { name as appName } from './app.json';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: `android-tv-${process.env.NODE_ENV}`,
  integrations: [new Sentry.ReactNativeTracing()],
  autoSessionTracking: process.env.SENTRY_SESSION_TRACKING,
  tracesSampleRate: parseFloat(process.env.TRACES_SAMPLE_RATE || '1.0'),
  debug: process.env.SENTRY_DEBUG === 'true',
});

console.log(process.env.SENTRY_DSN);

const WrappedApp = Sentry.wrap(App);

AppRegistry.registerComponent(appName, () => WrappedApp);
