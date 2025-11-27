import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Role, Session, TenantId, UserId } from '@kitchen-cpq/shared-types';
import { loadConfig } from '@kitchen-cpq/shared-config';
import { sign } from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { TenantsService } from '../tenants/tenants.service';

export interface LoginDto {
  email: string;
  tenantSlug: string;
  displayName?: string;
  roles?: Role[];
}

@Injectable()
export class AuthService {
  private readonly config = loadConfig();

  constructor(
    @InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>,
    private readonly tenantsService: TenantsService
  ) {}

  async login(dto: LoginDto): Promise<Session> {
    const tenant =
      (await this.tenantsService.getTenantBySlug(dto.tenantSlug)) ??
      (await this.tenantsService.createTenant({
        slug: dto.tenantSlug,
        displayName: dto.displayName ?? dto.tenantSlug
      }));

    let user = await this.usersRepo.findOne({ where: { email: dto.email } });
    if (!user) {
      user = this.usersRepo.create({
        email: dto.email,
        displayName: dto.displayName ?? dto.email,
        tenantId: tenant.id,
        roles: dto.roles ?? ['dealer']
      });
      await this.usersRepo.save(user);
    }

    const issuedAt = new Date();
    const expiresAt = new Date(issuedAt.getTime() + 60 * 60 * 1000);

    const token = sign(
      {
        sub: user.id,
        tenantId: tenant.id,
        roles: user.roles as Role[]
      },
      this.config.auth.jwtSecret,
      {
        issuer: this.config.auth.jwtIssuer,
        audience: this.config.auth.jwtAudience,
        expiresIn: '1h'
      }
    );

    return {
      id: `sess-${user.id}` as Session['id'],
      userId: user.id as UserId,
      tenantId: tenant.id as TenantId,
      issuedAt: issuedAt.toISOString(),
      expiresAt: expiresAt.toISOString(),
      jwt: token
    };
  }
}
