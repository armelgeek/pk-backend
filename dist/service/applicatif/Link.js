"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkSA = exports.LinkSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Link_1 = require("../../constraint/factory/Link");
const Link_2 = require("../metier/Link");
class LinkSA extends generic_sa_1.GenericSA {
}
exports.LinkSA = LinkSA;
exports.linkSA = new LinkSA(Link_2.linkSM, Link_1.linkFactory, 'Link');
//# sourceMappingURL=Link.js.map