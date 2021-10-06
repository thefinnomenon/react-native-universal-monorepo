// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://b011133cb51645389fb69d306f1dd1f9@o371187.ingest.sentry.io/5994191',
  // eslint-disable-next-line no-undef
  environment: `next-${__DEV__ ? 'dev' : 'prod'}`,
  tracesSampleRate: 0.2,
});
