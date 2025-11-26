import type { CurrencyCode } from './primitives';

export type ConstraintSeverityToken = 'ok' | 'warning' | 'error';

export interface ConstraintBadgePayload {
  severity: ConstraintSeverityToken;
  count: number;
  primaryMessage: string;
}

export interface CpqSummaryBarState {
  total: number;
  tax: number;
  marginPercent: number;
  currency: CurrencyCode;
  hasBlockingErrors: boolean;
}

