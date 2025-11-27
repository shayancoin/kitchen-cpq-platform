import { z } from 'zod';

export const NodeEnvSchema = z.enum(['development', 'production', 'test', 'staging']);

export const ConfigSchema = z.object({
  nodeEnv: NodeEnvSchema.default('development'),
  database: z.object({
    host: z.string().default('localhost'),
    port: z.coerce.number().default(5432),
    user: z.string().default('postgres'),
    password: z.string().default('postgres'),
    database: z.string().default('kitchen_cpq')
  }),
  auth: z.object({
    jwtSecret: z.string().default('dev-secret'),
    jwtIssuer: z.string().default('kitchen-cpq-platform'),
    jwtAudience: z.string().default('kitchen-cpq-clients')
  })
});

export type Config = z.infer<typeof ConfigSchema>;
