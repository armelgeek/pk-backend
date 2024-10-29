"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseFormatter = void 0;
const http_status_1 = require("../../data/constants/http-status");
const responseFormatter = (req, res) => {
    const { statusCode = http_status_1.HttpStatus.OK, data, message = '' } = res.locals;
    res
        .status(data !== undefined && statusCode === http_status_1.HttpStatus.BAD_REQUEST ? http_status_1.HttpStatus.OK : statusCode)
        .json({ message, data, isError: false });
};
exports.responseFormatter = responseFormatter;
//# sourceMappingURL=response-formatter.js.map