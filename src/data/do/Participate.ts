import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('participate')
export class ParticipateDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  eventId: string;

  @Column({nullable: true, unique: false})
  pageId: string;

  @Column({nullable: true, unique: false})
  isMemberClub: boolean;

  @Column({nullable: true, unique: false})
  payement: boolean;

  @Column({ type: 'timestamptz', default: new Date() })
  hourRegistry: Date;

  @Column({nullable: true, unique: false})
  numberTable: number;

  @Column({nullable: true, unique: false})
  numberPlace: number;

  @Column({nullable: true, unique: false})
  numberBuyIn: number;

  @Column({nullable: true, unique: false})
  numberRebuy: number;

  @Column({nullable: true, unique: false})
  payout: number;

  @Column({nullable: true, unique: false})
  nombreBounty: number;

  @Column({nullable: true, unique: false})
  chip: string;

  @Column({nullable: true, unique: false})
  gain: string;

  @Column({nullable: true, unique: false})
  eliminate: boolean;

  @Column({nullable: true, unique: false})
  flag: string;

  @Column({nullable: true, unique: false})
  message: string;

  @Column({nullable: true, unique: false})
  pseudo: string;

  @Column("simple-json")
  phone: { paysCode: string, phoneNumber: string, callingCode: string };

  @Column({nullable: true, unique: false})
  note: string;

  @Column({nullable: true, unique: false})
  photo: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateEliminate: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  hourEliminate: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  dateRegistry: Date;

  @Column({nullable: true, unique: false})
  country: string;

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

