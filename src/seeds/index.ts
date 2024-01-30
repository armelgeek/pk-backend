import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as bcrypt from 'bcryptjs';
import { UtilisateurRepository } from '../repository/Utilisateur';

export class InitSeeds implements Seeder {
  // eslint-disable-next-line class-methods-use-this
  async run(factory: Factory, connection: Connection): Promise<void> {
    const user = connection.getCustomRepository(UtilisateurRepository);
    const users = await user.count();
    console.log('users ====================================');
    console.log(users);
    console.log('====================================');
    if (users === 0) {
      try {
        const res = await user.save([
          {
            password: await bcrypt.hashSync('PockerApp#123', 10),
            nom: "PockerApp",
            prenom: "Test",
            phone: "",
            email: "pockerapps@gmail.com",
            ville: "",
            adresse: "",
            // dateInscription: new Date(),
            imageUrl: "",
            role: 1,
            actif: true,
          },
          {
            password: await bcrypt.hashSync('test123456', 10),
            nom: "Andry",
            prenom: "Fetraniaina",
            phone: "",
            email: "andri.fetraniaina@gmail.com",
            ville: "",
            adresse: "",
            // dateInscription: new Date(),
            imageUrl: "",
            role: 1,
            actif: true,
          },
          {
            password: await bcrypt.hashSync('azerty123', 10),
            nom: "Rakotoirintsoa",
            prenom: "Tsanta",
            phone: "",
            email: "tsantarakotoirintsoa@gmail.com",
            ville: "",
            adresse: "",
            // dateInscription: new Date(),
            imageUrl: "",
            role: 1,
            actif: true,
          },
        ]);
        console.log('users.length = 0 ====================================');
        console.log(res);
        console.log('====================================');
      } catch (error) {
        console.log('error ====================================');
        console.log(error);
        console.log('====================================');
      }
      
    }
  }
}
