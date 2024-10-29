"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.andoomAuthentificationBDL = void 0;
const axios_1 = require("../../../common/service/axios");
const configs_1 = require("../../../data/constants/configs");
const urls_1 = require("../../../data/constants/urls");
class OdooAuthentificationBDL {
    // eslint-disable-next-line class-methods-use-this
    signIn({ login, password }) {
        return (0, axios_1.useGet)(urls_1.authentification.baseApi)({
            params: { login, password, db: configs_1.configs.database },
        });
    }
    async getToken() {
        try {
            const { andoomUsername: login, andoomPassword: password } = configs_1.configs;
            const { access_token: accessToken } = await this.signIn({ login, password });
            return accessToken;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.andoomAuthentificationBDL = new OdooAuthentificationBDL();
//# sourceMappingURL=andoom-authentification.bdl.js.map