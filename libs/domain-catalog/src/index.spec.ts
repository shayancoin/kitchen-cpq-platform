import { describe, expect, it } from 'vitest';

import { computeCatalogHash, parseCatalogPayload } from './index';

describe('computeCatalogHash', () => {
  it('produces a stable hash for equivalent payloads with different key order', () => {
    const payloadA = parseCatalogPayload({
      metadata: { name: 'Kitchen', version: 1 },
      skus: [
        {
          id: 'sku-1',
          price: 100,
          attributes: { material: 'oak', color: 'walnut' }
        }
      ],
      families: [{ id: 'fam-1', code: 'kitchen' }]
    });

    const payloadB = parseCatalogPayload({
      skus: [
        {
          attributes: { color: 'walnut', material: 'oak' },
          price: 100,
          id: 'sku-1'
        }
      ],
      metadata: { version: 1, name: 'Kitchen' },
      families: [{ code: 'kitchen', id: 'fam-1' }]
    });

    expect(computeCatalogHash(payloadA)).toBe(computeCatalogHash(payloadB));
  });
});
