"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentificationController = exports.AuthentificationController = void 0;
const configs_1 = require("../../../data/constants/configs");
const http_status_1 = require("../../../data/constants/http-status");
const authentification_sa_1 = require("../../../service/applicatif/authentification/authentification.sa");
const passport_1 = require("../../../service/middleware/passport");
const passport_local_1 = require("../../../service/middleware/passport/passport-local");
const passport_strategies_1 = require("../../../service/middleware/passport/passport-strategies");
class AuthentificationController {
    constructor() {
        this.serviceSA = authentification_sa_1.authentificationSA;
        this.signout = async (req, res, next) => {
            try {
                const { body: { deviceToken }, } = req;
                res.locals.data = true;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.signinAdim = (req, res, next) => {
            const { body: { token }, } = req;
            passport_1.default.authenticate(passport_strategies_1.passportStrategies.local, { session: false }, async (err, user) => {
                if (err && !user || user.blacklist === true) {
                    res.locals.statusCode = http_status_1.HttpStatus.BAD_REQUEST;
                    next(err);
                }
                else {
                    try {
                        const { accessToken, refreshToken } = await (0, passport_local_1.generateTokens)(user);
                        res.locals.data = {
                            accessToken,
                            refreshToken,
                            deviceToken: token,
                            utilisateur: { ...user },
                        };
                        next();
                    }
                    catch (error) {
                        next(error);
                    }
                }
            })(req, res, next);
        };
        this.signin = (req, res, next) => {
            const { body: { token }, } = req;
            passport_1.default.authenticate(passport_strategies_1.passportStrategies.local, { session: false }, async (err, user) => {
                if (err && !user || user.blacklist === true) {
                    res.locals.statusCode = http_status_1.HttpStatus.BAD_REQUEST;
                    next(err);
                }
                else {
                    try {
                        const { accessToken, refreshToken } = await (0, passport_local_1.generateTokens)(user);
                        res.locals.data = {
                            accessToken,
                            refreshToken,
                            deviceToken: token,
                            utilisateur: { ...user },
                        };
                        next();
                    }
                    catch (error) {
                        next(error);
                    }
                }
            })(req, res, next);
        };
        this.getAccessTokenFromRefreshToken = async (req, res, next) => {
            try {
                const { params: { refreshToken: providedRefreshToken }, } = req;
                console.log({ providedRefreshToken });
                const user = await (0, passport_local_1.verifyToken)(providedRefreshToken, configs_1.configs.jwtSecret);
                console.log({ user });
                const { accessToken, refreshToken } = await (0, passport_local_1.generateTokens)(user);
                res.locals.data = {
                    accessToken,
                    refreshToken,
                    utilisateur: { ...user },
                };
                next();
            }
            catch (error) {
                console.log({ error });
                next(error);
            }
        };
        this.passwordResetRequest = async (req, res, next) => {
            try {
                const { body: { email, phone }, } = req;
                const success = await this.serviceSA.passwordResetRequest({ email, phone }, `http://${req.headers.host}`);
                res.locals.data = success;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.twoFactorAuthentication = async (req, res, next) => {
            try {
                const { body: { email, phone }, } = req;
                const success = await this.serviceSA.twoFactorAuthentication({ email, phone }, `http://${req.headers.host}`);
                res.locals.data = success;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.verifyResetToken = async (req, res, next) => {
            try {
                const { params: { resetToken }, } = req;
                const { dateInscription, dateDerniereConnexion, ...verified } = await (0, passport_local_1.verifyToken)(resetToken, configs_1.configs.passwordResetSecret);
                res.locals.data = verified;
                next();
            }
            catch (error) {
                res.locals.statusCode = http_status_1.HttpStatus.BAD_REQUEST;
                next({ message: 'Lien de réinitialisation invalide' });
            }
        };
        this.resetPassword = async (req, res, next) => {
            try {
                const { body: { id, password }, } = req;
                const data = await this.serviceSA.resetPassword(id, password);
                res.locals.data = data;
                next();
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.AuthentificationController = AuthentificationController;
exports.authentificationController = new AuthentificationController();
//# sourceMappingURL=authentification.controller.js.map