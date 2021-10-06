import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from '@my-app/app';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://b011133cb51645389fb69d306f1dd1f9@o371187.ingest.sentry.io/5994191',
  integrations: [new Integrations.BrowserTracing()],
  environment: `browser-ext-${__DEV__ ? 'dev' : 'prod'}`,
  tracesSampleRate: 0.2,
});

function FallbackComponent() {
  return <div>An error has occurred</div>;
}

const myFallback = <FallbackComponent />;

const WrappedApp = Sentry.withProfiler(App);

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={myFallback} showDialog>
      <WrappedApp />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
