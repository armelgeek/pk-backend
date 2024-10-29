"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteSA = exports.NoteSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Note_1 = require("../../constraint/factory/Note");
const Note_2 = require("../metier/Note");
class NoteSA extends generic_sa_1.GenericSA {
}
exports.NoteSA = NoteSA;
exports.noteSA = new NoteSA(Note_2.noteSM, Note_1.noteFactory, 'Note');
//# sourceMappingURL=Note.js.map