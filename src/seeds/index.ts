import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as bcrypt from 'bcryptjs';
import { UtilisateurRepository } from '../repository/Utilisateur';
import { LangueRepository } from '../repository/Langue';
import { AdministrateurRepository } from '../repository/Administrateur';
import { CasinoProfileRepository } from '../repository/CasinoProfile';
import { ComplementaryInformationRepository } from '../repository/ComplementaryInformation';
import { LinksRepository } from '../repository/Links';
import { BaseInformationRepository } from '../repository/BaseInformation';
import { SponsorRepository } from '../repository/Sponsor';
import { PartenerRepository } from '../repository/Partener';
import { PseudoRepository } from '../repository/Pseudo';
import { RoleRepository } from '../repository/Role';

export class InitSeeds implements Seeder {
  // eslint-disable-next-line class-methods-use-this
  async run(factory: Factory, connection: Connection): Promise<void> {
    const user = connection.getCustomRepository(UtilisateurRepository);
    const langue = connection.getCustomRepository(LangueRepository);
    const administrateur = connection.getCustomRepository(AdministrateurRepository);
    const casinoProfile = connection.getCustomRepository(CasinoProfileRepository);
    const complementaryInformation = connection.getCustomRepository(ComplementaryInformationRepository);
    const link = connection.getCustomRepository(LinksRepository);
    const baseInformation = connection.getCustomRepository(BaseInformationRepository);
    const sponsor = connection.getCustomRepository(SponsorRepository);
    const partener = connection.getCustomRepository(PartenerRepository);
    const pseudo = connection.getCustomRepository(PseudoRepository);
    const role = connection.getCustomRepository(RoleRepository);
    const users = await user.count();

    user.createCollectionIndex({ nom: 'text', prenom: 'text', phone: 'text', email: 'text', adresse: 'text' });
    langue.createCollectionIndex({ code: 'text', nom: 'text' });
    administrateur.createCollectionIndex({ nom: 'text', prenom: 'text', email: 'text', adresseAdmin: 'text', telAdmin: 'text' });
    casinoProfile.createCollectionIndex({ name: 'text', country: 'text', phone: 'text', adress: 'text', email: 'text', description: 'text' });
    casinoProfile.createCollectionIndex({ name: 'text', country: 'text', phone: 'text', adress: 'text', email: 'text', description: 'text' });
    complementaryInformation.createCollectionIndex({ nationality: 'text', langues: 'text', email: 'text', phone: 'text', job: 'text', headonmob: 'text', nb_titre: 'text', rang_time_money: 'text', period: 'text' });
    link.createCollectionIndex({ name: 'text', link: 'text', description: 'text', profile: 'text' });
    baseInformation.createCollectionIndex({ pays: 'text', email: 'text', phone: 'text', date_of_birth: 'text', gender: 'text', nom: 'text', prenom: 'text', city: 'text', country: 'text', situation: 'text', children: 'text', description: 'text' })
    sponsor.createCollectionIndex({ nom: 'text', description: 'text', });
    partener.createCollectionIndex({ name: 'text', description: 'text', });
    pseudo.createCollectionIndex({ name: 'text', link: 'text', code: 'text' });

    // console.log('users ====================================');
    // console.log(users);
    // console.log('====================================');
    // if (users === 0) {
    //   try {
    //     const res = await user.save([
    //       {
    //         password: await bcrypt.hashSync('PockerApp#123', 10),
    //         nom: "PockerApp",
    //         prenom: "Test",
    //         phone: "",
    //         email: "pockerapps@gmail.com",
    //         ville: "",
    //         adresse: "",
    //         // dateInscription: new Date(),
    //         imageUrl: "",
    //         role: 1,
    //         actif: true,
    //       },
    //       {
    //         password: await bcrypt.hashSync('test123456', 10),
    //         nom: "Andry",
    //         prenom: "Fetraniaina",
    //         phone: "",
    //         email: "andri.fetraniaina@gmail.com",
    //         ville: "",
    //         adresse: "",
    //         // dateInscription: new Date(),
    //         imageUrl: "",
    //         role: 1,
    //         actif: true,
    //       },
    //       {
    //         password: await bcrypt.hashSync('azerty123', 10),
    //         nom: "Rakotoirintsoa",
    //         prenom: "Tsanta",
    //         phone: "",
    //         email: "tsantarakotoirintsoa@gmail.com",
    //         ville: "",
    //         adresse: "",
    //         // dateInscription: new Date(),
    //         imageUrl: "",
    //         role: 1,
    //         actif: true,
    //       },
    //     ]);
    //     console.log('users.length = 0 ====================================');
    //     console.log(res);
    //     console.log('====================================');
    //   } catch (error) {
    //     console.log('error ====================================');
    //     console.log(error);
    //     console.log('====================================');
    //   }

    // }
  }
}
