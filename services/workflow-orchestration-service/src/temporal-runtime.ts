/**
 * Dev-only loader that explicitly opts into the Temporal stubs.
 * Production should wire real @temporalio/* packages instead.
 */
type TemporalStub = typeof import('./temporal');

const useStub = process.env.TEMPORAL_USE_STUB === 'true';
const isProd = process.env.NODE_ENV === 'production';

if (!useStub) {
  const message =
    'Temporal stub loader invoked without TEMPORAL_USE_STUB=true. Use real @temporalio/* runtime or set the env var for local dev.';

  if (isProd) {
    // eslint-disable-next-line no-console
    console.error(message);
    process.exit(1);
  }

  throw new Error(message);
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const temporal = require('./temporal') as TemporalStub;

export const ApplicationFailure = temporal.ApplicationFailure;
export const Context = temporal.Context;
export const NativeConnection = temporal.NativeConnection;
export const Worker = temporal.Worker;
export const proxyActivities = temporal.proxyActivities;
export const Client = temporal.Client;
