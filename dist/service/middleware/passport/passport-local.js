"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtStrategy = exports.localStrategy = exports.generateTokens = exports.generateResetToken = exports.verifyToken = void 0;
const jwt = require("jsonwebtoken");
const passport_local_1 = require("passport-local");
const passport_jwt_1 = require("passport-jwt");
const configs_1 = require("../../../data/constants/configs");
const authentification_sa_1 = require("../../applicatif/authentification/authentification.sa");
const utilisateur_sm_1 = require("../../metier/utilisateur/utilisateur.sm");
const exception_handler_1 = require("../exception-handler");
const http_status_1 = require("../../../data/constants/http-status");
const verifyToken = (token, secret) => new Promise((resolve, reject) => {
    jwt.verify(token, secret, (error, readable) => {
        console.log({ error });
        if (!error && readable) {
            // const { iat, exp, ...rest } = readable;
            resolve(readable);
        }
        else {
            reject(error);
        }
    });
});
exports.verifyToken = verifyToken;
const generateResetToken = (user) => jwt.sign(user, configs_1.configs.passwordResetSecret, { expiresIn: configs_1.configs.passwordResetExpiration });
exports.generateResetToken = generateResetToken;
const generateTokens = async (user) => {
    const accessToken = jwt.sign(user, configs_1.configs.jwtSecret, { expiresIn: configs_1.configs.jwtExpiration });
    const refreshToken = jwt.sign(user, configs_1.configs.jwtSecret, {
        expiresIn: configs_1.configs.jwtRefreshTokenExpiration,
    });
    return { accessToken, refreshToken };
};
exports.generateTokens = generateTokens;
exports.localStrategy = new passport_local_1.Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, async (email, password, done) => {
    try {
        const user = await authentification_sa_1.authentificationSA.findByEmailUsers(email);
        if (user && user.actif === true) {
            const validPassword = authentification_sa_1.authentificationSA.validatePassword(password, user.password);
            const { password: pwd, ...withoutPassword } = user;
            console.log(`${withoutPassword === null || withoutPassword === void 0 ? void 0 : withoutPassword.profileId} ====> withoutPassword`);
            if (validPassword) {
                await utilisateur_sm_1.utilisateurSM.partialUpdate(withoutPassword._id, {
                    dateDerniereConnexion: new Date(),
                });
                done(null, withoutPassword);
            }
            else {
                done({ message: 'Mot de passe invalide' });
            }
        }
        else if (user) {
            done({ message: 'Utilisateur inactif' });
        }
        else {
            done({ message: 'Email non trouvé dans la base' });
        }
    }
    catch (error) {
        const { message = '' } = error || {};
        if (message.includes('matching')) {
            done({ message: 'Email non trouvé dans la base' });
        }
        else {
            done(error);
        }
    }
});
exports.jwtStrategy = new passport_jwt_1.Strategy({
    secretOrKey: configs_1.configs.jwtSecret,
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()]),
}, async (jwtPayload, done) => {
    try {
        if (jwtPayload.accessToken) {
            done(null, jwtPayload);
        }
        else if (jwtPayload._id) {
            const user = await authentification_sa_1.authentificationSA.findById(jwtPayload._id);
            if (user) {
                done(null, user);
            }
            else {
                done(new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Invalid token'));
            }
        }
    }
    catch (error) {
        done(error);
    }
});
//# sourceMappingURL=passport-local.js.map