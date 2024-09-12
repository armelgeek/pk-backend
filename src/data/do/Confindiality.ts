import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('confindiality')
export class ConfindialityDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  option: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  name: string;

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

