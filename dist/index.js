"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const logger_1 = require("./common/logger");
const socket_1 = require("./service/middleware/socket");
const bootstrapAsync = async () => {
    try {
        const server = await app_1.default.init();
        // Initialisation socket à supprimer si non utilisé
        socket_1.ws.init(server);
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
bootstrapAsync();
//# sourceMappingURL=index.js.map