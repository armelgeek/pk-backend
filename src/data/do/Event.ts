import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('event')
export class EventDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  name: string;

  @Column({nullable: true, unique: false})
  participants: number;

  @Column({nullable: true, unique: false})
  shortDescription: string;

  @Column({nullable: true, unique: false})
  location: string;

  @Column({nullable: true, unique: false})
  startDate: string;

  @Column({nullable: true, unique: false})
  startTime: string;

  @Column({nullable: true, unique: false})
  contact: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  parking: boolean;

  @Column({nullable: true, unique: false})
  restauration: boolean;

  @Column({nullable: true, unique: false})
  reglements: string;

  @Column({nullable: true, unique: false})
  photos: string;

  @Column({nullable: true, unique: false})
  videos: string;

  @Column({nullable: true, unique: false})
  private: boolean;

  @Column({nullable: true, unique: false})
  userList: string;

  @Column({nullable: true, unique: false})
  profile: string;

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

