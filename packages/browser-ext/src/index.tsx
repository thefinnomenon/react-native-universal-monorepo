import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '@my-app/app';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  environment: `browser-ext-${process.env.NODE_ENV}`,
  tracesSampleRate: parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE || '1.0'),
  debug: process.env.SENTRY_DEBUG === 'true',
});

const WrappedApp = Sentry.withProfiler(App);

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary>
      <WrappedApp />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
