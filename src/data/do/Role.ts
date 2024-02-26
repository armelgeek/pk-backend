import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('role')
export class RoleDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  name: string;

  @Column({nullable: true, unique: false})
  profile: string;

  @Column({nullable: true, unique: false})
  active: boolean;

  @Column({ type: 'timestamptz', default: new Date() })
  createdDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdDate = new Date();
  }
}

