import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const serviceName = 'api';
const serviceVersion = process.env.SERVICE_VERSION || '0.0.0';
const deploymentEnvironment = process.env.DEPLOYMENT_ENVIRONMENT || 'local';

const buildHeaders = (): Record<string, string> | undefined => {
  if (!process.env.OTEL_EXPORTER_OTLP_HEADERS) {
    return undefined;
  }

  return Object.fromEntries(
    process.env.OTEL_EXPORTER_OTLP_HEADERS.split(',')
      .map((pair) => pair.trim())
      .filter(Boolean)
      .map((pair) => {
        const [key, ...rest] = pair.split('=');
        return [key.trim(), rest.join('=').trim()];
      }),
  );
};

if (process.env.OTEL_LOG_LEVEL) {
  const logLevelKey = process.env.OTEL_LOG_LEVEL.toUpperCase();
  const level = (DiagLogLevel as Record<string, DiagLogLevel>)[logLevelKey] ?? DiagLogLevel.INFO;
  diag.setLogger(new DiagConsoleLogger(), level);
}

const sdk = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: serviceName,
    [SemanticResourceAttributes.SERVICE_VERSION]: serviceVersion,
    [SemanticResourceAttributes.DEPLOYMENT_ENVIRONMENT]: deploymentEnvironment,
  }),
  traceExporter: new OTLPTraceExporter({
    url: process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT,
    headers: buildHeaders(),
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: process.env.OTEL_EXPORTER_OTLP_METRICS_ENDPOINT,
      headers: buildHeaders(),
    }),
    exportIntervalMillis: Number(process.env.OTEL_METRIC_EXPORT_INTERVAL ?? 60000),
  }),
  instrumentations: getNodeAutoInstrumentations({
    '@opentelemetry/instrumentation-http': {
      enabled: true,
    },
  }),
});

sdk.start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start OpenTelemetry SDK', err);
});

const shutdown = async () => {
  try {
    await sdk.shutdown();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error shutting down OpenTelemetry SDK', err);
  }
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
