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

  @Column("simple-json")
  location: { type: string, coordinates: string[] };

  @Column({ type: 'timestamptz', default: new Date() })
  startDate: Date;

  @Column({nullable: true, unique: false})
  startTime: string;

  @Column({nullable: true, unique: false})
  contact: string;

  @Column({nullable: true, unique: false})
  description: string;

  @Column({ default: false })
  parking: boolean;

  @Column({ default: false })
  restauration: boolean;

  @Column({nullable: true, unique: false})
  reglements: string;

  @Column("simple-array")
  photos: string[];

  @Column("simple-array")
  videos: string[];

  @Column({ default: false })
  private: boolean;

  @Column("simple-array")
  userList: string[];

  @Column({nullable: true, unique: false})
  profileId: string;

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

  @Column({ default: false })
  dealer: boolean;

  @Column({ default: false })
  timeClock: boolean;

  @Column({ default: false })
  reEntry: boolean;

  @Column({ default: false })
  memberCard: boolean;

  @Column({nullable: true, unique: false})
  prizePool: string;

  @Column({ default: false })
  bounty: boolean;

  @Column({nullable: true, unique: false})
  bountyText: string;

  @Column({nullable: true, unique: false})
  othersReward: string;

  @Column({nullable: true, unique: false})
  tournamentType: string;

  @Column({nullable: true, unique: false})
  gameType: string;

  @Column({ default: false })
  jackpot: boolean;

  @Column({nullable: true, unique: false})
  jackpotText: string;

  @Column({nullable: true, unique: false})
  buyin: string;

  @Column({ default: false })
  bonus: boolean;

  @Column({nullable: true, unique: false})
  bonusText: string;

  @Column({ default: false })
  addon: boolean;

  @Column({nullable: true, unique: false})
  addonPrice: string;

  @Column({nullable: true, unique: false})
  nbParticipantMax: string;

  @Column({ default: false })
  massage: boolean;

  @Column({ default: false })
  hotel: boolean;

  @Column({ default: false })
  qualification: boolean;

  @Column({nullable: true, unique: false})
  titleDay: string;

  @Column({ type: 'timestamptz', default: new Date() })
  startDateDay: Date;

  @Column({nullable: true, unique: false})
  startTimeDay: string;

  @Column({nullable: true, unique: false})
  lateReg: string;

  @Column({nullable: true, unique: false})
  limitRegEntry: string;

  @Column({nullable: true, unique: false})
  durationDay: number;

  @Column("simple-array")
  levels: string[];

  @Column({nullable: true, unique: false})
  duration: string;

  @Column({nullable: true, unique: false})
  type: string;

  @Column({nullable: true, unique: false})
  limitRegBuy: string;

  @Column({ default: false })
  status: boolean;

  @Column({nullable: true, unique: false})
  pageId: string;

  @Column({nullable: true, unique: false})
  eventId: string;

  @Column({nullable: true, unique: false})
  mainTournament: number;

  @Column({nullable: true, unique: false})
  nbParticipantPerTable: number;

  @Column({nullable: true, unique: false})
  cashBigBlind: string;

  @Column({nullable: true, unique: false})
  cashSmallBlind: string;

  @Column({nullable: true, unique: false})
  cashEntryMax: number;

  @Column({nullable: true, unique: false})
  cashEntryMin: number;

  @Column("simple-array")
  days: string[];

  @Column({ default: false })
  finish: boolean;

  @Column({ default: false })
  actif: boolean;

  @Column({nullable: true, unique: false})
  activityDate: string;

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

