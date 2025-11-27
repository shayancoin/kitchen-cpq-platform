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

    consumer.apply(handler).forRoutes({ path: '/trpc', method: RequestMethod.ALL });
  }
}
