import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('media')
export class MediaDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  url: string;

  @Column("simple-array")
  size: string[];

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  pageId: string;

  @Column({nullable: true, unique: false})
  category: string;

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

