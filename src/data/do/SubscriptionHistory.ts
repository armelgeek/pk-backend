import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('subscriptionhistory')
export class SubscriptionHistoryDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: false, unique: false})
  start: string;

  @Column({nullable: false, unique: false})
  end: string;

  @Column({nullable: false, unique: false})
  userId: string;

  @Column({nullable: false, unique: false})
  pageId: string;

  @Column({nullable: true, unique: false})
  codeParrainId: string;

  @Column({nullable: true, unique: false})
  subscriptionStripeId: string;

  @Column({nullable: true, unique: false})
  subscriptionOfferId: string;

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

