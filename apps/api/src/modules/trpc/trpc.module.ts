import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod
} from '@nestjs/common';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import type { Request, Response, NextFunction } from 'express';
import {
  CpqGatewayModule,
  CpqGrpcClient,
  cpqRouter,
  createCpqContext
} from '../cpq-gateway/cpq-gateway.module';

@Module({
  imports: [CpqGatewayModule]
})
export class TrpcModule implements NestModule {
  constructor(private readonly cpqClient: CpqGrpcClient) {}

  configure(consumer: MiddlewareConsumer) {
    const handler = createExpressMiddleware({
      router: cpqRouter,
      createContext: ({ req }) => createCpqContext(this.cpqClient, req as Request)
    });

    consumer
      .apply((req: Request, res: Response, next: NextFunction) => handler(req, res, next))
      .forRoutes({ path: '/trpc', method: RequestMethod.ALL });
  }
}
