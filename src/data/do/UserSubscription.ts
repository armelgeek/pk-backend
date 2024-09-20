import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('usersubscription')
export class UserSubscriptionDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ default: false })
  isAutoRenewed: boolean;

  @Column({nullable: false, unique: false})
  start: string;

  @Column({nullable: false, unique: false})
  end: string;

  @Column({nullable: false, unique: false})
  paymentStatus: string;

  @Column({nullable: false, unique: false})
  userId: string;

  @Column({nullable: false, unique: false})
  subscriptionOfferId: string;

  @Column({nullable: false, unique: false})
  pageId: string;

  @Column({nullable: true, unique: false})
  codeParrainId: string;

  @Column({nullable: true, unique: false})
  subscriptionStripeId: string;

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

