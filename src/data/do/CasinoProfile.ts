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
  country: string;

  @Column({nullable: true, unique: false})
  phone: string;

  @Column({nullable: true, unique: false})
  adress: string;

  @Column({nullable: true, unique: false})
  email: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}

