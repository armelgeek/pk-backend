"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticedSA = exports.NoticedSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Noticed_1 = require("../../constraint/factory/Noticed");
const Noticed_2 = require("../metier/Noticed");
class NoticedSA extends generic_sa_1.GenericSA {
}
exports.NoticedSA = NoticedSA;
exports.noticedSA = new NoticedSA(Noticed_2.noticedSM, Noticed_1.noticedFactory, 'Noticed');
//# sourceMappingURL=Noticed.js.map