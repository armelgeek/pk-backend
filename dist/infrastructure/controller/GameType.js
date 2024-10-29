"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gametypeController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const GameType_1 = require("../../service/applicatif/GameType");
class GameTypeController extends generic_controller_1.GenericController {
}
exports.gametypeController = new GameTypeController(GameType_1.gametypeSA);
//# sourceMappingURL=GameType.js.map