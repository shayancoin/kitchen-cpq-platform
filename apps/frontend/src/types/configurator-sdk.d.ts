declare module '@kitchen-cpq/configurator-sdk' {
  export type SDKCallbacks = {
    onError?: (error: unknown) => void;
    onLoadComplete?: () => void;
  } & Record<string, unknown>;

  export type ConfiguratorSession = { destroy?: () => void } & Record<string, unknown>;
  export function init(
    container: HTMLElement,
    tenantId: string,
    locale: string,
    authToken: string,
    callbacks?: SDKCallbacks
  ): ConfiguratorSession;
}
