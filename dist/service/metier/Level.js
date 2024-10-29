"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelSM = exports.LevelSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Level_1 = require("../../repository/Level");
class LevelSM extends generic_sm_1.GenericSM {
}
exports.LevelSM = LevelSM;
exports.levelSM = new LevelSM((0, typeorm_1.getCustomRepository)(Level_1.LevelRepository));
//# sourceMappingURL=Level.js.map