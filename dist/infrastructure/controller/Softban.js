"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softbanController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Softban_1 = require("../../service/applicatif/Softban");
class SoftbanController extends generic_controller_1.GenericController {
}
exports.softbanController = new SoftbanController(Softban_1.softbanSA);
//# sourceMappingURL=Softban.js.map