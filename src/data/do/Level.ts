import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('level')
export class LevelDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  smallBlind: string;

  @Column({nullable: true, unique: false})
  bigBlind: string;

  @Column({nullable: true, unique: false})
  anteBb: string;

  @Column({nullable: true, unique: false})
  duration: string;

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

