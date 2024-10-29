"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const path = require("path");
const cron = require("node-cron");
const typeorm_1 = require("typeorm");
const configs_1 = require("./data/constants/configs");
const logger_1 = require("./common/logger");
const exception_handler_1 = require("./service/middleware/exception-handler");
const swagger_1 = require("./service/middleware/swagger");
const response_formatter_1 = require("./service/middleware/response-formatter");
const cloudinary_1 = require("./utils/cloudinary");
const firebase_cloud_messaging_1 = require("./service/middleware/firebase-cloud-messaging");
const fileupload = require('express-fileupload');
/**
 * Initialisation du serveur express
 */
class App {
    constructor() {
        this.app = express();
        this.init = async () => {
            try {
                await (0, firebase_cloud_messaging_1.initFirebaseSdk)();
                await (0, typeorm_1.createConnection)();
                await this.initMiddlewares();
                await this.initRoutes();
                this.initCron();
                return this.app.listen(configs_1.configs.port, () => logger_1.logger.info(`Listening on ${configs_1.configs.port}`));
            }
            catch (error) {
                return Promise.reject(error);
            }
        };
        this.initMiddlewares = async () => {
            this.app.use(express.urlencoded({ extended: true }));
            this.app.use(express.json());
            this.app.use(cors());
            this.app.use(fileupload({ useTempFiles: true }));
            // this.app.use(helmet());
            swagger_1.default.init(this.app);
            const { default: passport } = await Promise.resolve().then(() => require('./service/middleware/passport'));
            this.app.use(passport.initialize());
            this.app.post('/api/upload/:resource_type', async (req, res) => {
                var _a, _b;
                try {
                    // @ts-ignore
                    const file = (_b = (_a = req.files) === null || _a === void 0 ? void 0 : _a.file) === null || _b === void 0 ? void 0 : _b.tempFilePath;
                    const { resource_type } = req.params;
                    const resourceOptions = (resource_type === "video" || resource_type === "audio")
                        ? { resource_type }
                        : {};
                    const uploadResponse = await cloudinary_1.default.uploader.upload(file, {
                        upload_preset: 'profil',
                        ...resourceOptions,
                    });
                    res.json({ msg: 'yaya', url: uploadResponse === null || uploadResponse === void 0 ? void 0 : uploadResponse.secure_url });
                }
                catch (err) {
                    console.error(err);
                    res.status(500).json({ err });
                }
            });
        };
        this.initRoutes = async () => {
            const { appRouter } = await Promise.resolve().then(() => require('./infrastructure/route/app.route'));
            this.app.post('/api/test/notification', async (req, res) => {
                const message = await (0, firebase_cloud_messaging_1.sendNotification)({
                    tokens: [req.body.token],
                    title: 'title',
                    body: 'Push Notification for POC REACT NATIVE WEB',
                });
                res.json({ message });
            });
            this.app.use('/api', appRouter, response_formatter_1.responseFormatter);
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
            this.app.use(exception_handler_1.exceptionHandler);
        };
    }
    /**
     * Initialiser les CRONs
     */
    async initCron() {
        const cronSchedule = '0 12 * * *';
        const cronReminderDeleteAccount = '';
        cron.schedule(cronSchedule, async () => {
            const { usersubscriptionSA } = await Promise.resolve().then(() => require('./service/applicatif/UserSubscription'));
            const { subscriptionofferSA } = await Promise.resolve().then(() => require('./service/applicatif/SubscriptionOffer'));
            try {
                const subscriptions = await usersubscriptionSA.find();
                const renewSubscription = async (subscription) => {
                    const endDate = new Date(subscription.end);
                    const offer = await subscriptionofferSA.findById(subscription.subscriptionOfferId);
                    const newEndDate = endDate;
                    if (offer.type === 'year') {
                        newEndDate.setFullYear(endDate.getFullYear() + offer.duration);
                    }
                    else {
                        newEndDate.setMonth(endDate.getMonth() + offer.duration);
                    }
                    await usersubscriptionSA.update(subscription.id, {
                        ...subscription,
                        start: endDate.toISOString(),
                        end: newEndDate.toISOString(),
                    });
                };
                const cancelSubscription = async (subscription) => {
                    await usersubscriptionSA.delete(subscription.id);
                };
                const currentDate = new Date();
                subscriptions.forEach((subscription) => {
                    const endDate = new Date(subscription.end);
                    if (currentDate.getMonth() >= endDate.getMonth() &&
                        currentDate.getDate() >= endDate.getDate() &&
                        currentDate.getFullYear() >= endDate.getFullYear()) {
                        if (subscription.isAutoRenewed) {
                            renewSubscription(subscription);
                        }
                        else {
                            cancelSubscription(subscription);
                        }
                    }
                });
            }
            catch (e) {
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
exports.default = new App();
//# sourceMappingURL=app.js.map