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
  verifUser: string;

  @Column({nullable: true, unique: false})
  verifPartenariat: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column("simple-json")
  numberPhone: { paysCode: string, phoneNumber: string, callingCode: string };

  @Column({nullable: true, unique: false})
  message: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  entityVerif: string;

  @Column({nullable: true, unique: false})
  type: string;

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

