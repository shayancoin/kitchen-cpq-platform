"use client";

import { useEffect, useRef } from 'react';
import { Shell } from '@kitchen-cpq/ui-kit';
import {
  init as initConfigurator,
  type ConfiguratorSession,
  type SDKCallbacks
} from '@kitchen-cpq/configurator-sdk';

type QuoteDetailPageProps = {
  params: { id: string };
};

function ConfiguratorWrapper({
  quoteId,
  tenantId,
  locale,
  authToken,
  callbacks
}: {
  quoteId: string;
  tenantId: string;
  locale: string;
  authToken: string;
  callbacks?: SDKCallbacks;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sessionRef = useRef<ConfiguratorSession | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const init = async () => {
      const instance = initConfigurator(
        containerRef.current as HTMLElement,
        tenantId,
        locale,
        authToken,
        callbacks ?? {}
      );
      sessionRef.current = instance;
    };

    init().catch((error) => {
      callbacks?.onError?.(error);
    });

    return () => {
      sessionRef.current?.destroy?.();
    };
    // session is managed inside this effect; omit from deps to avoid re-init loops.
  }, [quoteId, tenantId, locale, authToken, callbacks]);

  return <div ref={containerRef} className="min-h-[400px] rounded-lg border p-4" />;
}

export default function QuoteDetailPage({ params }: QuoteDetailPageProps) {
  const quoteId = params.id;

  return (
    <Shell>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-sm uppercase text-slate-500">Quote</p>
            <h1 className="text-2xl font-semibold leading-tight">Quote #{quoteId}</h1>
          </div>
          <span className="text-sm text-slate-500">CPQ Configurator</span>
        </div>

        <ConfiguratorWrapper
          quoteId={quoteId}
          tenantId="demo-tenant"
          locale="en-US"
          authToken=""
          callbacks={{
            onLoadComplete: () => {
              /* Hook up tRPC-driven data fetch here */
            },
            onError: (error) => {
              console.error('Configurator error', error);
            }
          }}
        />
      </div>
    </Shell>
  );
}
