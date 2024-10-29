"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharingnoteSM = exports.SharingNoteSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const SharingNote_1 = require("../../repository/SharingNote");
class SharingNoteSM extends generic_sm_1.GenericSM {
}
exports.SharingNoteSM = SharingNoteSM;
exports.sharingnoteSM = new SharingNoteSM((0, typeorm_1.getCustomRepository)(SharingNote_1.SharingNoteRepository));
//# sourceMappingURL=SharingNote.js.map