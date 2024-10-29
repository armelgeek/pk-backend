"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Session_1 = require("../../service/applicatif/Session");
class SessionController extends generic_controller_1.GenericController {
}
exports.sessionController = new SessionController(Session_1.sessionSA);
//# sourceMappingURL=Session.js.map