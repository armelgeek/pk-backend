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
  hideFor: string;

  @Column({nullable: true, unique: false})
  target: string;

  @Column({nullable: true, unique: false})
  prifileId: string;

  @Column({nullable: true, unique: false})
  happy: string;

  @Column({nullable: true, unique: false})
  love: string;

  @Column({nullable: true, unique: false})
  sad: string;

  @Column({nullable: true, unique: false})
  veryhappy: string;

  @Column({nullable: true, unique: false})
  media: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({ type: 'timestamptz', default: new Date() })
  createdDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdDate = new Date();
  }
}

