import { BeforeInsert, BeforeUpdate, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { logger } from '../../common/logger';

@Entity('utilisateur')
export class UtilisateurDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column({nullable: true, unique: false})
  nom: string;

  @Column({nullable: true, unique: false})
  prenom: string;

  @Column({nullable: true, unique: true})
  email: string;

  @Column({nullable: true, unique: false})
  role: number;

  @Column({nullable: true, unique: false})
  password: string;

  @Column({nullable: true, unique: false})
  phone: string;

  @Column({nullable: true, unique: false})
  imageUrl: string;

  @Column({nullable: true, unique: false})
  adresse: string;

  @Column({nullable: true, unique: false})
  ville: string;

  @Column({nullable: true, unique: false})
  dateInscription: string;

  @Column({nullable: true, unique: false})
  dateNaissance: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateDerniereConnexion: Date;

  @Column({ type: 'timestamptz', default: new Date() })
  dateModification: Date;

  @Column({nullable: true, unique: false})
  actif: boolean;

  @Column({nullable: true, unique: false})
  socketId: string;

  @Column({nullable: true, unique: false})
  nomPrenom: string;

  @Column({nullable: true, unique: false})
  code: string;

  @Column({nullable: true, unique: false})
  googleId: string;

  @Column({nullable: true, unique: false})
  facebookId: string;

  @Column({nullable: true, unique: false})
  appleId: string;

  @Column({nullable: true, unique: false})
  online: boolean;

  @Column({nullable: true, unique: false})
  lague: string;

  @Column({nullable: true, unique: false})
  username: string;

  @Column({ type: 'timestamptz', default: new Date() })
  dateCreation: Date;

  // @BeforeInsert()
  // beforeInsert() {
  //   this.dateCreation = new Date();
  // }

  @BeforeInsert()
  async beforeInsert() {
    try {
      this.dateCreation = new Date();
      if (this.password && !this.password.includes('$2a$')) {
        this.password = await bcrypt.hashSync(this.password, 10);
      }
    } catch (error) {
      logger.error(error);
    }
  }

  @BeforeUpdate()
  async hashPasswordUpdate() {
    if (this.password && !this.password.includes('$2a$')) {
      this.password = await bcrypt.hashSync(this.password, 10);
    }

    this.dateModification = new Date();
  }
}
