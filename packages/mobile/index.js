import { AppRegistry } from 'react-native';
import { App } from '@my-app/app';
import { name as appName } from './app.json';
import { Platform } from 'react-native';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: `${Platform.OS}-${process.env.NODE_ENV}`,
  integrations: [new Sentry.ReactNativeTracing()],
  autoSessionTracking: process.env.SENTRY_SESSION_TRACKING,
  tracesSampleRate: process.env.TRACES_SAMPLE_RATE,
  debug: process.env.SENTRY_DEBUG === 'true',
});

const WrappedApp = Sentry.wrap(Sentry.withTouchEventBoundary(App, {}));

AppRegistry.registerComponent(appName, () => WrappedApp);
