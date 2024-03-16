import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('sharingnote')
export class sharingNoteDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  nom: string;

  @Column({nullable: true, unique: false})
  prenom: string;

  @Column({nullable: true, unique: false})
  friends: number;

  @Column({nullable: true, unique: false})
  city: string;

  @Column({nullable: true, unique: false})
  country: string;

  @Column({nullable: true, unique: false})
  status: string;

  @Column({nullable: true, unique: false})
  shareBy: string;

  @Column({nullable: true, unique: false})
  photo: string;

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

