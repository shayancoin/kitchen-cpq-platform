import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TenantEntity } from './tenant.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'memberships' })
export class MembershipEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => UserEntity, (user) => user.memberships, { eager: true })
  user!: UserEntity;

  @ManyToOne(() => TenantEntity, (tenant) => tenant.memberships, { eager: true })
  tenant!: TenantEntity;

  @Column({ type: 'varchar' })
  role!: string;
}
