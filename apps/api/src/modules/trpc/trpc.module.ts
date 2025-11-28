import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import type { RequestHandler } from 'express';
import { appRouter } from '@kitchen-cpq/shared-trpc';
import { createContext } from '../../infra/http/trpc-context';

@Module({})
export class TrpcModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const handler = createExpressMiddleware({
      router: appRouter,
      createContext
    }) as RequestHandler;

    // Nest middleware does not trim the prefix like Express' `app.use('/trpc', ...)` does.
    // Strip the leading /trpc so tRPC receives the bare procedure path (e.g., ui.getDashboardKpis).
    const stripPrefix: RequestHandler = (req, res, next) => {
      if (req.url?.startsWith('/trpc')) {
        req.url = req.url.replace(/^\/trpc/, '') || '/';
      }
      return handler(req, res, next);
    };

    consumer.apply(stripPrefix).forRoutes(
      { path: '/trpc', method: RequestMethod.ALL },
      { path: '/trpc/(.*)', method: RequestMethod.ALL }
    );
  }
}
