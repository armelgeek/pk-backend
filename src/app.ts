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
import {sendDeletionNotice} from "./service/cron/reminder-delete-account";

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
      //     'c1ckbu41TDiMPCkZLlDhZg:APA91bFf8-RHrqee76aI7Kg3iOJy2H21jesHN8WEAP1bQrjQG8qh-MGhp2OHMi6JOMkJJaBy6qzKBLNtNL7Q99NBtylhe6NLjxEfh8fU1d__FMkhl145N7fHfLH5S3WKe8Cq63xgrXk6',
      //   ],
      //   title: 'title',
      //   body: 'Push Notification for POC REACT NATIVE WEB',
      // });
      // console.log('sendNotification ====================================');
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

    this.app.post('/api/upload/:resource_type', async (req, res) => {
      try {
        // @ts-ignore
        const file = req.files?.file?.tempFilePath;

        const { resource_type } = req.params;

        const resourceOptions = (resource_type === "video" || resource_type === "audio")
            ? { resource_type }
            : {};

        const uploadResponse = await cloudinary.uploader.upload(file, {
          upload_preset: 'profil',
          ...resourceOptions,
        });

        res.json({ msg: 'yaya', url: uploadResponse?.secure_url });
      } catch (err) {
        console.error(err);
        res.status(500).json({ err });
      }
    });
  };
  private initRoutes = async () => {
    const { appRouter } = await import('./infrastructure/route/app.route');

    this.app.post('/api/test/notification', async (req, res) => {
      const message = await sendNotification({
        tokens: [req.body.token],
        title: 'title',
        body: 'Push Notification for POC REACT NATIVE WEB',
      });

      res.json({ message });
    });

    this.app.use('/api', appRouter, responseFormatter);

    this.app.get('/', async (_, res) => {
      res.json({ message: 'It works ok ok ok !!!' });
    });

    this.app.use(express.static(path.resolve(__dirname, '../public/')));
    // this.app.use(express.static(path.resolve(__dirname, '../bo/dist')));
    // this.app.use(express.static(path.resolve(__dirname, '/bo/')));
    this.app.use('/public', express.static(path.resolve(__dirname, '../public')));

    this.app.get('/admin', (req, res) => {
      res.sendFile(path.join(__dirname, '/bo/index.html'));
    });

    // this.app.get('/public', express.static(path.resolve(__dirname, '../public')));

    this.app.get('*', express.static(path.resolve(__dirname, '../public')));

    // Doit être le dernier à être appelé
    this.app.use(exceptionHandler);
  };

  /**
   * Initialiser les CRONs
   */
  private async initCron() {
    const cronSchedule = '0 12 * * *';
    const cronReminderDeleteAccount = '';
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
    // Planifier la tâche pour s'exécuter toutes les 6 heures
    //cron.schedule('0 */6 * * *', task);
    // Planifier la tâche pour s'exécuter toutes les 1 minute
   //cron.schedule('*/1 * * * *', async () => {
   //   await sendDeletionNotice();
    //});
  }

}

export default new App();
