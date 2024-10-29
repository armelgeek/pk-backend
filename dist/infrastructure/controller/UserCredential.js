"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usercredentialController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const UserCredential_1 = require("../../service/applicatif/UserCredential");
class UserCredentialController extends generic_controller_1.GenericController {
    async getUserCredsByUserId(req, res, next) {
        try {
            const data = await UserCredential_1.usercredentialSA.findOneNotFail({ userId: req.params.userId });
            res.locals.data = data;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.usercredentialController = new UserCredentialController(UserCredential_1.usercredentialSA);
//# sourceMappingURL=UserCredential.js.map