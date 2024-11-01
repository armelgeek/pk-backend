import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('pseudos')
export class PseudosDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  name: string;

  @Column({nullable: true, unique: false})
  link: string;

  @Column({nullable: true, unique: false})
  code: string;

  @Column({nullable: true, unique: false})
  profile: string;

  @Column({nullable: true, unique: false})
  icon: string;

  @Column({nullable: true, unique: false})
  active: boolean;

  @Column({ type: 'timestamptz', default: new Date() })
  createdAt: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdAt = new Date();
  }
}

