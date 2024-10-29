"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Level_1 = require("../../service/applicatif/Level");
class LevelController extends generic_controller_1.GenericController {
}
exports.levelController = new LevelController(Level_1.levelSA);
//# sourceMappingURL=Level.js.map