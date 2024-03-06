import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('usersubscription')
export class UserSubscriptionDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: false, unique: false})
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

  @Column({nullable: false, unique: false})
  pageId: string;

  @Column({ type: 'timestamptz', default: new Date() })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  updatedAt: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate() {
    this.updatedAt = new Date();
  }
}

