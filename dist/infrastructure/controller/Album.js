"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Album_1 = require("../../service/applicatif/Album");
class AlbumController extends generic_controller_1.GenericController {
}
exports.albumController = new AlbumController(Album_1.albumSA, "Album");
//# sourceMappingURL=Album.js.map