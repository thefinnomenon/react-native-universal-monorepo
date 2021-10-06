import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '@my-app/app';

import * as Sentry from '@sentry/electron';

Sentry.init({
  dsn: 'https://b011133cb51645389fb69d306f1dd1f9@o371187.ingest.sentry.io/5994191',
  environment: `electron-${__DEV__ ? 'dev' : 'prod'}`,
  debug: true,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
