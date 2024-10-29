"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.participateController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Participate_1 = require("../../service/applicatif/Participate");
class ParticipateController extends generic_controller_1.GenericController {
}
exports.participateController = new ParticipateController(Participate_1.participateSA);
//# sourceMappingURL=Participate.js.map