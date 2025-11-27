import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MembershipEntity } from './membership.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  displayName!: string;

  @Column({ default: '' })
  tenantId!: string;

  @Column({ type: 'simple-array', default: '' })
  roles!: string[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  lastLoginAt?: Date | null;

  @OneToMany(() => MembershipEntity, (membership) => membership.user)
  memberships?: MembershipEntity[];
}
