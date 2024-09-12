import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('notification')
export class NotificationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  title: string;

  @Column({nullable: true, unique: false})
  message: string;

  @Column({nullable: true, unique: false})
  tous: boolean;

  @Column("simple-array")
  usersIds: string[];

  @Column({nullable: true, unique: false})
  user: string;

  @Column({nullable: true, unique: false})
  view: string;

  @Column({nullable: true, unique: false})
  targetId: string;

  @Column({nullable: true, unique: false})
  target: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  sender: string;

  @Column({nullable: true, unique: false})
  receiver: string;

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

