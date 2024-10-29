"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gametypeSA = exports.GameTypeSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const GameType_1 = require("../../constraint/factory/GameType");
const GameType_2 = require("../metier/GameType");
class GameTypeSA extends generic_sa_1.GenericSA {
}
exports.GameTypeSA = GameTypeSA;
exports.gametypeSA = new GameTypeSA(GameType_2.gametypeSM, GameType_1.gametypeFactory, 'GameType');
//# sourceMappingURL=GameType.js.map