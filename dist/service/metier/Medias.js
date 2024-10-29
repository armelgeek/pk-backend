"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediasSM = exports.MediasSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Medias_1 = require("../../repository/Medias");
class MediasSM extends generic_sm_1.GenericSM {
}
exports.MediasSM = MediasSM;
exports.mediasSM = new MediasSM((0, typeorm_1.getCustomRepository)(Medias_1.MediasRepository));
//# sourceMappingURL=Medias.js.map