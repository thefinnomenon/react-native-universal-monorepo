import { subplatform } from '../config';

let Sentry;

switch (subplatform) {
  case 'electron':
    Sentry = require('@sentry/electron');
    break;
  default:
    Sentry = require('@sentry/react');
}

export default Sentry;
