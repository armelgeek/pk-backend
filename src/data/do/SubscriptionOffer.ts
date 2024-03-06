import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('subscriptionoffer')
export class SubscriptionOfferDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: false, unique: false})
  name: string;

  @Column({nullable: false, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  price: number;

  @Column({nullable: true, unique: false})
  isPopular: boolean;

  @Column({nullable: false, unique: false})
  isActive: boolean;

  @Column({nullable: true, unique: false})
  duration: number;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  stripeProductId: string;

  @Column({nullable: true, unique: false})
  pageType: string;

  @Column({nullable: false, unique: false})
  remiseDescription: string;

  @Column({nullable: true, unique: false})
  subscriptionStripeId: string;

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

