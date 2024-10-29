"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pseudoController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Pseudo_1 = require("../../service/applicatif/Pseudo");
class PseudoController extends generic_controller_1.GenericController {
}
exports.pseudoController = new PseudoController(Pseudo_1.pseudoSA);
//# sourceMappingURL=Pseudo.js.map