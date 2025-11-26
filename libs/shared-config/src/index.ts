import { ConfigSchema, type Config } from '@kitchen-cpq/shared-validation';

export const loadConfig = (): Config => {
  const raw = {
    nodeEnv: process.env.NODE_ENV ?? 'development'
  };

  return ConfigSchema.parse(raw);
};
