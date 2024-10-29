"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitSeeds = void 0;
const bcrypt = require("bcryptjs");
const Utilisateur_1 = require("../repository/Utilisateur");
const Profile_1 = require("../repository/Profile");
const Langue_1 = require("../repository/Langue");
const Administrateur_1 = require("../repository/Administrateur");
const Page_1 = require("../repository/Page");
const ComplementaryInformation_1 = require("../repository/ComplementaryInformation");
const Link_1 = require("../repository/Link");
const Sponsor_1 = require("../repository/Sponsor");
const Partener_1 = require("../repository/Partener");
const Pseudo_1 = require("../repository/Pseudo");
const TournamentType_1 = require("../repository/TournamentType");
const GameType_1 = require("../repository/GameType");
const Level_1 = require("../repository/Level");
const stripe_1 = require("stripe");
const configs_1 = require("../data/constants/configs");
const SubscriptionOffer_1 = require("../repository/SubscriptionOffer");
const Strategy_1 = require("../repository/Strategy");
const Event_1 = require("../repository/Event");
const stripe = new stripe_1.default(configs_1.configs.stripeSK);
const sponsorsData = [
    {
        name: 'Poker Stars',
        logo: `http://213.136.89.152:4000/public/resource/images/picture.png`,
    },
    {
        name: 'PMU',
        logo: `http://213.136.89.152:4000/public/resource/images/pmu.png`,
    },
    {
        name: 'BNP Paribas',
        logo: `http://213.136.89.152:4000/public/resource/images/bnp.png`,
    },
    {
        name: 'Groupe PSA',
        logo: `http://213.136.89.152:4000/public/resource/images/psa.png`,
    },
    {
        name: 'Heineken',
        logo: `http://213.136.89.152:4000/public/resource/images/heineken.png`,
    },
];
const partnerData = [
    {
        name: 'Partner Stars',
        logo: `http://213.136.89.152:4000/public/resource/images/picture.png`,
    },
    {
        name: 'Partner PMU',
        logo: `http://213.136.89.152:4000/public/resource/images/pmu.png`,
    },
    {
        name: 'Partner BNP Paribas',
        logo: `http://213.136.89.152:4000/public/resource/images/bnp.png`,
    },
    {
        name: 'Partner Groupe PSA',
        logo: `http://213.136.89.152:4000/public/resource/images/psa.png`,
    },
    {
        name: 'Partner Heineken',
        logo: `http://213.136.89.152:4000/public/resource/images/heineken.png`,
    },
];
const strategy = [
    {
        name: 'GTO',
        description: 'GTO',
    },
    {
        name: 'Exploit',
        description: 'Exploit',
    },
    {
        name: 'Creatif',
        description: 'Creatif',
    },
    {
        name: 'Straigh for war',
        description: 'Straigh for war',
    },
    {
        name: 'Value oriented',
        description: 'Value oriented',
    },
    {
        name: 'ABC',
        description: 'ABC',
    },
    {
        name: 'Scared money',
        description: 'Scared money',
    },
    {
        name: 'Small ball',
        description: 'Small ball',
    },
];
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
const offers = [
    {
        name: 'Abonnement mensuel',
        description: '199.95 fr. par mois',
        price: 199.95,
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
        description: '99.95 fr. par mois',
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
        description: '1999,95 fr. par année avec 1 mois offert',
        price: 1999.95,
        remiseDescription: 'Remise de 23% (équivaut à 153.84 fr. / mois)',
        isActive: true,
        duration: 1,
        type: 'year',
        isPopular: true,
        pageType: 'casino',
        stripeProductId: '',
    },
    {
        name: 'Abonnement annuel',
        description: '995.95 fr. par année avec 1 mois offert',
        price: 999.95,
        remiseDescription: 'Remise de 23% (équivaut à 76.91 fr. / mois)',
        isActive: true,
        duration: 1,
        type: 'year',
        isPopular: true,
        pageType: 'club',
        stripeProductId: '',
    },
    {
        name: 'Abonnement 3 ans',
        description: '50% de rabais plus partenariat obligatoire',
        price: 5999.95,
        remiseDescription: '',
        isActive: true,
        duration: 3,
        type: 'year',
        isPopular: false,
        pageType: 'casino',
        stripeProductId: '',
    },
    {
        name: 'Abonnement 3 ans',
        description: '50% de rabais plus partenariat obligatoire',
        price: 2999.85,
        remiseDescription: '',
        isActive: true,
        duration: 3,
        type: 'year',
        isPopular: false,
        pageType: 'club',
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
            currency: configs_1.configs.stripeCURRENCY,
            recurring: {
                interval: offer.type === 'month' ? 'month' : 'year',
                interval_count: offer.duration,
            },
        });
        offers[i] = { ...offer, stripeProductId: price.id };
    }
};
class InitSeeds {
    // eslint-disable-next-line class-methods-use-this
    async run(_factory, connection) {
        const user = connection.getCustomRepository(Utilisateur_1.UtilisateurRepository);
        const profile = connection.getCustomRepository(Profile_1.ProfileRepository);
        const langue = connection.getCustomRepository(Langue_1.LangueRepository);
        const administrateur = connection.getCustomRepository(Administrateur_1.AdministrateurRepository);
        const page = connection.getCustomRepository(Page_1.PageRepository);
        const complementaryInformation = connection.getCustomRepository(ComplementaryInformation_1.ComplementaryInformationRepository);
        const strategyRepository = connection.getCustomRepository(Strategy_1.StrategyRepository);
        const link = connection.getCustomRepository(Link_1.LinkRepository);
        const sponsor = connection.getCustomRepository(Sponsor_1.SponsorRepository);
        const partener = connection.getCustomRepository(Partener_1.PartenerRepository);
        const pseudo = connection.getCustomRepository(Pseudo_1.PseudoRepository);
        const level = connection.getCustomRepository(Level_1.LevelRepository);
        const game = connection.getCustomRepository(GameType_1.GameTypeRepository);
        const tournament = connection.getCustomRepository(TournamentType_1.TournamentTypeRepository);
        const subsriptionOffer = connection.getCustomRepository(SubscriptionOffer_1.SubscriptionOfferRepository);
        const event = connection.getCustomRepository(Event_1.EventRepository);
        const users = await user.count();
        const subsriptionOfferCount = await subsriptionOffer.count();
        const levelCount = await level.count();
        const sponsorCount = await sponsor.count();
        const strategyCount = await strategyRepository.count();
        const partenerCount = await partener.count();
        if (partenerCount < 2) {
            await partener.save(partnerData);
        }
        if (sponsorCount < 2) {
            await sponsor.save(sponsorsData);
        }
        if (strategyCount < 2) {
            await strategyRepository.save(strategy);
        }
        const admin = await user.findOne({ role: 4 });
        if (!admin) {
            await user.insert({
                password: await bcrypt.hashSync('AdminPockerApp#123', 10),
                nom: 'PokerApps',
                prenom: 'Admin',
                email: 'admin@pokerapps.com',
                ville: '',
                adresse: '',
                imageUrl: '',
                role: 4,
                actif: true,
            });
        }
        const client = await user.findOne({ email: 'thanhly26@gmail.com' });
        if (!client) {
            await user.insert({
                password: await bcrypt.hashSync('thanhly26', 10),
                nom: 'Thanhly',
                prenom: 'Test',
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
                        email: 'pockerapps@gmail.com',
                        ville: '',
                        adresse: '',
                        imageUrl: '',
                        role: 1,
                        actif: true,
                        createdAt: new Date(),
                    },
                    {
                        password: await bcrypt.hashSync('test123456', 10),
                        nom: 'Andry',
                        prenom: 'Fetraniaina',
                        email: 'andri.fetraniaina@gmail.com',
                        ville: '',
                        adresse: '',
                        imageUrl: '',
                        role: 1,
                        actif: true,
                        createdAt: new Date(),
                    },
                    {
                        password: await bcrypt.hashSync('azerty123', 10),
                        nom: 'Rakotoirintsoa',
                        prenom: 'Tsanta',
                        email: 'tsantarakotoirintsoa@gmail.com',
                        ville: '',
                        adresse: '',
                        imageUrl: '',
                        role: 1,
                        actif: true,
                        createdAt: new Date(),
                    },
                ];
                await Promise.all(data.map(async (item) => {
                    const { email, nom = '', prenom = '', imageUrl = '' } = item;
                    const info = await complementaryInformation.insertOne({
                        email,
                    });
                    const profileItem = await profile.insertOne({
                        info: info === null || info === void 0 ? void 0 : info.insertedId,
                        photo: imageUrl,
                        type: 'VIP',
                        email,
                        nom,
                        prenom,
                        imageUrls: [],
                    });
                    return await user.insertOne({
                        ...item,
                        actif: true,
                        profileId: profileItem === null || profileItem === void 0 ? void 0 : profileItem.insertedId,
                    });
                }));
            }
            catch (error) {
                console.log('error ====================================');
                console.log(error);
                console.log('====================================');
            }
        }
        await user.createCollectionIndex({
            nom: 'text',
            prenom: 'text',
            email: 'text',
            adresse: 'text',
        });
        await administrateur.createCollectionIndex({
            nom: 'text',
            prenom: 'text',
            email: 'text',
            adresseAdmin: 'text',
            telAdmin: 'text',
        });
        await page.createCollectionIndex({
            name: 'text',
            country: 'text',
            adress: 'text',
            email: 'text',
            description: 'text',
        });
        await complementaryInformation.createCollectionIndex({
            nationality: 'text',
            langues: 'text',
            email: 'text',
            job: 'text',
            headonmob: 'text',
            nb_titre: 'text',
            rang_time_money: 'text',
            period: 'text',
        });
        await link.createCollectionIndex({
            name: 'text',
            link: 'text',
            description: 'text',
            profile: 'text',
        });
        await sponsor.createCollectionIndex({ nom: 'text', description: 'text' });
        await partener.createCollectionIndex({ name: 'text', description: 'text' });
        await pseudo.createCollectionIndex({ name: 'text', link: 'text', code: 'text' });
        await event.createCollectionIndex({ name: 'text', description: 'text' });
        await profile.createCollectionIndex({ location: '2dsphere' });
        await event.createCollectionIndex({ location: '2dsphere' });
        await page.createCollectionIndex({ location: '2dsphere' });
        if (subsriptionOfferCount === 0) {
            await initStripeProduct();
            for (let offer of offers) {
                await subsriptionOffer.insertOne(offer);
            }
        }
    }
}
exports.InitSeeds = InitSeeds;
//# sourceMappingURL=index.js.map