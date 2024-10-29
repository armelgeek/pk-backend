"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gametypeSM = exports.GameTypeSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const GameType_1 = require("../../repository/GameType");
class GameTypeSM extends generic_sm_1.GenericSM {
}
exports.GameTypeSM = GameTypeSM;
exports.gametypeSM = new GameTypeSM((0, typeorm_1.getCustomRepository)(GameType_1.GameTypeRepository));
//# sourceMappingURL=GameType.js.map