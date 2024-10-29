"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteSM = exports.NoteSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Note_1 = require("../../repository/Note");
class NoteSM extends generic_sm_1.GenericSM {
}
exports.NoteSM = NoteSM;
exports.noteSM = new NoteSM((0, typeorm_1.getCustomRepository)(Note_1.NoteRepository));
//# sourceMappingURL=Note.js.map