import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('restriction')
export class RestrictionDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  limit: number;

  @Column({nullable: true, unique: false})
  frequence: number;

  @Column({nullable: true, unique: false})
  action: string;

  @Column({nullable: true, unique: false})
  functionality: string;

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

