import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('pageadditional')
export class PageAdditionalDO {
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

  @Column({ default: false })
  cardMember: boolean;

  @Column({ default: false })
  restaurant: boolean;

  @Column({ default: false })
  hotel: boolean;

  @Column({ default: false })
  parking: boolean;

  @Column("simple-array")
  sponsors: string[];

  @Column("simple-array")
  parteners: string[];

  @Column("simple-array")
  links: string[];

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  type: string;

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

