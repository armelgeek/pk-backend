import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { logger } from '../../../common/logger';
// import { NotificationDO } from '../Notification';
// import { DeviceTokenDO } from '../device-token/device-token.do';

export type UserRoleType = "admin" | "editor" | "user" | "rider";

@Entity('utilisateur')
export class UtilisateurDO {
  // @PrimaryGeneratedColumn('uuid')
  // id: string;
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({ length: 50 })
  nom: string;

  @Column({ length: 100, nullable: true })
  prenom: string;

  @Column({ default: "" })
  imageUrl: string;

  @Column({ default: "" })
  code: string;

  @Column({ length: 10, nullable: true, unique: true })
  telephone: string;

  @Column({ length: 50 })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 25, default: "" })
  ville: string;

  @Column({ length: 50, default: "" })
  adresse: string;

  @Column()
  password: string;

  @Column({
    default: 0
  })
  role: number

  @Column({ type: 'timestamptz' })
  dateInscription: Date;

  @Column({ nullable: true })
  dateNaissance: string;

  @Column({ type: 'timestamptz', nullable: true })
  dateModification: Date;

  @Column({ type: 'timestamptz', nullable: true })
  dateDerniereConnexion: Date;

  @Column({ default: true })
  actif: boolean;

  @Column({ nullable: true })
  socketId: string;

  // @Column(() => NotificationDO)
  // notifications: ObjectID[];

  // @Column(() => DeviceTokenDO)
  // deviceTokens: string[];

  @BeforeInsert()
  async beforeInsert() {
    try {
      this.dateInscription = new Date();
      this.password = await bcrypt.hashSync(this.password, 10);
    } catch (error) {
      logger.error(error);
    }
  }

  @BeforeUpdate()
  async hashPasswordUpdate() {
    if (!this.password.includes('$2a$')) {
      this.password = await bcrypt.hashSync(this.password, 10);
    }

    this.dateModification = new Date();
  }
}
