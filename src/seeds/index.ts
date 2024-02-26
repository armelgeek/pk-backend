import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as bcrypt from 'bcryptjs';
import { UtilisateurRepository } from '../repository/Utilisateur';
import { ProfileRepository } from '../repository/Profile';
import { LangueRepository } from '../repository/Langue';
import { AdministrateurRepository } from '../repository/Administrateur';
import { CasinoProfileRepository } from '../repository/CasinoProfile';
import { ComplementaryInformationRepository } from '../repository/ComplementaryInformation';
import { LinksRepository } from '../repository/Links';
import { SponsorRepository } from '../repository/Sponsor';
import { PartenerRepository } from '../repository/Partener';
import { PseudoRepository } from '../repository/Pseudo';
import { RoleRepository } from '../repository/Role';

export class InitSeeds implements Seeder {
  // eslint-disable-next-line class-methods-use-this
  async run(_factory: Factory, connection: Connection): Promise<void> {
    const user = connection.getCustomRepository(UtilisateurRepository);
    const profile = connection.getCustomRepository(ProfileRepository);
    const langue = connection.getCustomRepository(LangueRepository);
    const administrateur = connection.getCustomRepository(AdministrateurRepository);
    const casinoProfile = connection.getCustomRepository(CasinoProfileRepository);
    const complementaryInformation = connection.getCustomRepository(ComplementaryInformationRepository);
    const link = connection.getCustomRepository(LinksRepository);
    const sponsor = connection.getCustomRepository(SponsorRepository);
    const partener = connection.getCustomRepository(PartenerRepository);
    const pseudo = connection.getCustomRepository(PseudoRepository);
    const role = connection.getCustomRepository(RoleRepository);
    const users = await user.count();

    if (users < 3) {
      try {
        const data = [
          {
            password: await bcrypt.hashSync('PockerApp#123', 10),
            nom: 'PockerApp',
            prenom: 'Test',
            phone: '',
            email: 'pockerapps@gmail.com',
            ville: '',
            adresse: '',
            imageUrl: '',
            role: 1,
            actif: true,
          },
          {
            password: await bcrypt.hashSync('test123456', 10),
            nom: 'Andry',
            prenom: 'Fetraniaina',
            phone: '',
            email: 'andri.fetraniaina@gmail.com',
            ville: '',
            adresse: '',
            imageUrl: '',
            role: 1,
            actif: true,
          },
          {
            password: await bcrypt.hashSync('azerty123', 10),
            nom: 'Rakotoirintsoa',
            prenom: 'Tsanta',
            phone: '',
            email: 'tsantarakotoirintsoa@gmail.com',
            ville: '',
            adresse: '',
            imageUrl: '',
            role: 1,
            actif: true,
          },
        ];
        await Promise.all(
          data.map(async (item) => {
            const { email, phone = '', nom = '', prenom = '', imageUrl = '' } = item;
            const info = await complementaryInformation.insertOne({
              email,
              phone,
            });
            const profileItem = await profile.insertOne({
              info: info?.insertedId,
              photo: imageUrl,
              type: 'VIP',
              email,
              phone,
              nom,
              prenom,
              imageUrls: [],
            });
            return await user.insertOne({ ...item, actif: true, profileId: profileItem?.insertedId });
          }),
        );
        !user.collectionIndexExists && user.createCollectionIndex({ nom: 'text', prenom: 'text', phone: 'text', email: 'text', adresse: 'text' });
        !langue.collectionIndexExists && langue.createCollectionIndex({ code: 'text', nom: 'text' });
        !administrateur.collectionIndexExists && administrateur.createCollectionIndex({ nom: 'text', prenom: 'text', email: 'text', adresseAdmin: 'text', telAdmin: 'text' });
        !casinoProfile.collectionIndexExists &&  casinoProfile.createCollectionIndex({ name: 'text', country: 'text', phone: 'text', adress: 'text', email: 'text', description: 'text' });
        !complementaryInformation.collectionIndexExists &&  complementaryInformation.createCollectionIndex({ nationality: 'text', langues: 'text', email: 'text', phone: 'text', job: 'text', headonmob: 'text', nb_titre: 'text', rang_time_money: 'text', period: 'text' });
        !link.collectionIndexExists && link.createCollectionIndex({ name: 'text', link: 'text', description: 'text', profile: 'text' });
        !sponsor.collectionIndexExists &&  sponsor.createCollectionIndex({ nom: 'text', description: 'text', });
        !partener.collectionIndexExists && partener.createCollectionIndex({ name: 'text', description: 'text', });
        !pseudo.collectionIndexExists && pseudo.createCollectionIndex({ name: 'text', link: 'text', code: 'text' });
      } catch (error) {
        console.log('error ====================================');
        console.log(error);
        console.log('====================================');
      }
    }
  }
}
