"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticedSM = exports.NoticedSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Noticed_1 = require("../../repository/Noticed");
class NoticedSM extends generic_sm_1.GenericSM {
}
exports.NoticedSM = NoticedSM;
exports.noticedSM = new NoticedSM((0, typeorm_1.getCustomRepository)(Noticed_1.NoticedRepository));
//# sourceMappingURL=Noticed.js.map