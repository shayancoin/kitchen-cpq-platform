import { z } from 'zod';

export const NodeEnvSchema = z.enum(['development', 'production', 'test', 'staging']);

export const ConfigSchema = z.object({
  nodeEnv: NodeEnvSchema.default('development')
});

export type Config = z.infer<typeof ConfigSchema>;
