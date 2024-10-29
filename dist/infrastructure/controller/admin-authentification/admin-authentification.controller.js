"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthentificationController = void 0;
const http_status_1 = require("../../../data/constants/http-status");
const passport_1 = require("../../../service/middleware/passport");
const passport_strategies_1 = require("../../../service/middleware/passport/passport-strategies");
class AdminAuthentificationController {
    constructor() {
        this.signIn = async (req, res, next) => {
            passport_1.default.authenticate(passport_strategies_1.passportStrategies.admin, { session: false }, (err, data) => {
                if (err && !data) {
                    res.locals.statusCode = http_status_1.HttpStatus.BAD_REQUEST;
                    next(err);
                }
                else {
                    res.locals.data = data;
                    next();
                }
            })(req, res, next);
        };
    }
}
exports.adminAuthentificationController = new AdminAuthentificationController();
//# sourceMappingURL=admin-authentification.controller.js.map