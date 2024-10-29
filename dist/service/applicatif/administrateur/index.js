"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.administrateurSA = exports.AdministrateurSA = void 0;
const generic_sa_1 = require("../../../common/service/generic.sa");
const administrateur_1 = require("../../../constraint/factory/administrateur");
const administrateur_2 = require("../../metier/administrateur");
class AdministrateurSA extends generic_sa_1.GenericSA {
    async create(dto) {
        try {
            const entity = this.factory.toDo(dto);
            const result = await this.serviceSM.create(entity);
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
}
exports.AdministrateurSA = AdministrateurSA;
exports.administrateurSA = new AdministrateurSA(administrateur_2.administrateurSM, administrateur_1.administrateurFactory, 'Administrateur');
//# sourceMappingURL=index.js.map