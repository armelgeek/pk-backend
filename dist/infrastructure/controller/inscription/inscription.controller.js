"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inscriptionController = exports.InscriptionController = void 0;
const http_status_1 = require("../../../data/constants/http-status");
const inscription_sa_1 = require("../../../service/applicatif/inscription/inscription.sa");
class InscriptionController {
    constructor() {
        this.serviceSA = inscription_sa_1.inscriptionSA;
        this.signup = async (req, res, next) => {
            try {
                const { body } = req;
                console.log({ body });
                const utilisateur = await this.serviceSA.create(body);
                res.locals.data = utilisateur;
                res.locals.statusCode = http_status_1.HttpStatus.CREATED;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.socialAuth = async (req, res, next) => {
            try {
                const { body } = req;
                console.log({ body });
                const data = await this.serviceSA.socialAuth(body);
                res.locals.data = data;
                res.locals.statusCode = http_status_1.HttpStatus.CREATED;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.reSendCode = async (req, res, next) => {
            try {
                const { body } = req;
                const utilisateur = await this.serviceSA.reSendCode(body);
                console.log({ utilisateur, body });
                res.locals.data = utilisateur;
                res.locals.statusCode = http_status_1.HttpStatus.CREATED;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.validationCode = async (req, res, next) => {
            try {
                const { body } = req;
                const utilisateur = await this.serviceSA.validationCode(body);
                console.log({ utilisateur, body });
                res.locals.data = utilisateur;
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.InscriptionController = InscriptionController;
exports.inscriptionController = new InscriptionController();
//# sourceMappingURL=inscription.controller.js.map