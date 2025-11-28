import type { QuoteSummary } from '@kitchen-cpq/shared-types';
import { QuoteTable } from '../src/components/cpq/QuoteTable';

const sampleQuotes: QuoteSummary[] = [
  {
    id: 'quote-1' as any,
    projectId: 'proj-1' as any,
    tenantId: 'tenant-1' as any,
    status: 'draft',
    currency: 'USD',
    subtotal: 12000,
    tax: 840,
    total: 12840,
    marginPercent: 22,
    createdAt: new Date().toISOString() as any,
    updatedAt: new Date().toISOString() as any,
    catalogVersion: { id: 'catalog-1' as any, hash: 'hash' },
    lineItems: []
  }
];

// Simple Ladle/Storybook-compatible export without relying on tooling in this repo.
export const QuoteTableStory = () => <QuoteTable quotes={sampleQuotes} />;
