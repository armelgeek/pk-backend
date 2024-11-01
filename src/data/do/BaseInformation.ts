import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('baseinformation')
export class BaseInformationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  pays: string;

  @Column({nullable: true, unique: false})
  email: string;

  @Column("simple-json")
  phone: { paysCode: string, phoneNumber: string, callingCode: string };

  @Column({nullable: true, unique: false})
  date_of_birth: string;

  @Column({nullable: true, unique: false})
  gender: string;

  @Column({nullable: true, unique: false})
  nom: string;

  @Column({nullable: true, unique: false})
  prenom: string;

  @Column({nullable: true, unique: false})
  imageUrl: string;

  @Column({nullable: true, unique: false})
  country: string;

  @Column({nullable: true, unique: false})
  city: string;

  @Column({nullable: true, unique: false})
  situation: string;

  @Column({nullable: true, unique: false})
  children: string;

  @Column({nullable: true, unique: false})
  description: string;

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

