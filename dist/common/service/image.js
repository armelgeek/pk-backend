"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageToBase64 = void 0;
const fs = require("fs");
const configs_1 = require("../../data/constants/configs");
const http_status_1 = require("../../data/constants/http-status");
const exception_handler_1 = require("../../service/middleware/exception-handler");
const imageToBase64 = (path, custom = false) => {
    try {
        const { uploadDir } = configs_1.configs;
        const fullPath = custom ? path : `${uploadDir}/${path}`;
        if (fs.existsSync(fullPath)) {
            return fs.readFileSync(fullPath, { encoding: 'base64' });
        }
        throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, 'Fichier image non trouvable');
    }
    catch (error) {
        return null;
    }
};
exports.imageToBase64 = imageToBase64;
//# sourceMappingURL=image.js.map