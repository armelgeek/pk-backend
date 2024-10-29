"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ws = void 0;
const socket_io_1 = require("socket.io");
const logger_1 = require("../../common/logger");
const configs_1 = require("../../data/constants/configs");
class WebSocket {
    constructor() {
        this.setOnConnectionHandler = () => {
            logger_1.logger.info('WS initialized');
            WebSocket.io.on('connection', async (socket) => {
                const { token } = socket.handshake.query;
                try {
                    const { verifyToken } = await Promise.resolve().then(() => require('./passport/passport-local'));
                    const { utilisateurSA } = await Promise.resolve().then(() => require('../applicatif/utilisateur/utilisateur.sa'));
                    const { id: utilisateurId } = await verifyToken(`${token}`, configs_1.configs.jwtSecret);
                    await utilisateurSA.updateSocketId(utilisateurId, socket.id);
                }
                catch (error) {
                    socket.disconnect();
                }
                logger_1.logger.info(`New user: ${socket.id}`);
            });
        };
    }
    init(server) {
        WebSocket.io.listen(server, { cors: { origin: '*' } });
        this.setOnConnectionHandler();
    }
    get socket() {
        return WebSocket.io;
    }
}
WebSocket.io = new socket_io_1.Server();
exports.ws = new WebSocket();
//# sourceMappingURL=socket.js.map