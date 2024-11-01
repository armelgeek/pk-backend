import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('identityverification')
export class IdentityVerificationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column("simple-array")
  verifications: string[];

  @Column({ default: false })
  validate: boolean;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  pageId: string;

  @Column({nullable: true, unique: false})
  badge: string;

  @Column({nullable: true, unique: false})
  partenariatId: string;

  @Column({nullable: true, unique: false})
  partnerId: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  status: string;

  @Column({nullable: true, unique: false})
  commentaire: string;

  @Column({ type: 'timestamptz', default: new Date() })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  updatedAt: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  lastActivityAt: Date;

  @BeforeInsert()
  beforeInsert() {
    this.lastActivityAt = new Date();
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.lastActivityAt = new Date();
    this.updatedAt = new Date();
  }
}

