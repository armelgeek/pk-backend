import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('note')
export class NoteDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  nom: string;

  @Column({nullable: true, unique: false})
  prenom: string;

  @Column({nullable: true, unique: false})
  friends: number;

  @Column({nullable: true, unique: false})
  city: string;

  @Column({nullable: true, unique: false})
  country: string;

  @Column({nullable: true, unique: false})
  status: string;

  @Column("simple-array")
  shareBy: string[];

  @Column({nullable: true, unique: false})
  photo: string;

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({nullable: true, unique: false})
  createdBy: string;

  @Column({nullable: true, unique: false})
  bluff: number;

  @Column({nullable: true, unique: false})
  level: number;

  @Column({nullable: true, unique: false})
  large: number;

  @Column({nullable: true, unique: false})
  passif: number;

  @Column({nullable: true, unique: false})
  callingstation: number;

  @Column("simple-array")
  gaugesId: string[];

  @Column("simple-array")
  strategyId: string[];

  @Column("simple-array")
  noteValueId: string[];

  @Column("simple-array")
  noticedId: string[];

  @Column({nullable: true, unique: false})
  isPin: boolean;

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

