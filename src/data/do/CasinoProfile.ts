import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('casinoprofile')
export class CasinoProfileDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  photoCover: string;

  @Column({nullable: true, unique: false})
  photo: string;

  @Column({nullable: true, unique: false})
  name: string;

  @Column({nullable: true, unique: false})
  countryCode: string;

  @Column({nullable: true, unique: false})
  phone: string;

  @Column({nullable: true, unique: false})
  adress: string;

  @Column({nullable: true, unique: false})
  email: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  verifications: string;

  @Column({ type: 'timestamptz', default: new Date() })
  createdDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdDate = new Date();
  }
}

