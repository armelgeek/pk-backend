"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.administrateurSM = exports.AdministrateurSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../../common/service/generic.sm");
const Administrateur_1 = require("../../../repository/Administrateur");
class AdministrateurSM extends generic_sm_1.GenericSM {
    count() {
        return this.repository.count();
    }
}
exports.AdministrateurSM = AdministrateurSM;
exports.administrateurSM = new AdministrateurSM((0, typeorm_1.getCustomRepository)(Administrateur_1.AdministrateurRepository));
//# sourceMappingURL=index.js.map