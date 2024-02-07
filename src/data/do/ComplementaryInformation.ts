import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('complementaryinformation')
export class ComplementaryInformationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  nationality: string;

  @Column({nullable: true, unique: false})
  email: string;

  @Column({nullable: true, unique: false})
  phone: string;

  @Column({nullable: true, unique: false})
  metier: string;

  @Column({nullable: true, unique: false})
  headonmob: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}

