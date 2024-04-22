import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('complementaryinformation')
export class ComplementaryInformationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  nationality: string;

  @Column({nullable: true, unique: false})
  langue: string;

  @Column({nullable: true, unique: false})
  email: string;

  @Column("simple-json")
  phone: { paysCode: string, phoneNumber: string, callingCode: string };

  @Column({nullable: true, unique: false})
  job: string;

  @Column({nullable: true, unique: false})
  headonmob: number;

  @Column({nullable: true, unique: false})
  nbTitle: number;

  @Column({nullable: true, unique: false})
  rangTimeMoney: string;

  @Column({ type: 'timestamptz', default: new Date() })
  period: Date;

  @Column({nullable: true, unique: false})
  nbBracelet: number;

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

