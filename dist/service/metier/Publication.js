"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicationSM = exports.PublicationSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Publication_1 = require("../../repository/Publication");
class PublicationSM extends generic_sm_1.GenericSM {
}
exports.PublicationSM = PublicationSM;
exports.publicationSM = new PublicationSM((0, typeorm_1.getCustomRepository)(Publication_1.PublicationRepository));
//# sourceMappingURL=Publication.js.map