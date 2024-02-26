import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

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

  @Column({ type: 'timestamptz', default: new Date() })
  createdDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdDate = new Date();
  }
}

