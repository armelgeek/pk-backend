import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('partenariat')
export class PartenariatDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  photo: string;

  @Column({nullable: true, unique: false})
  name: string;

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

  @Column("simple-array")
  socialNetwork: string[];

  @Column({nullable: true, unique: false})
  verification: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column("simple-json")
  numberPhone: { paysCode: string, phoneNumber: string, callingCode: string };

  @Column({nullable: true, unique: false})
  message: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  type: string;

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

