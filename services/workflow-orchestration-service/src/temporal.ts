/**
 * Minimal Temporal stubs so workers compile and run in dev without the real runtime.
 * Swap these for @temporalio/* packages when hooking to a Temporal cluster.
 */
const isProd = process.env.NODE_ENV === 'production';
const allowStub = process.env.TEMPORAL_USE_STUB === 'true';
const stubGuardMessage =
  'Temporal stub module loaded: set TEMPORAL_USE_STUB=true for local dev only and wire real @temporalio/* packages in production.';

if (isProd || !allowStub) {
  if (isProd) {
    // eslint-disable-next-line no-console
    console.error(stubGuardMessage);
    process.exit(1);
  }

  throw new Error(stubGuardMessage);
}

const logger = console;
export class ApplicationFailure extends Error {
  constructor(message: string, public readonly type?: string) {
    super(message);
    this.name = 'ApplicationFailure';
  }

  static nonRetryable(message: string, type?: string) {
    return new ApplicationFailure(message, type);
  }
}

export class Context {
  static current() {
    return {
      info: {
        workflowExecution: {
          workflowId: 'workflow-stub'
        }
      }
    };
  }
}

export class NativeConnection {
  static async connect(_opts?: unknown): Promise<NativeConnection> {
    return new NativeConnection();
  }
}

export class Worker {
  constructor(private readonly options: Record<string, unknown> = {}) {}

  static async create(options: Record<string, unknown>): Promise<Worker> {
    return new Worker(options);
  }

  async run(): Promise<void> {
    // eslint-disable-next-line no-console
    console.warn('[TemporalStub] Worker invoked - not connected to real cluster', {
      taskQueue: this.options['taskQueue'],
      namespace: this.options['namespace']
    });
  }
}

/**
 * Create a stub activities proxy whose properties are async no-op functions.
 *
 * @param _options - Ignored; accepted for API compatibility with real activity proxy factories.
 * @returns A proxy object where accessing any property yields an async function that resolves to `undefined`.
 */
export function proxyActivities<T extends Record<string, unknown>>(
  _options: Record<string, unknown>
): T {
  return new Proxy(
    {},
    {
      get:
        () =>
        async () => {
          // no-op stub
          return undefined;
        }
    }
  ) as T;
}

export class Client {
  workflow = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    start: async <TArgs extends unknown[], TResult>(
      workflow: (...args: TArgs) => Promise<TResult>,
      options: { args: TArgs; workflowId?: string; taskQueue?: string }
    ): Promise<TResult> => {
      // Stubbed Temporal client: directly invoke the workflow function.
      // Replace with @temporalio/client when a real cluster is available.
      // eslint-disable-next-line no-console
      console.log('[TemporalStub] workflow.start', {
        workflowId: options.workflowId,
        taskQueue: options.taskQueue
      });
      return workflow(...options.args);
    }
  };
}