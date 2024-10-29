"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericImageUploadRouter = void 0;
const express_1 = require("express");
const joi_1 = require("../../service/middleware/joi");
// import { imageUpload } from '../../service/middleware/multer';
const conditionnal_jwt_passport_1 = require("../../service/middleware/passport/conditionnal-jwt-passport");
const response_formatter_1 = require("../../service/middleware/response-formatter");
const generic_route_1 = require("./generic.route");
const genericImageUploadRoutes = (option) => {
    const { controller, ...restOption } = option;
    const { isSecured, schema } = restOption;
    const router = (0, express_1.Router)();
    router.post('/', 
    // imageUpload.single('image'),
    (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured), (0, joi_1.schemaValidator)(schema), controller.create, response_formatter_1.responseFormatter);
    router.put('/', 
    // imageUpload.single('image'),
    (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(isSecured), (0, joi_1.schemaValidator)(schema), controller.update, response_formatter_1.responseFormatter);
    return (0, generic_route_1.genericRoute)({ ...restOption, controller, router });
};
const genericImageUploadRouter = (option) => genericImageUploadRoutes(option);
exports.genericImageUploadRouter = genericImageUploadRouter;
//# sourceMappingURL=generic-image-upload.route.js.map