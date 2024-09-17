import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('album')
export class AlbumDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  title: string;

  @Column("simple-array")
  media: string[];

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column("simple-array")
  like: string[];

  @Column("simple-array")
  share: string[];

  @Column("simple-array")
  comments: string[];

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  cover: string;

  @Column("simple-array")
  views: string[];

  @Column({nullable: true, unique: false})
  eventId: string;

  @Column({nullable: true, unique: false})
  pageId: string;

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

