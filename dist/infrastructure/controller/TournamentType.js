"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tournamenttypeController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const TournamentType_1 = require("../../service/applicatif/TournamentType");
class TournamentTypeController extends generic_controller_1.GenericController {
}
exports.tournamenttypeController = new TournamentTypeController(TournamentType_1.tournamenttypeSA);
//# sourceMappingURL=TournamentType.js.map