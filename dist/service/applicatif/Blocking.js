"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockingSA = exports.BlockingSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Blocking_1 = require("../../constraint/factory/Blocking");
const Blocking_2 = require("../metier/Blocking");
class BlockingSA extends generic_sa_1.GenericSA {
}
exports.BlockingSA = BlockingSA;
exports.blockingSA = new BlockingSA(Blocking_2.blockingSM, Blocking_1.blockingFactory, 'Blocking');
//# sourceMappingURL=Blocking.js.map