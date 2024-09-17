import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('donation')
export class DonationDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  donorsCount: number;

  @Column({nullable: true, unique: false})
  profileId: string;

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

