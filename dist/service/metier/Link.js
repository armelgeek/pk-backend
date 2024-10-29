"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkSM = exports.LinkSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Link_1 = require("../../repository/Link");
class LinkSM extends generic_sm_1.GenericSM {
}
exports.LinkSM = LinkSM;
exports.linkSM = new LinkSM((0, typeorm_1.getCustomRepository)(Link_1.LinkRepository));
//# sourceMappingURL=Link.js.map