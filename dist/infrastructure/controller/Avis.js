"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avisController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Avis_1 = require("../../service/applicatif/Avis");
class AvisController extends generic_controller_1.GenericController {
}
exports.avisController = new AvisController(Avis_1.avisSA);
//# sourceMappingURL=Avis.js.map