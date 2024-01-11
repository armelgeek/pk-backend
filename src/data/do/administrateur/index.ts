import { BeforeInsert, Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('administrateur')
export class AdministrateurDO {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  email: string;

  @Column()
  adresseAdmin: string;

  @Column()
  telAdmin: string;

  @Column({ type: 'timestamptz' })
  dateCreation: Date;

  @BeforeInsert()
  beforeInsert() {
    this.dateCreation = new Date();
  }
}
