import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('page')
export class PageDO {
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

  @Column("simple-json")
  phone: { paysCode: string, phoneNumber: string, callingCode: string };

  @Column({nullable: true, unique: false})
  address: string;

  @Column({nullable: true, unique: false})
  email: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  verification: string;

  @Column({nullable: true, unique: false})
  pageId: string;

  @Column({nullable: true, unique: false})
  additionalInfo: string;

  @Column("simple-json")
  location: { type: string, coordinates: string[] };

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

