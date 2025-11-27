import { z } from 'zod';
import type { ParametricState } from '@kitchen-cpq/shared-types';

export const mutableCabinetKeySchema = z.enum([
  'position',
  'elevation',
  'width',
  'depth',
  'height',
  'rotationDeg',
  'sku',
  'kind'
]);

export type MutableCabinetKey = z.infer<typeof mutableCabinetKeySchema>;

const numericField = (min: number, max: number) => z.number().finite().min(min).max(max);

export const cabinetFieldUpdateSchema = z.discriminatedUnion('key', [
  z.object({
    key: z.literal('position'),
    value: numericField(0, 20_000)
  }),
  z.object({
    key: z.literal('elevation'),
    value: numericField(0, 3_000)
  }),
  z.object({
    key: z.literal('width'),
    value: numericField(100, 3_000)
  }),
  z.object({
    key: z.literal('depth'),
    value: numericField(100, 1_200)
  }),
  z.object({
    key: z.literal('height'),
    value: numericField(100, 3_000)
  }),
  z.object({
    key: z.literal('rotationDeg'),
    value: numericField(-360, 360)
  }),
  z.object({
    key: z.literal('sku'),
    value: z.string().trim().min(1).max(128)
  }),
  z.object({
    key: z.literal('kind'),
    value: z.string().trim().min(1).max(64)
  })
]);

export const parseCabinetField = (
  key: MutableCabinetKey,
  value: unknown
): ParametricState['cabinets'][number][MutableCabinetKey] => {
  const parsed = cabinetFieldUpdateSchema.parse({ key, value });
  return parsed.value as ParametricState['cabinets'][number][MutableCabinetKey];
};
