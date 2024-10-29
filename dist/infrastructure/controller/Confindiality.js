"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confindialityController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Confindiality_1 = require("../../service/applicatif/Confindiality");
class ConfindialityController extends generic_controller_1.GenericController {
}
exports.confindialityController = new ConfindialityController(Confindiality_1.confindialitySA);
//# sourceMappingURL=Confindiality.js.map