import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('publication')
export class PublicationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  content: string;

  @Column("simple-array")
  imageUrls: string[];

  @Column("simple-array")
  videoUrls: string[];

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column("simple-json")
  location: { type: string, coordinates: string[] };

  @Column({ default: false })
  private: boolean;

  @Column("simple-array")
  like: string[];

  @Column("simple-array")
  share: string[];

  @Column({ default: false })
  actif: boolean;

  @Column("simple-array")
  tags: string[];

  @Column({nullable: true, unique: false})
  pageId: string;

  @Column({ default: false })
  isShared: boolean;

  @Column({nullable: true, unique: false})
  originalId: string;

  @Column({nullable: true, unique: false})
  activityDate: string;

  @Column({nullable: true, unique: false})
  audience: string;

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

