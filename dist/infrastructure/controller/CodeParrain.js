"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeparrainController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const CodeParrain_1 = require("../../service/applicatif/CodeParrain");
class CodeParrainController extends generic_controller_1.GenericController {
    async getCodeparrainByCode(req, res, next) {
        try {
            const { code } = req.params;
            const data = await CodeParrain_1.codeparrainSA.getCodeparrainByCodeSA(code);
            res.locals.data = data;
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.codeparrainController = new CodeParrainController(CodeParrain_1.codeparrainSA);
//# sourceMappingURL=CodeParrain.js.map