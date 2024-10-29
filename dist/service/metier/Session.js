"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSM = exports.SessionSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Session_1 = require("../../repository/Session");
class SessionSM extends generic_sm_1.GenericSM {
}
exports.SessionSM = SessionSM;
exports.sessionSM = new SessionSM((0, typeorm_1.getCustomRepository)(Session_1.SessionRepository));
//# sourceMappingURL=Session.js.map