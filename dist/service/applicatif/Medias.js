"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediasSA = exports.MediasSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Medias_1 = require("../../constraint/factory/Medias");
const Medias_2 = require("../metier/Medias");
class MediasSA extends generic_sa_1.GenericSA {
}
exports.MediasSA = MediasSA;
exports.mediasSA = new MediasSA(Medias_2.mediasSM, Medias_1.mediasFactory, 'Medias');
//# sourceMappingURL=Medias.js.map