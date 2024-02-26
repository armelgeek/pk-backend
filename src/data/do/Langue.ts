import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('langue')
export class LangueDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  code: string;

  @Column({nullable: true, unique: false})
  nom: string;

  @Column({ type: 'timestamptz', default: new Date() })
  createdDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdDate = new Date();
  }
}

