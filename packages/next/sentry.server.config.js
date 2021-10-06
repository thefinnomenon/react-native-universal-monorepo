// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: `next-${process.env.NODE_ENV}`,
  tracesSampleRate: process.env.TRACES_SAMPLE_RATE,
  debug: process.env.SENTRY_DEBUG,
});
