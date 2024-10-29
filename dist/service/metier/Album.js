"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumSM = exports.AlbumSM = void 0;
const typeorm_1 = require("typeorm");
const generic_sm_1 = require("../../common/service/generic.sm");
const Album_1 = require("../../repository/Album");
class AlbumSM extends generic_sm_1.GenericSM {
}
exports.AlbumSM = AlbumSM;
exports.albumSM = new AlbumSM((0, typeorm_1.getCustomRepository)(Album_1.AlbumRepository));
//# sourceMappingURL=Album.js.map