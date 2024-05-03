import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('partener')
export class PartenerDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  name: string;

  @Column({nullable: true, unique: false})
  logo: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column("simple-json")
  phone: { paysCode: string, phoneNumber: string, callingCode: string };

  @Column({nullable: true, unique: false})
  verification: string;

  @Column("simple-array")
  link: string[];

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  price: number;

  @Column({nullable: true, unique: false})
  autoRenewed: boolean;

  @Column({nullable: true, unique: false})
  subscriptionStripeId: string;

  @Column({nullable: true, unique: false})
  title: string;

  @Column({nullable: true, unique: false})
  hendonmob: number;

  @Column({nullable: true, unique: false})
  rangAllTimeMoney: string;

  @Column({nullable: true, unique: false})
  bracelet: number;

  @Column({nullable: true, unique: false})
  job: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  message: string;

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

