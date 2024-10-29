"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockingController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Blocking_1 = require("../../service/applicatif/Blocking");
class BlockingController extends generic_controller_1.GenericController {
}
exports.blockingController = new BlockingController(Blocking_1.blockingSA);
//# sourceMappingURL=Blocking.js.map