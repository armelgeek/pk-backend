"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clubSA = exports.ClubSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Club_1 = require("../../constraint/factory/Club");
const Club_2 = require("../metier/Club");
class ClubSA extends generic_sa_1.GenericSA {
}
exports.ClubSA = ClubSA;
exports.clubSA = new ClubSA(Club_2.clubSM, Club_1.clubFactory, 'Club');
//# sourceMappingURL=Club.js.map