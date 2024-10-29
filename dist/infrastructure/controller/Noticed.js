"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticedController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Noticed_1 = require("../../service/applicatif/Noticed");
class NoticedController extends generic_controller_1.GenericController {
}
exports.noticedController = new NoticedController(Noticed_1.noticedSA);
//# sourceMappingURL=Noticed.js.map