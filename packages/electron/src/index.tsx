import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '@my-app/app';

import * as Sentry from '@sentry/electron';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: `electron-${process.env.NODE_ENV}`,
  tracesSampleRate: parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE || '1.0'),
  debug: process.env.SENTRY_DEBUG === 'true',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
