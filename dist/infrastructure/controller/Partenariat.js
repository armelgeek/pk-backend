"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partenariatController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Partenariat_1 = require("../../service/applicatif/Partenariat");
class PartenariatController extends generic_controller_1.GenericController {
}
exports.partenariatController = new PartenariatController(Partenariat_1.partenariatSA);
//# sourceMappingURL=Partenariat.js.map