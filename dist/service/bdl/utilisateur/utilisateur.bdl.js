"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurBDL = exports.UtilisateurBDL = void 0;
/* eslint-disable class-methods-use-this */
const axios_1 = require("../../../common/service/axios");
const content_type_1 = require("../../../data/constants/content-type");
const urls_1 = require("../../../data/constants/urls");
const andoom_authentification_bdl_1 = require("../andoom-authentification/andoom-authentification.bdl");
class UtilisateurBDL {
    async create(dto) {
        try {
            const accessToken = await andoom_authentification_bdl_1.andoomAuthentificationBDL.getToken();
            return (0, axios_1.usePost)(urls_1.utilisateur.baseApi)({
                customHeader: { 'Content-Type': content_type_1.contentType.json, access_token: accessToken },
                body: dto,
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async update(partialDTO) {
        try {
            const accessToken = await andoom_authentification_bdl_1.andoomAuthentificationBDL.getToken();
            return (0, axios_1.usePut)(urls_1.utilisateur.baseApi)({
                customHeader: { 'Content-Type': content_type_1.contentType.json, access_token: accessToken },
                body: partialDTO,
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async getAll(query) {
        try {
            const accessToken = await andoom_authentification_bdl_1.andoomAuthentificationBDL.getToken();
            return (0, axios_1.useGet)(urls_1.utilisateur.baseApi)({
                customHeader: { 'Content-Type': content_type_1.contentType.json, access_token: accessToken },
                body: query,
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.UtilisateurBDL = UtilisateurBDL;
exports.utilisateurBDL = new UtilisateurBDL();
//# sourceMappingURL=utilisateur.bdl.js.map