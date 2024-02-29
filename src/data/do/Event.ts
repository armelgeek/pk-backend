import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('event')
export class EventDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  name: string;

  @Column({nullable: true, unique: false})
  participants: number;

  @Column({nullable: true, unique: false})
  shortDescription: string;

  @Column({nullable: true, unique: false})
  location: string;

  @Column({nullable: true, unique: false})
  startDate: string;

  @Column({nullable: true, unique: false})
  startTime: string;

  @Column({nullable: true, unique: false})
  contact: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({nullable: true, unique: false})
  parking: boolean;

  @Column({nullable: true, unique: false})
  restauration: boolean;

  @Column({nullable: true, unique: false})
  reglements: string;

  @Column({nullable: true, unique: false})
  photos: string;

  @Column({nullable: true, unique: false})
  videos: string;

  @Column({nullable: true, unique: false})
  private: boolean;

  @Column({nullable: true, unique: false})
  userList: string;

  @Column({nullable: true, unique: false})
  profile: string;

  @Column({nullable: true, unique: false})
  nbDay: number;

  @Column({nullable: true, unique: false})
  nbGames: number;

  @Column({nullable: true, unique: false})
  startStack: string;

  @Column({nullable: true, unique: false})
  nbRebu: number;

  @Column({nullable: true, unique: false})
  devise: string;

  @Column({nullable: true, unique: false})
  latReg: string;

  @Column({nullable: true, unique: false})
  dealer: string;

  @Column({nullable: true, unique: false})
  timeClock: string;

  @Column({nullable: true, unique: false})
  reEntry: string;

  @Column({nullable: true, unique: false})
  memberCard: string;

  @Column({nullable: true, unique: false})
  prizePool: string;

  @Column({nullable: true, unique: false})
  bounty: string;

  @Column({nullable: true, unique: false})
  bountyText: string;

  @Column({nullable: true, unique: false})
  othersReward: string;

  @Column({nullable: true, unique: false})
  tournamentType: string;

  @Column({nullable: true, unique: false})
  gameType: string;

  @Column({nullable: true, unique: false})
  jackpot: string;

  @Column({nullable: true, unique: false})
  jackpotText: string;

  @Column({nullable: true, unique: false})
  buyin: string;

  @Column({nullable: true, unique: false})
  bonus: string;

  @Column({nullable: true, unique: false})
  bonusText: string;

  @Column({nullable: true, unique: false})
  addon: string;

  @Column({nullable: true, unique: false})
  addonPrice: string;

  @Column({nullable: true, unique: false})
  nbParticipantMax: string;

  @Column({nullable: true, unique: false})
  massage: string;

  @Column({nullable: true, unique: false})
  hotel: boolean;

  @Column({nullable: true, unique: false})
  qualification: string;

  @Column({nullable: true, unique: false})
  titleDay: string;

  @Column({ type: 'timestamptz', default: new Date() })
  startDateDay: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  startTimeDay: Date;

  @Column({nullable: true, unique: false})
  lateReg: string;

  @Column({nullable: true, unique: false})
  limitRegEntry: string;

  @Column({nullable: true, unique: false})
  durationDay: number;

  @Column({nullable: true, unique: false})
  levels: string;

  @Column({nullable: true, unique: false})
  duration: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  limitRegBuy: string;

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
