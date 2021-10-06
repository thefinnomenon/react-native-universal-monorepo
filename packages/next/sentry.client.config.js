// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: `next-${process.env.NODE_ENV}`,
  tracesSampleRate: process.env.TRACES_SAMPLE_RATE,
  debug: process.env.SENTRY_DEBUG,
});
