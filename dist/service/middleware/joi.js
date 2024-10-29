"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidator = void 0;
const http_status_1 = require("../../data/constants/http-status");
const exception_handler_1 = require("./exception-handler");
const mapper = {
    email: 'Adresse email',
};
const schemaValidator = (schema) => (req, res, next) => {
    if (!schema) {
        next();
    }
    else {
        const { body } = req;
        const { error, value } = schema.validate(body, {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true,
        });
        req.body = value;
        if (error) {
            console.log({ error });
            const formattedError = error.details
                .map(({ path }) => `${path.map((p) => `${mapper[p] || p} invalide`).join(', ')}`)
                .join(', ');
            next(new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, formattedError));
        }
        else {
            next();
        }
    }
};
exports.schemaValidator = schemaValidator;
//# sourceMappingURL=joi.js.map