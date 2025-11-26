import * as client from 'prom-client';
import { Request, Response } from 'express';

const registry = new client.Registry();
registry.setDefaultLabels({ service: 'api' });
client.collectDefaultMetrics({ register: registry });

export const metricsMiddleware = async (_req: Request, res: Response) => {
  res.setHeader('Content-Type', registry.contentType);
  res.end(await registry.metrics());
};
