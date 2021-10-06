import { AppRegistry } from 'react-native';
import { App } from '@my-app/app';
import { name as appName } from './app.json';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://b011133cb51645389fb69d306f1dd1f9@o371187.ingest.sentry.io/5994191',
  // eslint-disable-next-line no-undef
  environment: `windows-${__DEV__ ? 'dev' : 'prod'}`,
  autoSessionTracking: true,
  enableNative: false,
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
    }),
  ],
});

AppRegistry.registerComponent(appName, () => App);
