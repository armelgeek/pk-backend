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

