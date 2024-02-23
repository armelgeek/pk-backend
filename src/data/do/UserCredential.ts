import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('usercredential')
export class UserCredentialDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: false, unique: false})
  carteNumber: string;

  @Column({nullable: false, unique: false})
  cvv: string;

  @Column({nullable: false, unique: false})
  exp: string;

  @Column({nullable: false, unique: false})
  userId: string;

  @Column({nullable: false, unique: false})
  paymentTypeId: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}

