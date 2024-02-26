import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

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

  @Column({ type: 'timestamptz', default: new Date() })
  createdDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdDate = new Date();
  }
}

