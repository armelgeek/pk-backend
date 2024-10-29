"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notevalueSM = exports.NoteValueSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const NoteValue_1 = require("../../repository/NoteValue");
class NoteValueSM extends generic_sm_1.GenericSM {
}
exports.NoteValueSM = NoteValueSM;
exports.notevalueSM = new NoteValueSM((0, typeorm_1.getCustomRepository)(NoteValue_1.NoteValueRepository));
//# sourceMappingURL=NoteValue.js.map