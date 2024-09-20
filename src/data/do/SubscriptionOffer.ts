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

  @Column({ default: false })
  isPopular: boolean;

  @Column({ default: false })
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

