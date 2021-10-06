import { logger, consoleTransport } from 'react-native-logs';

const developmentConfig = {
  severity: 'debug',
  transport: consoleTransport,
  transportOptions: {
    color: 'ansi',
  },
};

const productionConfig = {};

let config = developmentConfig;
if (process.env.NODE_ENV === 'production') {
  /* @ts-ignore */
  config = productionConfig;
}

const LOGGER = logger.createLogger(config);

export const getLogger = (namespace: string) => {
  if (!namespace) {
    return LOGGER;
  }

  LOGGER.enable(namespace);
  return LOGGER.extend(namespace);
};
