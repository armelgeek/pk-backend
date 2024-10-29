"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
require('dotenv-flow').config();
const { UPLOAD_DIR: uploadDir, PORT: port, JWT_SECRET: jwtSecret, JWT_EXPIRATION: jwtExpiration, JWT_REFRESH_TOKEN_EXPIRATION: jwtRefreshTokenExpiration, PWD_RESET_EXPIRATION: passwordResetExpiration, PWD_RESET_SECRET: passwordResetSecret, TYPEORM_DATABASE: database, TYPEORM_API_URL: andoomApiUrl, TYPEORM_DATABASE: andoomDatabase, TYPEORM_USERNAME: andoomUsername, TYPEORM_PASSWORD: andoomPassword, EMAIL_USER: emailUser, EMAIL_PASSWORD: emailPassword, STRIPE_SK: stripeSK, STRIPE_PK: stripePK, STRIPE_CURRENCY: stripeCURRENCY, } = process.env;
exports.configs = {
    emailUser,
    emailPassword,
    uploadDir,
    andoomPassword,
    andoomUsername,
    andoomDatabase,
    andoomApiUrl,
    port,
    jwtSecret,
    jwtExpiration,
    jwtRefreshTokenExpiration,
    passwordResetExpiration,
    passwordResetSecret,
    database,
    stripeSK,
    stripePK,
    stripeCURRENCY,
};
//# sourceMappingURL=configs.js.map