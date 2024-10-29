"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurController = exports.UtilisateurController = void 0;
const generic_controller_1 = require("../../../common/infrastructure/generic.controller");
const http_status_1 = require("../../../data/constants/http-status");
const utilisateur_sa_1 = require("../../../service/applicatif/utilisateur/utilisateur.sa");
const firebase_cloud_messaging_1 = require("../../../service/middleware/firebase-cloud-messaging");
class UtilisateurController extends generic_controller_1.GenericController {
    constructor(serviceSA) {
        super(serviceSA);
        this.editUtilisateurBO = async (req, res, next) => {
            try {
                const { params, body } = req;
                console.log({ body });
                res.locals.data = await this.serviceSA.partialUpdate(params.id, body);
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.changeUtilisateurStatus = async (req, res, next) => {
            try {
                const { body: { id, actif }, } = req;
                await this.serviceSA.changeUtilisateurStatus(id, actif);
                res.locals.data = true;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.toActiveUtilisateur = async (req, res, next) => {
            try {
                const { body: { email, code }, } = req;
                console.log({ email, code });
                const user = await this.serviceSA.findOneNotFail({ email, code });
                console.log({ user });
                if (user) {
                    await this.serviceSA.partialUpdate(user === null || user === void 0 ? void 0 : user.id, { actif: true, code: "" });
                }
                res.locals.data = user ? true : false;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.getAll = async (req, res, next) => {
            var _a, _b;
            const { query: { page, rowPerPage, light, direction, sortField, relation, search, ...queries }, } = req;
            try {
                const data = await this.serviceSA.findAll({
                    search,
                    relation,
                    sortField,
                    direction,
                    queries,
                    light: JSON.parse(light || 'true'),
                    take: rowPerPage,
                    skip: (page - 1) * rowPerPage,
                });
                res.locals.data = {
                    ...data,
                    items: (_b = (_a = data === null || data === void 0 ? void 0 : data.items) === null || _a === void 0 ? void 0 : _a.map(({ password, ...item }) => item)) !== null && _b !== void 0 ? _b : [],
                };
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.getById = async (req, res, next) => {
            try {
                const { params: { id }, } = req;
                res.locals.data = await this.serviceSA.findById(id);
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.sendPush = async (req, res, next) => {
            try {
                const { body } = req;
                res.locals.data = await this.serviceSA.sendPush(body);
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.delete = async (req, res, next) => {
            const { params: { id }, } = req;
            console.log({ id });
            try {
                const response = await this.serviceSA.delete(id);
                res.locals.data = response;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.notifyUser = async (req, res, next) => {
            const { userIds, message, title } = req.body;
            let tokens = [];
            try {
                for (const userId of userIds) {
                    const devices = await this.deviceSA.findAll({ user: userId });
                    if (devices && devices.items.length) {
                        tokens.push(...devices.items.map(({ token }) => token));
                    }
                }
                if (tokens.length > 0) {
                    await (0, firebase_cloud_messaging_1.sendNotification)({
                        tokens: tokens,
                        title: `[PokerApply] - ${title}`,
                        body: message,
                    });
                }
                res.locals.data = true;
                res.locals.statusCode = http_status_1.HttpStatus.OK;
            }
            catch (error) {
                res.locals.data = 'error';
                res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                console.error('Error notifying users:', error);
            }
            next();
        };
        this.serviceSA = serviceSA;
    }
}
exports.UtilisateurController = UtilisateurController;
exports.utilisateurController = new UtilisateurController(utilisateur_sa_1.utilisateurSA);
//# sourceMappingURL=utilisateur.controller.js.map