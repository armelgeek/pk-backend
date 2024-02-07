import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('casinoprofileadditional')
export class CasinoProfileAdditionalDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ type: 'timestamptz', default: new Date() })
  monday: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  tuesday: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  wednesday: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  thursday: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  friday: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  saturday: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  sunday: Date;

  @Column({nullable: true, unique: false})
  members: number;

  @Column({nullable: true, unique: false})
  cardMember: boolean;

  @Column({nullable: true, unique: false})
  restaurant: boolean;

  @Column({nullable: true, unique: false})
  hotel: boolean;

  @Column({nullable: true, unique: false})
  parking: boolean;

  @Column({nullable: true, unique: false})
  sponsors: string;

  @Column({nullable: true, unique: false})
  parteners: string;

  @Column({nullable: true, unique: false})
  links: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}

