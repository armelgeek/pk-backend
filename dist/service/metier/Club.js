"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clubSM = exports.ClubSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Club_1 = require("../../repository/Club");
class ClubSM extends generic_sm_1.GenericSM {
}
exports.ClubSM = ClubSM;
exports.clubSM = new ClubSM((0, typeorm_1.getCustomRepository)(Club_1.ClubRepository));
//# sourceMappingURL=Club.js.map