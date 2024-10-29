"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeparrainSA = exports.CodeParrainSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const CodeParrain_1 = require("../../constraint/factory/CodeParrain");
const CodeParrain_2 = require("../metier/CodeParrain");
class CodeParrainSA extends generic_sa_1.GenericSA {
    async getCodeparrainByCodeSA(code) {
        try {
            let data = await exports.codeparrainSA.findOneNotFail({ code });
            return data;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.CodeParrainSA = CodeParrainSA;
exports.codeparrainSA = new CodeParrainSA(CodeParrain_2.codeparrainSM, CodeParrain_1.codeparrainFactory, 'CodeParrain');
//# sourceMappingURL=CodeParrain.js.map