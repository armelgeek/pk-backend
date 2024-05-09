import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('medias')
export class MediasDO {
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

  @Column({nullable: true, unique: false})
  eventId: string;

  @Column("simple-array")
  shares: string[];

  @Column("simple-array")
  likes: string[];

  @Column({nullable: true, unique: false})
  duration: number;

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

