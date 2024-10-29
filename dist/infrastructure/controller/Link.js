"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Link_1 = require("../../service/applicatif/Link");
class LinkController extends generic_controller_1.GenericController {
}
exports.linkController = new LinkController(Link_1.linkSA);
//# sourceMappingURL=Link.js.map