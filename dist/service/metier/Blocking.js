"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockingSM = exports.BlockingSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Blocking_1 = require("../../repository/Blocking");
class BlockingSM extends generic_sm_1.GenericSM {
}
exports.BlockingSM = BlockingSM;
exports.blockingSM = new BlockingSM((0, typeorm_1.getCustomRepository)(Blocking_1.BlockingRepository));
//# sourceMappingURL=Blocking.js.map