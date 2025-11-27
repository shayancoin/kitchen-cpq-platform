import { ConfigSchema, type Config } from '@kitchen-cpq/shared-validation';

export const loadConfig = (): Config => {
  const raw = {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    auth: {
      jwtSecret: process.env.JWT_SECRET,
      jwtIssuer: process.env.JWT_ISSUER,
      jwtAudience: process.env.JWT_AUDIENCE
    }
  };

  return ConfigSchema.parse(raw);
};
