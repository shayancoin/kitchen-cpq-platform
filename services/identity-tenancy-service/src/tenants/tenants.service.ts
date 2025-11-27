import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import type { Tenant } from '@kitchen-cpq/shared-types';
import { Repository } from 'typeorm';
import { TenantEntity } from '../entities/tenant.entity';
import { MembershipEntity } from '../entities/membership.entity';
import { UserEntity } from '../entities/user.entity';

export interface CreateTenantDto {
  slug: string;
  displayName: string;
  userId?: string;
  role?: string;
}

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(TenantEntity) private readonly tenantsRepo: Repository<TenantEntity>,
    @InjectRepository(MembershipEntity)
    private readonly membershipsRepo: Repository<MembershipEntity>,
    @InjectRepository(UserEntity) private readonly usersRepo: Repository<UserEntity>
  ) {}

  async listTenants(): Promise<Tenant[]> {
    const rows = await this.tenantsRepo.find();
    return rows.map((tenant) => this.toTenantModel(tenant));
  }

  async getTenantBySlug(slug: string): Promise<Tenant | null> {
    const row = await this.tenantsRepo.findOne({ where: { slug } });
    return row ? this.toTenantModel(row) : null;
  }

  async createTenant(dto: CreateTenantDto): Promise<Tenant> {
    const existing = await this.tenantsRepo.findOne({ where: { slug: dto.slug } });
    if (existing) {
      return this.toTenantModel(existing);
    }
    const entity = this.tenantsRepo.create({
      slug: dto.slug,
      displayName: dto.displayName,
      isActive: true
    });
    const saved = await this.tenantsRepo.save(entity);

    if (dto.userId) {
      const user = await this.usersRepo.findOne({ where: { id: dto.userId } });
      if (user) {
        const membership = this.membershipsRepo.create({
          user,
          tenant: saved,
          role: dto.role ?? 'dealer'
        });
        await this.membershipsRepo.save(membership);
      }
    }

    return this.toTenantModel(saved);
  }

  private toTenantModel(entity: TenantEntity): Tenant {
    return {
      id: entity.id as Tenant['id'],
      slug: entity.slug,
      displayName: entity.displayName,
      createdAt: entity.createdAt?.toISOString?.() ?? new Date().toISOString(),
      isActive: entity.isActive
    };
  }
}
