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
  location: { accuracy?: number, longitude: number, latitude: number, altitude?: number };

  @Column({nullable: true, unique: false})
  private: boolean;

  @Column("simple-array")
  like: string[];

  @Column("simple-array")
  share: string[];

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

