import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('report')
export class ReportDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  publicationId: string;

  @Column({nullable: true, unique: false})
  eventId: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  reportProfileId: string;

  @Column({nullable: true, unique: false})
  etat: string;

  @Column({nullable: true, unique: false})
  situation: string;

  @Column({nullable: true, unique: false})
  message: string;

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

