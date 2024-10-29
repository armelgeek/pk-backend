"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitorsController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Visitors_1 = require("../../service/applicatif/Visitors");
class VisitorsController extends generic_controller_1.GenericController {
}
exports.visitorsController = new VisitorsController(Visitors_1.visitorsSA);
//# sourceMappingURL=Visitors.js.map