"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const utilisateur_route_1 = require("./utilisateur/utilisateur.route");
const administrateur_1 = require("./administrateur");
const authentification_route_1 = require("./authentification/authentification.route");
const inscription_route_1 = require("./inscription/inscription.route");
const conditionnal_jwt_passport_1 = require("../../service/middleware/passport/conditionnal-jwt-passport");
const http_status_1 = require("../../data/constants/http-status");
const routes_1 = require("./routes");
const appRoutes = () => {
    const secured = (0, conditionnal_jwt_passport_1.conditionnalJwtPassport)(true);
    const router = (0, routes_1.routes)();
    router.get('/api-status', (req, res) => res.status(http_status_1.HttpStatus.OK).send('ok'));
    router.use('/users', utilisateur_route_1.utilisateurRouter);
    router.use('/authentification', authentification_route_1.authentificationRouter);
    router.use('/inscription', inscription_route_1.inscriptionRouter);
    router.use('/administrateur', administrateur_1.administrateurRouter);
    return router;
};
exports.appRouter = appRoutes();
//# sourceMappingURL=app.route.js.map