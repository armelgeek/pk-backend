"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersubscriptionController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const UserSubscription_1 = require("../../service/applicatif/UserSubscription");
const UserCredential_1 = require("../../service/applicatif/UserCredential");
class UserSubscriptionController extends generic_controller_1.GenericController {
    async getSubscriptionByUser(req, res, next) {
        try {
            const { userId, pageId } = req.query;
            const data = await UserSubscription_1.usersubscriptionSA.getSubscriptionByUserSA(userId, pageId);
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async paymentConfig(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.paymentConfigSA();
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async createCustomer(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.createCustomerSA(req.body);
            await UserCredential_1.usercredentialSA.create({
                customerId: data.customer.id,
                userId: req.body.userId,
            });
            res.locals.data = {
                userId: req.body.userId,
                customerId: data.customer.id,
            };
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async createPaymentIntent(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.createPaymentIntentSA(req.body);
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async webhook(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.webhookSA();
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async createPaymentSubscription(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.createPaymentSubscriptionSA(req.body);
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async invoicePreview(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.invoicePreviewSA(req.query.subscriptionId, req.body);
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async cancelSubscription(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.cancelSubscriptionSA(req.body);
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async updateSubscription(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.updateSubscriptionSA(req.body);
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async subscriptions(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.subscriptionsSA(req.query.customerId);
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async subscriptionWebhook(req, res, next) {
        try {
            const data = await UserSubscription_1.usersubscriptionSA.subscriptionWebhookSA();
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.usersubscriptionController = new UserSubscriptionController(UserSubscription_1.usersubscriptionSA);
//# sourceMappingURL=UserSubscription.js.map