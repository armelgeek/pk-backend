"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumSA = exports.AlbumSA = void 0;
const generic_sa_1 = require("../../common/service/generic.sa");
const Album_1 = require("../../constraint/factory/Album");
const Album_2 = require("../metier/Album");
class AlbumSA extends generic_sa_1.GenericSA {
}
exports.AlbumSA = AlbumSA;
exports.albumSA = new AlbumSA(Album_2.albumSM, Album_1.albumFactory, 'Album');
//# sourceMappingURL=Album.js.map