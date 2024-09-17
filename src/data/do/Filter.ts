import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('filter')
export class FilterDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column("simple-array")
  poste: string[];

  @Column({nullable: true, unique: false})
  profileId: string;

  @Column({ type: 'timestamptz', default: new Date() })
  startDate: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  endDate: Date;

  @Column({nullable: true, unique: false})
  city: string;

  @Column("simple-array")
  status: string[];

  @Column({nullable: true, unique: false})
  perimeter: string;

  @Column({nullable: true, unique: false})
  prizePool: string;

  @Column({nullable: true, unique: false})
  buyIn: string;

  @Column("simple-array")
  eventType: string[];

  @Column("simple-array")
  gameType: string[];

  @Column({nullable: true, unique: false})
  player: boolean;

  @Column({nullable: true, unique: false})
  cashGame: boolean;

  @Column({nullable: true, unique: false})
  tournoi: boolean;

  @Column({nullable: true, unique: false})
  satellite: boolean;

  @Column({nullable: true, unique: false})
  page: boolean;

  @Column({nullable: true, unique: false})
  event: boolean;

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

