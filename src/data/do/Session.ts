import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('session')
export class SessionDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  address: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  mode: string;

  @Column({nullable: true, unique: false})
  gameType: string;

  @Column({ type: 'timestamptz', default: new Date() })
  startDate: Date;

  @Column({nullable: true, unique: false})
  hourDate: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateFin: Date;

  @Column({nullable: true, unique: false})
  hourFin: string;

  @Column({nullable: true, unique: false})
  buyIn: number;

  @Column({nullable: true, unique: false})
  cashOut: number;

  @Column({nullable: true, unique: false})
  smallBlind: string;

  @Column({nullable: true, unique: false})
  bigBlind: string;

  @Column({nullable: true, unique: false})
  note: string;

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

