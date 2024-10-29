"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionhistoryController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const CodeParrain_1 = require("../../service/applicatif/CodeParrain");
const SubscriptionHistory_1 = require("../../service/applicatif/SubscriptionHistory");
class SubscriptionHistoryController extends generic_controller_1.GenericController {
    async getSubscriptionHistoryByUser(req, res, next) {
        try {
            const { userId, pageId } = req.query;
            const data = await SubscriptionHistory_1.subscriptionhistorySA.getSubscriptionHistoryByUserSA(userId, pageId);
            const codeParrain = await CodeParrain_1.codeparrainSA.find();
            const finalResult = [];
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if (element.codeParrainId) {
                    const usedCodeParrain = codeParrain.find((code) => code.id.toString() === element.codeParrainId);
                    finalResult.push({ ...element, codeParrainId: usedCodeParrain });
                }
                else {
                    finalResult.push(element);
                }
            }
            res.locals.data = finalResult;
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.subscriptionhistoryController = new SubscriptionHistoryController(SubscriptionHistory_1.subscriptionhistorySA);
//# sourceMappingURL=SubscriptionHistory.js.map