"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Note_1 = require("../../service/applicatif/Note");
class NoteController extends generic_controller_1.GenericController {
}
exports.noteController = new NoteController(Note_1.noteSA);
//# sourceMappingURL=Note.js.map