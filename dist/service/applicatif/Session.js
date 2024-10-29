"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSA = exports.SessionSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Session_1 = require("../../constraint/factory/Session");
const Session_2 = require("../metier/Session");
class SessionSA extends generic_sa_1.GenericSA {
}
exports.SessionSA = SessionSA;
exports.sessionSA = new SessionSA(Session_2.sessionSM, Session_1.sessionFactory, 'Session');
//# sourceMappingURL=Session.js.map