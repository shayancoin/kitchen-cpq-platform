import { Module } from '@nestjs/common';
import {
  InMemoryQuoteRepository,
  QuoteDomainService,
  QuotePricingEngine
} from '@kitchen-cpq/domain-cpq';
import { CpqController } from './cpq.controller';
import { CpqService } from './cpq.service';

@Module({
  controllers: [CpqController],
  providers: [
    {
      provide: 'QuoteRepository',
      useClass: InMemoryQuoteRepository
    },
    QuotePricingEngine,
    {
      provide: QuoteDomainService,
      inject: ['QuoteRepository', QuotePricingEngine],
      useFactory: (repo: InMemoryQuoteRepository, engine: QuotePricingEngine) =>
        new QuoteDomainService(repo, engine)
    },
    CpqService
  ]
})
export class CpqPricingModule {}
