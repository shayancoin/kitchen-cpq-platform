import { z } from 'zod';

export const CatalogPayloadSchema = z
  .object({
    metadata: z.record(z.unknown()).optional(),
    families: z.array(z.record(z.string(), z.unknown())).optional(),
    skus: z.array(z.record(z.string(), z.unknown())).optional(),
    options: z.array(z.record(z.string(), z.unknown())).optional()
  })
  .passthrough();

export type CatalogPayload = z.infer<typeof CatalogPayloadSchema>;
