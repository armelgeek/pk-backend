"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationSA = exports.PublicationSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Publication_1 = require("../../constraint/factory/Publication");
const Publication_2 = require("../metier/Publication");
class PublicationSA extends generic_sa_1.GenericSA {
}
exports.PublicationSA = PublicationSA;
exports.publicationSA = new PublicationSA(Publication_2.publicationSM, Publication_1.publicationFactory, 'Publication');
//# sourceMappingURL=Publication.js.map