import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('day')
export class DayDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ default: false })
  qualification: boolean;

  @Column({nullable: true, unique: false})
  titleDay: string;

  @Column({nullable: true, unique: false})
  startDateDay: string;

  @Column({nullable: true, unique: false})
  startTimeDay: string;

  @Column({nullable: true, unique: false})
  lateReg: string;

  @Column({nullable: true, unique: false})
  limitRegEntry: string;

  @Column({nullable: true, unique: false})
  limitRegBuy: string;

  @Column({nullable: true, unique: false})
  durationDay: string;

  @Column({nullable: true, unique: false})
  nbTableDay: string;

  @Column({nullable: true, unique: false})
  duration: string;

  @Column("simple-array")
  levels: string[];

  @Column("simple-array")
  photos: string[];

  @Column("simple-array")
  videos: string[];

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

