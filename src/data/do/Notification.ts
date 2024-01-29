import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('notification')
export class NotificationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  titre: string;

  @Column({nullable: true, unique: false})
  message: string;

  @Column({nullable: true, unique: false})
  tous: boolean;

  @Column({nullable: true, unique: false})
  usersIds: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}

