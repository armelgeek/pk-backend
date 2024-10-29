"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notevalueSA = exports.NoteValueSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const NoteValue_1 = require("../../constraint/factory/NoteValue");
const NoteValue_2 = require("../metier/NoteValue");
class NoteValueSA extends generic_sa_1.GenericSA {
}
exports.NoteValueSA = NoteValueSA;
exports.notevalueSA = new NoteValueSA(NoteValue_2.notevalueSM, NoteValue_1.notevalueFactory, 'NoteValue');
//# sourceMappingURL=NoteValue.js.map