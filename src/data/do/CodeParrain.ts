import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('codeparrain')
export class CodeParrainDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: false, unique: false})
  code: string;

  @Column({nullable: true, unique: false})
  percentage: number;

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
