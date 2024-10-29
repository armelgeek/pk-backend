"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileController = void 0;
const generic_controller_1 = require("../../common/infrastructure/generic.controller");
const Profile_1 = require("../../service/applicatif/Profile");
class ProfileController extends generic_controller_1.GenericController {
    constructor() {
        super(...arguments);
        this.profileInfo = async (req, res, next) => {
            try {
                const { params, body } = req;
                console.log({ body });
                res.locals.data = await this.serviceSA.partialUpdate(params.id, body);
                next();
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.profileController = new ProfileController(Profile_1.profileSA);
//# sourceMappingURL=Profile.js.map