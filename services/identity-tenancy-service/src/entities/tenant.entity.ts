import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MembershipEntity } from './membership.entity';

@Entity({ name: 'tenants' })
export class TenantEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  slug!: string;

  @Column()
  displayName!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @Column({ default: true })
  isActive!: boolean;

  @OneToMany(() => MembershipEntity, (membership) => membership.tenant)
  memberships?: MembershipEntity[];
}
