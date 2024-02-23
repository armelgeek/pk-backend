import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('comment')
export class CommentDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  content: string;

  @Column({nullable: true, unique: false})
  createdAt: string;

  @Column({nullable: true, unique: false})
  parent: string;

  @Column({nullable: true, unique: false})
  reaction: string;

  @Column({nullable: true, unique: false})
  createdBy: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}

