"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericRoute = void 0;
const express_1 = require("express");
const joi_1 = require("../../service/middleware/joi");
const conditionnal_jwt_passport_1 = require("../../service/middleware/passport/conditionnal-jwt-passport");
const response_formatter_1 = require("../../service/middleware/response-formatter");
const genericRoute = (option) => {
    const { controller, isSecured = false, router = (0, express_1.Router)(), schema = null, name } = option;
    // @ts-ignore
    const task = () => {
        controller.sendDeletionNotice();
    };
    router
        .route('/:id')
        .get((0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.findById, response_formatter_1.responseFormatter)
        .delete((0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.delete, response_formatter_1.responseFormatter);
    router
        .route('/')
        .get((0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.findAll, response_formatter_1.responseFormatter)
        .post((0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), (0, joi_1.schemaValidator)(schema), controller.create, response_formatter_1.responseFormatter)
        .put((0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), (0, joi_1.schemaValidator)(schema), controller.update, response_formatter_1.responseFormatter);
    router.get('/count/elements', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.count, response_formatter_1.responseFormatter);
    router.get('/find/one', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.findOne, response_formatter_1.responseFormatter);
    router.get('/find/by-ids', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.findByIds, response_formatter_1.responseFormatter);
    router.put('/partialUpdate/:id', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.partialUpdate, response_formatter_1.responseFormatter);
    router.put('/pushUpdate/:id', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.pushUpdate, response_formatter_1.responseFormatter);
    router.put('/update-many', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.updateMany, response_formatter_1.responseFormatter);
    router.get('/sum/:field', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.sum, response_formatter_1.responseFormatter);
    router.post('/send-verification-mail', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.sendMail, response_formatter_1.responseFormatter);
    router.get('/me/:profileId/has-followed/:id', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.hasFollowed, response_formatter_1.responseFormatter);
    router.get('/me/:profileId/is-friend/:id', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.isFriend, response_formatter_1.responseFormatter);
    router.get('/to/find', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.findRegistration, response_formatter_1.responseFormatter);
    router.post('/add-member', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.addMemberToPage, response_formatter_1.responseFormatter);
    router.get('/to/get', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.getSharedNoteFor, response_formatter_1.responseFormatter);
    router.get('/to/getById', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.findSharedNoteById, response_formatter_1.responseFormatter);
    router.get('/to/check', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.checkHasNotedSameUser, response_formatter_1.responseFormatter);
    router.get('/to/compare', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.comparateNoteByUser, response_formatter_1.responseFormatter);
    // router.post('/push', conditionnalJwtPassport(isSecured, name), controller.notifyUser, responseFormatter);
    router.post('/deactivate-request', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.deactivateRequest, response_formatter_1.responseFormatter);
    router.post('/deactivate-confirm', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.deactivateConfirmation, response_formatter_1.responseFormatter);
    router.post('/re-activate', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.reactiveAccount, response_formatter_1.responseFormatter);
    router.post('/delete-account-request', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.deleteAccountRequest, response_formatter_1.responseFormatter);
    router.post('/delete-account-confirm', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.deleteAccountConfirm, response_formatter_1.responseFormatter);
    router.post('/request-reactivate', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.requestReactivateAccount, response_formatter_1.responseFormatter);
    router.post('/confirm-reactivate', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.confirmReactiveAccount, response_formatter_1.responseFormatter);
    router.post('/delete-notif', (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured, name), controller.sendDeletionNotice, response_formatter_1.responseFormatter);
    return router;
};
exports.genericRoute = genericRoute;
//# sourceMappingURL=generic.route.js.map