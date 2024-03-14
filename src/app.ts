import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import * as cron from 'node-cron';
import { createConnection } from 'typeorm';

import { configs } from './data/constants/configs';
import { logger } from './common/logger';
import { exceptionHandler } from './service/middleware/exception-handler';
import swaggerMiddleware from './service/middleware/swagger';
import { responseFormatter } from './service/middleware/response-formatter';
import cloudinary from './utils/cloudinary';
import { SubscriptionOfferDO } from './data/do/SubscriptionOffer';
import { UserSubscriptionDO } from './data/do/UserSubscription';
import { initFirebaseSdk, sendNotification } from './service/middleware/firebase-cloud-messaging';

const fileupload = require('express-fileupload');

/**
 * Initialisation du serveur express
 */
class App {
  private app = express();

  public init = async () => {
    try {
      await initFirebaseSdk();
      await createConnection();
      await this.initMiddlewares();
      await this.initRoutes();
      this.initCron();
      // const res = await sendNotification({
      //   tokens: [
      //     'cn4D4hSASuqi0alLYOU8-v:APA91bFLhY9LrAoQw5mQlIZiIOJ_cZR0RzaVzdC_TLTJqkBnL_h_W6YEHYUFdj54RQMF4cfTNcrHHZ-a8TGFnUIX73TmvCL5HskLK34xogGDKhqF8cZzGnXHHD7kcrwKX7QwkuM8Bg3O',
      //   ],
      //   title: 'title',
      //   body: 'Push Notification for POC REACT NATIVE WEB',
      // });
      // console.log('====================================');
      // console.log(res);
      // console.log('====================================');
      return this.app.listen(configs.port, () => logger.info(`Listening on ${configs.port}`));
    } catch (error) {
      return Promise.reject(error);
    }
  };

  private initMiddlewares = async () => {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(fileupload({ useTempFiles: true }));
    // this.app.use(helmet());
    swaggerMiddleware.init(this.app);

    const { default: passport } = await import('./service/middleware/passport');
    this.app.use(passport.initialize());

    this.app.post('/api/upload', async (req, res) => {
      try {
        // @ts-ignore
        const file = req.files?.file?.tempFilePath;
        console.log(file);
        const uploadResponse = await cloudinary.uploader.upload(file, {
          upload_preset: 'profil',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya', url: uploadResponse?.secure_url });
      } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
      }
    });
  };
  private initRoutes = async () => {
    const { appRouter } = await import('./infrastructure/route/app.route');
    this.app.use('/api', appRouter, responseFormatter);
    // this.app.get('/', (_, res) => {
    //   res.json({ message: 'It works ok ok ok !!!' });
    // });
    this.app.use(express.static(path.resolve(__dirname, '../public/')));
    this.app.use(express.static(path.resolve(__dirname, '../bo/dist')));
    this.app.use(express.static(path.resolve(__dirname, '../bo/')));
    this.app.use('/public', express.static(path.resolve(__dirname, '../public')));

    this.app.get('/admin', (req, res) => {
      res.sendFile(path.join(__dirname, '/bo/index.html'));
    });

    // this.app.get('/bo', (req, res) => {
    //   res.sendFile(path.join(__dirname, '../', '/bo/index.html'));
    // });

    // Doit être le dernier à être appelé
    this.app.use(exceptionHandler);
  };

  /**
   * Initialiser les CRONs
   */
  private async initCron() {
    const cronSchedule = '0 12 * * *';
    cron.schedule(cronSchedule, async () => {
      const { usersubscriptionSA } = await import('./service/applicatif/UserSubscription');
      const { subscriptionofferSA } = await import('./service/applicatif/SubscriptionOffer');
      try {
        const subscriptions = await usersubscriptionSA.find();

        const renewSubscription = async (subscription: UserSubscriptionDO) => {
          const endDate = new Date(subscription.end);
          const offer: SubscriptionOfferDO = await subscriptionofferSA.findById(
            subscription.subscriptionOfferId,
          );
          const newEndDate = endDate;
          if (offer.type === 'year') {
            newEndDate.setFullYear(endDate.getFullYear() + offer.duration);
          } else {
            newEndDate.setMonth(endDate.getMonth() + offer.duration);
          }
          await usersubscriptionSA.update((subscription as any).id, {
            ...subscription,
            start: endDate.toISOString(),
            end: newEndDate.toISOString(),
          });
        };

        const cancelSubscription = async (subscription: UserSubscriptionDO) => {
          await usersubscriptionSA.delete((subscription as any).id);
        };

        const currentDate = new Date();

        subscriptions.forEach((subscription: UserSubscriptionDO) => {
          const endDate = new Date(subscription.end);

          if (
            currentDate.getMonth() >= endDate.getMonth() &&
            currentDate.getDate() >= endDate.getDate() &&
            currentDate.getFullYear() >= endDate.getFullYear()
          ) {
            if (subscription.isAutoRenewed) {
              renewSubscription(subscription);
            } else {
              cancelSubscription(subscription);
            }
          }
        });
      } catch (e) {
        throw e;
      }
    });
  }
}

export default new App();
