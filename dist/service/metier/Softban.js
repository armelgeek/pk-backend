"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softbanSM = exports.SoftbanSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Softban_1 = require("../../repository/Softban");
class SoftbanSM extends generic_sm_1.GenericSM {
}
exports.SoftbanSM = SoftbanSM;
exports.softbanSM = new SoftbanSM((0, typeorm_1.getCustomRepository)(Softban_1.SoftbanRepository));
//# sourceMappingURL=Softban.js.map