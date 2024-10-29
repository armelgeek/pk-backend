"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharingNoteSA = exports.SharingNoteSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const SharingNote_1 = require("../../constraint/factory/SharingNote");
const SharingNote_2 = require("../metier/SharingNote");
class SharingNoteSA extends generic_sa_1.GenericSA {
}
exports.SharingNoteSA = SharingNoteSA;
exports.sharingNoteSA = new SharingNoteSA(SharingNote_2.sharingnoteSM, SharingNote_1.sharingnoteFactory, 'SharingNote');
//# sourceMappingURL=SharingNote.js.map