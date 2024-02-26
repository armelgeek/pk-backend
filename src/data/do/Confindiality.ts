import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('confindiality')
export class ConfindialityDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  gender: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  nationality: string;

  @Column({nullable: true, unique: false})
  residence: string;

  @Column({nullable: true, unique: false})
  date_of_birth: string;

  @Column({nullable: true, unique: false})
  participation: string;

  @Column({nullable: true, unique: false})
  result: string;

  @Column({nullable: true, unique: false})
  location: string;

  @Column({nullable: true, unique: false})
  sponsors: string;

  @Column({nullable: true, unique: false})
  partner: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({ type: 'timestamptz', default: new Date() })
  createdDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdDate = new Date();
  }
}

