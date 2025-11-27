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
): ConfiguratorSession {
  if (!(container instanceof HTMLElement)) {
    throw new Error('Invalid container: expected HTMLElement');
  }
  if (!tenantId) {
    throw new Error('tenantId is required');
  }
  if (!locale) {
    throw new Error('locale is required');
  }
  if (authToken == null) {
    throw new Error('authToken is required');
  }

  // Minimal stub: mount placeholder UI and wire callbacks safely.
  const placeholder = document.createElement('div');
  placeholder.setAttribute('data-tenant', String(tenantId ?? ''));
  placeholder.setAttribute('data-locale', String(locale ?? ''));
  placeholder.textContent = 'Configurator SDK loading...';
  container.innerHTML = '';
  container.appendChild(placeholder);

  // Notify load completion for host apps.
  callbacks?.onLoadComplete?.();

  return {
    destroy: () => {
      container.innerHTML = '';
    }
  };
}
