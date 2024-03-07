import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('comment')
export class CommentDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  content: string;

  @Column({nullable: true, unique: false})
  parent: string;

  @Column("simple-array")
  hideFor: string[];

  @Column({nullable: true, unique: false})
  target: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column("simple-array")
  happy: string[];

  @Column("simple-array")
  love: string[];

  @Column("simple-array")
  sad: string[];

  @Column("simple-array")
  veryhappy: string[];

  @Column({nullable: true, unique: false})
  media: string;

  @Column({nullable: true, unique: false})
  type: string;

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

