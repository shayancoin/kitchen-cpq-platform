declare module '@kitchen-cpq/configurator-sdk' {
  import type { ParametricDelta, PriceSnapshot } from '@kitchen-cpq/shared-types';

  export type SDKCallbacks = {
    onDeltaApplied?: (delta: ParametricDelta) => void;
    onError?: (error: Error | unknown) => void;
    onLoadComplete?: () => void;
    onPriceChange?: (price: PriceSnapshot) => void;
  };

  export interface ConfiguratorSession {
    destroy: () => void;
  }
  export function init(
    container: HTMLElement,
    tenantId: string,
    locale: string,
    authToken: string,
    callbacks: SDKCallbacks
  ): ConfiguratorSession;
}
