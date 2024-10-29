"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Publication_1 = require("../../service/applicatif/Publication");
class PublicationController extends generic_controller_1.GenericController {
}
exports.publicationController = new PublicationController(Publication_1.publicationSA, "Publication");
//# sourceMappingURL=Publication.js.map