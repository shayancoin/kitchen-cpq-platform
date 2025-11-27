import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { loadConfig } from '@kitchen-cpq/shared-config';
import { TenantEntity } from './entities/tenant.entity';
import { UserEntity } from './entities/user.entity';
import { MembershipEntity } from './entities/membership.entity';
import { TenantsService } from './tenants/tenants.service';
import { TenantsController } from './tenants/tenants.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const config = loadConfig();
        return {
          type: 'postgres',
          host: config.database.host,
          port: config.database.port,
          username: config.database.user,
          password: config.database.password,
          database: config.database.database,
          autoLoadEntities: true,
          synchronize: true
        };
      }
    }),
    TypeOrmModule.forFeature([TenantEntity, UserEntity, MembershipEntity])
  ],
  providers: [TenantsService, AuthService],
  controllers: [TenantsController, AuthController]
})
export class IdentityTenancyModule {}
