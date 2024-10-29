"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeparrainSM = exports.CodeParrainSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const CodeParrain_1 = require("../../repository/CodeParrain");
class CodeParrainSM extends generic_sm_1.GenericSM {
}
exports.CodeParrainSM = CodeParrainSM;
exports.codeparrainSM = new CodeParrainSM((0, typeorm_1.getCustomRepository)(CodeParrain_1.CodeParrainRepository));
//# sourceMappingURL=CodeParrain.js.map