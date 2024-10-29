"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurSA = exports.UtilisateurSA = void 0;
const mongodb_1 = require("mongodb");
const bcrypt = require("bcryptjs");
const generic_sa_1 = require("../../../common/service/generic.sa");
const utilisateur_factory_1 = require("../../../constraint/factory/utilisateur/utilisateur.factory");
const http_status_1 = require("../../../data/constants/http-status");
const utilisateur_sm_1 = require("../../metier/utilisateur/utilisateur.sm");
const exception_handler_1 = require("../../middleware/exception-handler");
const firebase_cloud_messaging_1 = require("../../middleware/firebase-cloud-messaging");
const Device_1 = require("../Device");
const sortFieldMapper = {
    nomPrenom: 'nom',
};
class UtilisateurSA extends generic_sa_1.GenericSA {
    async editUtilisateur(dto) {
        try {
            return this.partialUpdate(dto.id, dto);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async partialUpdate(_id, partialEntity) {
        var _a;
        try {
            const utilisateurByPhone = await this.serviceSM.findOneNotFail({ phone: partialEntity.phone });
            if (partialEntity.phone && utilisateurByPhone && ((_a = utilisateurByPhone._id) === null || _a === void 0 ? void 0 : _a.toString()) !== (_id === null || _id === void 0 ? void 0 : _id.toString())) {
                throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Numéro téléphone existant');
            }
            const { email, id, password, ...withOutEmail } = partialEntity;
            const result = await this.serviceSM.partialUpdate(new mongodb_1.ObjectID(_id), withOutEmail);
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    updateSocketId(id, socketId) {
        return this.serviceSM.update(id, { socketId });
    }
    async changeUtilisateurStatus(utilisateurId, actif) {
        try {
            const result = await this.serviceSM.partialUpdate(utilisateurId, { actif });
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async resetPassword(utilisateurId, password) {
        try {
            const utilisateurDO = await this.serviceSM.partialUpdate(new mongodb_1.ObjectID(utilisateurId), { password: await bcrypt.hashSync(password, 10), actif: true });
            return this.factory.toResponseDto(utilisateurDO);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findAll(options) {
        var _a, _b;
        try {
            const { take, skip, direction, sortField, relation, search, queries } = options;
            const data = await this.serviceSM.findAll({
                relation,
                search,
                take,
                skip,
                where: queries,
                direction,
                sortField,
            }, this.name);
            const items = this.factory.toResponseDto(data[0].data);
            const totalCount = (_b = (_a = data[0]) === null || _a === void 0 ? void 0 : _a.metadata[0]) === null || _b === void 0 ? void 0 : _b.total;
            return {
                items: items === null || items === void 0 ? void 0 : items.map(({ password, ...res }) => res),
                totalCount,
                ...(!Number.isNaN(take) && !Number.isNaN(skip)
                    ? { hasNext: take * (skip / take + 1) < totalCount }
                    : {}),
            };
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findById(id, toDto = true) {
        try {
            const utilisateur = await this.serviceSM.findById(id);
            return toDto ? this.factory.toBODTO(utilisateur) : utilisateur;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async getCins(id) {
        try {
            const utilisateur = await this.serviceSM.findById(id);
            return this.factory.toCinResponseDTO(utilisateur);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async sendPush(pushDto) {
        try {
            const { usersIds, tous, titre, message } = pushDto;
            const { tokens, utilisateurs } = await this.getDeviceTokensFromUtilisateurIds(usersIds, tous);
            // const notifications = utilisateurs.map((utilisateur) => ({ titre, message, utilisateur }));
            if (tokens.length) {
                await (0, firebase_cloud_messaging_1.sendNotification)({ tokens, title: titre, body: message });
            }
            // await notificationSA.create(notifications);
            return true;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async getDeviceTokensFromUtilisateurIds(userIds, tous) {
        try {
            const data = await Device_1.deviceSA.findAll({ user: userIds[0] });
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            return { tokens: [], utilisateurs: [] };
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async getDateInscription(minDate, maxDate) {
        try {
            // const data = await this.serviceSM.getDateInscription(minDate, maxDate);
            // return data.map(({ createdAt }) => formatToShortFormat(createdAt));
            return "";
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async getSocketIdByUtilisateurId(_id) {
        try {
            const utilisateur = await this.serviceSM.findOneNotFail({ _id });
            return utilisateur === null || utilisateur === void 0 ? void 0 : utilisateur.socketId;
        }
        catch (error) {
            return Promise.resolve('');
        }
    }
    async getSocketIdByNotifToken(notifToken) {
        try {
            // const utilisateur = await this.serviceSM.getSocketIdByNotifToken(notifToken);
            // return utilisateur?.socketId;
            return "";
        }
        catch (error) {
            return Promise.resolve('');
        }
    }
    async getSocketIdByTransactionId(transactionId) {
        try {
            // const utilisateur = await this.serviceSM.getSocketIdByTransactionId(transactionId);
            // return utilisateur?.socketId;
            return;
        }
        catch (error) {
            return Promise.resolve('');
        }
    }
}
exports.UtilisateurSA = UtilisateurSA;
exports.utilisateurSA = new UtilisateurSA(utilisateur_sm_1.utilisateurSM, utilisateur_factory_1.utilisateurFactory, 'utilisateur');
//# sourceMappingURL=utilisateur.sa.js.map