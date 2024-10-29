"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionHandler = exports.Exception = void 0;
const exception_message_1 = require("../../data/constants/exception-message");
const http_status_1 = require("../../data/constants/http-status");
class Exception extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.Exception = Exception;
const getErrorByCode = (err) => {
    const { message, code, query } = err;
    try {
        const [first = '', second = ''] = (query.match(/".*?"/)[0] || '')
            .replace('"', '')
            .replace('"', '')
            .split('_');
        switch (code) {
            case exception_message_1.exceptionCode.DELETE_UPDATE_FK_ERROR:
                return `Impossible de supprimé ${exception_message_1.exceptionMessage[first.toUpperCase()]} qui est déjà rattaché à ${exception_message_1.exceptionMessage[second.toUpperCase()]}`;
            default:
                return message;
        }
    }
    catch (error) {
        return message;
    }
};
const exceptionHandler = (err, req, res, next) => {
    if (err) {
        const { statusCode } = err;
        res
            .status(statusCode || http_status_1.HttpStatus.INTERNAL_SERVER_ERROR)
            .send({ message: getErrorByCode(err), isError: true, data: null });
    }
    else {
        next();
    }
};
exports.exceptionHandler = exceptionHandler;
//# sourceMappingURL=exception-handler.js.map