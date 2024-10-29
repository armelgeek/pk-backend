"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharingnoteController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const SharingNote_1 = require("../../service/applicatif/SharingNote");
class sharingNoteController extends generic_controller_1.GenericController {
}
exports.sharingnoteController = new sharingNoteController(SharingNote_1.sharingNoteSA);
//# sourceMappingURL=SharingNote.js.map