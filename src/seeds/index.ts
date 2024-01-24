import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as bcrypt from 'bcryptjs';
import { UtilisateurRepository } from '../repository/Utilisateur';

export class InitSeeds implements Seeder {
  // eslint-disable-next-line class-methods-use-this
  async run(factory: Factory, connection: Connection): Promise<void> {
    const user = connection.getCustomRepository(UtilisateurRepository);
    const user_count = await user.find({ email: "fullstackadmin@gmail.com" });
    if (!(user_count.length > 0)) {
      await user.save([
        {
          password: await bcrypt.hashSync('PockerApp#123', 10),
          nom: "PockerApp",
          prenom: "Test",
          telephone: "",
          email: "pockerapps@gmail.com",
          ville: "",
          adresse: "",
          // dateInscription: new Date(),
          imageUrl: "",
          role: 1,
          actif: true,
        },
      ]);
    }
  }
}
