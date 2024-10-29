"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenerController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Partener_1 = require("../../service/applicatif/Partener");
class PartenerController extends generic_controller_1.GenericController {
}
exports.partenerController = new PartenerController(Partener_1.partenerSA);
//# sourceMappingURL=Partener.js.map