import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('casinoprofileadditional')
export class CasinoProfileAdditionalDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  monday: string;

  @Column({nullable: true, unique: false})
  tuesday: string;

  @Column({nullable: true, unique: false})
  wednesday: string;

  @Column({nullable: true, unique: false})
  thursday: string;

  @Column({nullable: true, unique: false})
  friday: string;

  @Column({nullable: true, unique: false})
  saturday: string;

  @Column({nullable: true, unique: false})
  sunday: string;

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

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({ type: 'timestamptz', default: new Date() })
  createdDate: Date;

  @BeforeInsert()
  beforeInsert() {
    this.createdDate = new Date();
  }
}

