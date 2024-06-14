import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('profile')
export class ProfileDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  info: string;

  @Column({nullable: true, unique: false})
  photo: string;

  @Column({nullable: true, unique: false})
  cover: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  email: string;

  @Column("simple-json")
  phone: { paysCode: string, phoneNumber: string, callingCode: string };

  @Column({ type: 'timestamptz', default: new Date() })
  date_of_birth: Date;

  @Column({nullable: true, unique: false})
  gender: string;

  @Column({nullable: true, unique: false})
  prenom: string;

  @Column("simple-array")
  imageUrls: string[];

  @Column({nullable: true, unique: false})
  country: string;

  @Column({nullable: true, unique: false})
  city: string;

  @Column({nullable: true, unique: false})
  children: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  nom: string;

  @Column({nullable: true, unique: false})
  verification: string;

  @Column("simple-json")
  currency: { name?: string, code: string, codeFormat: string, symbol?: string };

  @Column("simple-array")
  friends: string[];

  @Column("simple-array")
  followed: string[];

  @Column({nullable: true, unique: false})
  situation: string;

  @Column("simple-json")
  location: { type: string, coordinates: string[] };

  @Column({nullable: true, unique: false})
  filter: string;

  @Column({nullable: true, unique: false})
  verified: boolean;

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

