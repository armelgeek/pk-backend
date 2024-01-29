import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('message')
export class MessageDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  text: string;

  @Column({nullable: true, unique: false})
  imagesUrl: string;

  @Column({nullable: true, unique: false})
  sender: string;

  @Column({nullable: true, unique: false})
  reciever: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}

