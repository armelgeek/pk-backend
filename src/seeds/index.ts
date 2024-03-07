import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import * as bcrypt from 'bcryptjs';
import { UtilisateurRepository } from '../repository/Utilisateur';
import { ProfileRepository } from '../repository/Profile';
import { LangueRepository } from '../repository/Langue';
import { AdministrateurRepository } from '../repository/Administrateur';
import { PageRepository } from '../repository/Page';
import { ComplementaryInformationRepository } from '../repository/ComplementaryInformation';
import { LinkRepository } from '../repository/Link';
import { SponsorRepository } from '../repository/Sponsor';
import { PartenerRepository } from '../repository/Partener';
import { PseudoRepository } from '../repository/Pseudo';
import { RoleRepository } from '../repository/Role';
import { TournamentTypeRepository } from '../repository/TournamentType';
import { GameTypeRepository } from '../repository/GameType';
import { LevelRepository } from '../repository/Level';
import { SubscriptionOfferRequestDTO } from '../data/dto/SubscriptionOffer/request';
import Stripe from 'stripe';
import { configs } from '../data/constants/configs';
import { UserSubscriptionRepository } from '../repository/UserSubscription';
import { SubscriptionOfferRepository } from '../repository/SubscriptionOffer';
const stripe = new Stripe(configs.stripeSK);

const gameTypes = [
  {
    name: 'Plo4',
    description: 'Plo4',
  },
  {
    name: 'Plo4',
    description: 'Plo4',
  },
  {
    name: 'Texas holdem limit',
    description: 'Texas holdem limit',
  },
  {
    name: '5 stud cards',
    description: '5 stud cards',
  },
  {
    name: '7 stud cards',
    description: '7 stud cards',
  },
  {
    name: 'Badugi',
    description: 'Badugi',
  },
  {
    name: 'Badugi',
    description: 'Badugi',
  },
];

const tournamentTypes = [
  {
    name: 'FreeRoll',
    description: 'Déscription du freeroll',
  },
  {
    name: 'Texas holdem limit',
    description: 'Texas holdem limit',
  },
];

const levels = [
  {
    smallBlind: 'smallBlind1',
    bigBlind: 'bigBlind1',
    anteBb: 'anteBb1',
    duration: '12',
  },
  {
    smallBlind: 'smallBlind12',
    bigBlind: 'bigBlind12',
    anteBb: 'anteBb12',
    duration: '20',
  },
  {
    smallBlind: 'smallBlind121',
    bigBlind: 'bigBlind121',
    anteBb: 'anteBb121',
    duration: '201',
  },
];

const offers: SubscriptionOfferRequestDTO[] = [
  {
    name: 'Abonnement mensuel',
    description: '',
    price: 199,
    remiseDescription: '',
    isActive: true,
    duration: 1,
    type: 'month',
    isPopular: false,
    pageType: 'casino',
    stripeProductId: '',
  },
  {
    name: 'Abonnement mensuel',
    description: '',
    price: 99.95,
    remiseDescription: '',
    isActive: true,
    duration: 1,
    type: 'month',
    isPopular: false,
    pageType: 'club',
    stripeProductId: '',
  },
  {
    name: 'Abonnement annuel',
    description: '',
    price: 1999.95,
    remiseDescription: '1 mois offert (donc remise de 23%)',
    isActive: true,
    duration: 1,
    type: 'year',
    isPopular: false,
    pageType: 'casino',
    stripeProductId: '',
  },
  {
    name: 'Abonnement annuel',
    description: '',
    price: 999.95,
    remiseDescription: '1 mois offert (donc remise de 23%).',
    isActive: true,
    duration: 1,
    type: 'year',
    isPopular: false,
    pageType: 'club',
    stripeProductId: '',
  },
  {
    name: 'Abonnement 3 ans',
    description: '',
    price: 5999.95,
    remiseDescription: '50% de rabais plus partenariat obligatoire',
    isActive: true,
    duration: 3,
    type: 'year',
    isPopular: false,
    pageType: 'all',
    stripeProductId: '',
  },
];

const initStripeProduct = async () => {
  for (let i in offers) {
    const offer = offers[i];

    const product = await stripe.products.create({
      name: offer.name + '-' + offer.pageType,
      type: 'good',
      description: 'Product description',
    });
    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: offer.price * 100,
      currency: 'eur',
      recurring: {
        interval: offer.type === 'month' ? 'month' : 'year',
        interval_count: offer.duration,
      },
    });

    offers[i] = { ...offer, stripeProductId: price.id };
  }
};

export class InitSeeds implements Seeder {
  // eslint-disable-next-line class-methods-use-this
  async run(_factory: Factory, connection: Connection): Promise<void> {
    const user = connection.getCustomRepository(UtilisateurRepository);
    const profile = connection.getCustomRepository(ProfileRepository);
    const langue = connection.getCustomRepository(LangueRepository);
    const administrateur = connection.getCustomRepository(AdministrateurRepository);
    const page = connection.getCustomRepository(PageRepository);
    const complementaryInformation = connection.getCustomRepository(
      ComplementaryInformationRepository,
    );
    const link = connection.getCustomRepository(LinkRepository);
    const sponsor = connection.getCustomRepository(SponsorRepository);
    const partener = connection.getCustomRepository(PartenerRepository);
    const pseudo = connection.getCustomRepository(PseudoRepository);
    const level = connection.getCustomRepository(LevelRepository);
    const game = connection.getCustomRepository(GameTypeRepository);
    const tournament = connection.getCustomRepository(TournamentTypeRepository);
    const subsriptionOffer = connection.getCustomRepository(SubscriptionOfferRepository);
    const users = await user.count();
    const subsriptionOfferCount = await subsriptionOffer.count();

    const levelCount = await level.count();

    // compte thanhly26@gmail.com / thanhly26
    const client = await user.findOne({ email: 'thanhly26@gmail.com' });
    if (!client) {
      await user.insert({
        password: await bcrypt.hashSync('thanhly26', 10),
        nom: 'Thanhly',
        prenom: 'Test',
        phone: '',
        email: 'thanhly26@gmail.com',
        ville: '',
        adresse: '',
        imageUrl: '',
        role: 1,
        actif: true,
      });
    }
    if (levelCount < 2) {
      await level.save(levels);
    }
    const gameCount = await game.count();
    if (gameCount < 2) {
      await game.save(gameTypes);
    }
    const tournamentCount = await tournament.count();
    if (tournamentCount < 2) {
      await tournament.save(tournamentTypes);
    }

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
            return await user.insertOne({
              ...item,
              actif: true,
              profileId: profileItem?.insertedId,
            });
          }),
        );
      } catch (error) {
        console.log('error ====================================');
        console.log(error);
        console.log('====================================');
      }
    }
    !user.collectionIndexExists &&
      user.createCollectionIndex({
        nom: 'text',
        prenom: 'text',
        phone: 'text',
        email: 'text',
        adresse: 'text',
      });
    !langue.collectionIndexExists && langue.createCollectionIndex({ code: 'text', nom: 'text' });
    !administrateur.collectionIndexExists &&
      administrateur.createCollectionIndex({
        nom: 'text',
        prenom: 'text',
        email: 'text',
        adresseAdmin: 'text',
        telAdmin: 'text',
      });
    !page.collectionIndexExists &&
      page.createCollectionIndex({
        name: 'text',
        country: 'text',
        phone: 'text',
        adress: 'text',
        email: 'text',
        description: 'text',
      });
    !complementaryInformation.collectionIndexExists &&
      complementaryInformation.createCollectionIndex({
        nationality: 'text',
        langues: 'text',
        email: 'text',
        phone: 'text',
        job: 'text',
        headonmob: 'text',
        nb_titre: 'text',
        rang_time_money: 'text',
        period: 'text',
      });
    link.createCollectionIndex({
      name: 'text',
      link: 'text',
      description: 'text',
      profile: 'text',
    });
    !sponsor.collectionIndexExists &&
      sponsor.createCollectionIndex({ nom: 'text', description: 'text' });
    !partener.collectionIndexExists &&
      partener.createCollectionIndex({ name: 'text', description: 'text' });
    !pseudo.collectionIndexExists &&
      pseudo.createCollectionIndex({ name: 'text', link: 'text', code: 'text' });

    if (subsriptionOfferCount === 0) {
      await initStripeProduct();
      for (let offer of offers) {
        await subsriptionOffer.insertOne(offer);
      }
    }
  }
}
