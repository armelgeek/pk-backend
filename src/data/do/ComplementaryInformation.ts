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

  @Column({nullable: true, unique: false})
  phone: string;

  @Column({nullable: true, unique: false})
  job: string;

  @Column({nullable: true, unique: false})
  headonmob: string;

  @Column({nullable: true, unique: false})
  nb_titre: number;

  @Column({nullable: true, unique: false})
  rang_time_money: string;

  @Column({nullable: true, unique: false})
  period: string;

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

