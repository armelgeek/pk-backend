"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const expressJSDocSwagger = require('express-jsdoc-swagger');
class SwaggerMiddleware {
    constructor() {
        this.options = {
            info: {
                version: '1.0.0',
                title: 'FullStack API',
            },
            description: 'API FullStack',
            filesPattern: [
                './infrastructure/route/**/*.ts',
                './infrastructure/route/**/*.js',
                './infrastructure/route/*.ts',
                './infrastructure/route/*.js',
                './data/dto/**/*.ts',
                './data/dto/**/*.js',
            ],
            security: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                },
            },
            baseDir: path.resolve(__dirname, '../..'),
            swaggerUIPath: '/api-docs',
            apiDocsPath: '/v1/api-docs',
        };
    }
    init(app) {
        expressJSDocSwagger(app)(this.options);
    }
}
exports.default = new SwaggerMiddleware();
//# sourceMappingURL=swagger.js.map