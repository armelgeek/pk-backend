"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notevalueController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const NoteValue_1 = require("../../service/applicatif/NoteValue");
class NoteValueController extends generic_controller_1.GenericController {
}
exports.notevalueController = new NoteValueController(NoteValue_1.notevalueSA);
//# sourceMappingURL=NoteValue.js.map