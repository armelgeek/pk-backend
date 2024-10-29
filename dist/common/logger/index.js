"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const winston = require("winston");
const { combine, timestamp, printf } = winston.format;
const { NODE_ENV: env } = process.env;
const isLocal = env === 'local';
const customFormat = printf(({ timestamp: t, level, message }) => `${t} - [${level.toUpperCase()}] : ${message}`);
exports.logger = (0, winston_1.createLogger)({
    level: isLocal ? 'debug' : 'info',
    transports: [
        new winston.transports.Console({ level: isLocal ? 'debug' : 'info' }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
    format: combine(timestamp(), customFormat),
});
//# sourceMappingURL=index.js.map