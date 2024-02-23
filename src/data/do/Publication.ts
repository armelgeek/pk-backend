import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('publication')
export class PublicationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  content: string;

  @Column({nullable: true, unique: false})
  imageUrls: string;

  @Column({nullable: true, unique: false})
  videoUrls: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  location: string;

  @Column({nullable: true, unique: false})
  private: boolean;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}

