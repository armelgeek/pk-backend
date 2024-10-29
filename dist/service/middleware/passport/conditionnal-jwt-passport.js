"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conditionnalJwtPassport = void 0;
const _1 = require(".");
const http_status_1 = require("../../../data/constants/http-status");
const exception_handler_1 = require("../exception-handler");
const passport_strategies_1 = require("./passport-strategies");
const data_1 = require("../../../data");
const errorMessage = {
    TokenExpiredError: 'Token expiré',
    Role: "Contacter l'administrateur",
};
const conditionnalJwtPassport = (isSecured, name) => (req, res, next) => {
    var _a;
    const operations = ((_a = data_1.dataTDO[name]) === null || _a === void 0 ? void 0 : _a.operations) || [];
    const { baseUrl, method } = req;
    const operation = operations === null || operations === void 0 ? void 0 : operations.find((item) => { var _a; return baseUrl === `/api/${item === null || item === void 0 ? void 0 : item.route}` && (method === null || method === void 0 ? void 0 : method.toLowerCase()) === ((_a = item === null || item === void 0 ? void 0 : item.method) === null || _a === void 0 ? void 0 : _a.toLowerCase()); });
    const role = Number((operation === null || operation === void 0 ? void 0 : operation.role) || 0);
    role > 0
        ? _1.default.authenticate(passport_strategies_1.passportStrategies.jwt, { session: false }, (err, user, info) => {
            if (err) {
                res.locals.statusCode = http_status_1.HttpStatus.UNAUTHORIZED;
                return next(err);
            }
            if (!user && info) {
                const { message, name } = info;
                return next(new exception_handler_1.Exception(http_status_1.HttpStatus.UNAUTHORIZED, errorMessage[name] || message));
            }
            const userRole = Number(user === null || user === void 0 ? void 0 : user.role);
            if (role <= userRole) {
                console.log({ user, role: user === null || user === void 0 ? void 0 : user.role });
                req.user = user;
                return next();
            }
            return next(new exception_handler_1.Exception(http_status_1.HttpStatus.UNAUTHORIZED, errorMessage.Role));
        })(req, res, next)
        : next();
};
exports.conditionnalJwtPassport = conditionnalJwtPassport;
//# sourceMappingURL=conditionnal-jwt-passport.js.map