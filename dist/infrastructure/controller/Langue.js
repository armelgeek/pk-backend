"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langueController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Langue_1 = require("../../service/applicatif/Langue");
class LangueController extends generic_controller_1.GenericController {
}
exports.langueController = new LangueController(Langue_1.langueSA);
//# sourceMappingURL=Langue.js.map