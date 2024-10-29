"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelSA = exports.LevelSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Level_1 = require("../../constraint/factory/Level");
const Level_2 = require("../metier/Level");
class LevelSA extends generic_sa_1.GenericSA {
}
exports.LevelSA = LevelSA;
exports.levelSA = new LevelSA(Level_2.levelSM, Level_1.levelFactory, 'Level');
//# sourceMappingURL=Level.js.map