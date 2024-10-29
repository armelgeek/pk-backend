"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericController = void 0;
const mongodb_1 = require("mongodb");
const crypto_js_1 = require("crypto-js");
const http_status_1 = require("../../data/constants/http-status");
const nodemailer_1 = require("../../service/middleware/nodemailer");
const firebase_cloud_messaging_1 = require("../../service/middleware/firebase-cloud-messaging");
const Utilisateur_1 = require("../../service/applicatif/Utilisateur");
const Device_1 = require("../../service/applicatif/Device");
const Notification_1 = require("../../service/applicatif/Notification");
const Page_1 = require("../../service/applicatif/Page");
const Profile_1 = require("../../service/applicatif/Profile");
const Publication_1 = require("../../service/applicatif/Publication");
const authentification_sa_1 = require("../../service/applicatif/authentification/authentification.sa");
const Note_1 = require("../../service/applicatif/Note");
const moment = require("moment");
const inscription_sa_1 = require("../../service/applicatif/inscription/inscription.sa");
function encrypt(plainText, secret) {
    const key = crypto_js_1.enc.Utf8.parse(secret);
    const iv = crypto_js_1.lib.WordArray.create(key.words.slice(0, 4));
    const cipherText = crypto_js_1.AES.encrypt(plainText, key, {
        iv,
        mode: crypto_js_1.mode.CBC,
        padding: crypto_js_1.pad.Pkcs7,
    });
    return cipherText.toString();
}
function decrypt(cipherText, secret, iv) {
    let iv1 = crypto_js_1.enc.Base64.parse(iv);
    const key = crypto_js_1.enc.Utf8.parse(secret);
    const cipherBytes = crypto_js_1.enc.Base64.parse(cipherText);
    const decrypted = crypto_js_1.AES.decrypt({ ciphertext: cipherBytes }, key, {
        iv: iv1,
        mode: crypto_js_1.mode.CBC,
        padding: crypto_js_1.pad.Pkcs7,
    });
    return decrypted.toString(crypto_js_1.enc.Utf8);
}
function generateHashedLink(baseURL, pageId, secretKey, expirationMinutes) {
    const expirationDate = new Date(Date.now() + expirationMinutes * 60000).toISOString();
    const dataToHash = `${pageId}:${expirationDate}`;
    const hash = encrypt(dataToHash, secretKey);
    const encodedHash = encodeURIComponent(hash);
    const linkHash = `${baseURL}?id=${pageId}&exp=${expirationDate}&hash=${encodedHash}`;
    return linkHash.replace(/\s+/g, '');
}
class GenericController {
    constructor(serviceSA, name) {
        this.lastActivityAtUpdate = async (publicationId) => {
            const publication = await this.publicationSA.partialUpdate(publicationId, { lastActivityAt: new Date() });
            console.log('================= publication ===================');
            console.log(publication);
            console.log('====================================');
            return publication;
        };
        /**
         * WS managing the creation of an entity
         */
        this.create = async (req, res, next) => {
            const { body } = req;
            try {
                console.log('name ====>', this.name);
                const created = await this.serviceSA.create(body);
                if (this.name === "Comment" && body.publicationId) {
                    await this.lastActivityAtUpdate(body.publicationId);
                }
                res.locals.data = created;
                res.locals.statusCode = http_status_1.HttpStatus.CREATED;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS managing the update of an entity
         */
        this.update = async (req, res, next) => {
            const { body, params: { id }, } = req;
            try {
                const updated = await this.serviceSA.update(id, body);
                if (this.name === "Comment" && body.publicationId) {
                    await this.lastActivityAtUpdate(body.publicationId);
                }
                res.locals.data = updated;
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS managing the update many of an entity
         */
        this.updateMany = async (req, res, next) => {
            const { body: { data, query }, } = req;
            try {
                const updated = await this.serviceSA.updateMany(query, data);
                res.locals.data = updated;
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.pushUpdate = async (req, res, next) => {
            const { body, params: { id }, } = req;
            try {
                const updated = await this.serviceSA.pushUpdate(id, body);
                if (this.name === "Comment" && body.publicationId) {
                    await this.lastActivityAtUpdate(body.publicationId);
                }
                res.locals.data = updated;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.partialUpdate = async (req, res, next) => {
            const { body, params: { id }, } = req;
            try {
                const updated = await this.serviceSA.partialUpdate(id, body);
                if (this.name === "Comment" && body.publicationId) {
                    await this.lastActivityAtUpdate(body.publicationId);
                }
                res.locals.data = updated;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS managing the deletion of an entity
         */
        this.delete = async (req, res, next) => {
            const { params: { id }, } = req;
            try {
                const response = await this.serviceSA.delete(id);
                res.locals.data = response;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS managing the recovery of an entity by its id
         */
        this.findById = async (req, res, next) => {
            const { params: { id }, } = req;
            try {
                const found = await this.serviceSA.findById(id);
                res.locals.data = found;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS managing the recovery of an entity by its Attributes
         */
        this.findByAttributes = async (req, res, next) => {
            const { params } = req;
            try {
                const found = await this.serviceSA.findOneNotFail(params);
                res.locals.data = found;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS managing the recovery of an entity by its ids
         */
        this.findByIds = async (req, res, next) => {
            const { query: { ids }, } = req;
            try {
                const found = await this.serviceSA.findByIds(ids);
                res.locals.data = found;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS returning list of all entitie
         */
        this.findAll = async (req, res, next) => {
            const { query: { page = 1, rowPerPage = 10, light, direction, sortField, order, match, search, lookup, geoNear, exists, no_exists, search_or, attributes_or, child_or, ...queries }, } = req;
            try {
                const dtos = await this.serviceSA.findAll({
                    search,
                    match,
                    sortField,
                    order: direction,
                    queries,
                    light: JSON.parse(light || 'true'),
                    take: rowPerPage * 1,
                    skip: (page - 1) * rowPerPage,
                    lookup,
                    geoNear,
                    exists,
                    no_exists,
                    search_or,
                    attributes_or,
                    child_or,
                });
                res.locals.data = dtos;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS returning the document meeting the specified criteria
         */
        this.findOne = async (req, res, next) => {
            const { query: { page, rowPerPage, light, direction, sortField, match, search, ...queries }, } = req;
            try {
                const found = await this.serviceSA.findOneWithRelation({
                    search,
                    match,
                    queries,
                });
                if (Array.isArray(found) && found.length > 0) {
                    res.locals.data = found[0];
                }
                else {
                    res.locals.data = false;
                }
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS managing the count elements of an entity
         */
        this.count = async (req, res, next) => {
            const { query } = req;
            try {
                const params = await this.serviceSA.count(query);
                res.locals.data = params;
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        /**
         * WS returning Sum
         */
        this.sum = async (req, res, next) => {
            const { params: { field }, query: { page = 1, rowPerPage = 10, light, direction, sortField, order, match, search, ...queries }, } = req;
            try {
                const dtos = await this.serviceSA.sum({
                    search,
                    match,
                    sortField,
                    order: direction,
                    queries,
                    light: JSON.parse(light || 'true'),
                    take: rowPerPage * 1,
                    skip: (page - 1) * rowPerPage,
                    field,
                });
                res.locals.data = dtos;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.sendMail = async (req, res, next) => {
            try {
                const { nom, prenom, email, status, comment, profileId } = req.body;
                let tokens = [];
                const currentUser = await this.profileSA.findById(profileId);
                if (currentUser.id) {
                    const devices = await this.deviceSA.findAll({ user: currentUser.id });
                    if (devices === null || devices === void 0 ? void 0 : devices.items.length) {
                        tokens = devices.items.map(({ token }) => token);
                    }
                }
                if (status === 1) {
                    await (0, nodemailer_1.sendMail)({
                        to: email,
                        subject: "[PokerApply] - Validation de l'identité",
                        body: `
          Bonjour ${nom} ${prenom},
          <br /> <br />
          <span>
            <p>Votre demande de validation d'identité a été acceptée.</p>
            <p>Merci de faire partie de notre communauté.</p>
          </span>
          <br /> <br /> <br />
          Cordialement,
          <br /> <br />
          L'équipe de PokerApply.
        `,
                    });
                    if ((tokens === null || tokens === void 0 ? void 0 : tokens.length) > 0) {
                        (0, firebase_cloud_messaging_1.sendNotification)({
                            tokens,
                            title: "[PokerApply] - Validation de l'identité",
                            body: "Votre demande de validation d'identité a été acceptée. Merci de faire partie de notre communauté.",
                        });
                        await Notification_1.notificationSA.create({
                            user: currentUser.id,
                            title: "[PokerApply] - Refus de validation d'identité",
                            message: "Votre demande de validation d'identité a été acceptée. Merci de faire partie de notre communauté.",
                        });
                    }
                }
                else if (status === 2) {
                    await (0, nodemailer_1.sendMail)({
                        to: email,
                        subject: "[PokerApply] - Refus de validation d'identité",
                        body: `
          Bonjour ${nom} ${prenom},
          <br /> <br />
          <span>
            <p>Nous regrettons de vous informer que votre demande de validation d'identité a été refusée.</p>
            <p>Raison : ${comment}</p>
          </span>
          <br /> <br /> <br />
          Cordialement,
          <br /> <br />
          L'équipe PokerApply.
        `,
                    });
                    if ((tokens === null || tokens === void 0 ? void 0 : tokens.length) > 0) {
                        await (0, firebase_cloud_messaging_1.sendNotification)({
                            tokens,
                            title: "[PokerApply] - Refus de validation d'identité",
                            body: "Nous regrettons de vous informer que votre demande de validation d'identité a été refusée. Raison : ${comment}",
                        });
                        await Notification_1.notificationSA.create({
                            user: currentUser.id,
                            title: "[PokerApply] - Refus de validation d'identité",
                            message: `Nous regrettons de vous informer que votre demande de validation d'identité a été refusée. Raison : ${comment}`,
                        });
                    }
                }
                res.locals.data = true;
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            catch (error) {
                console.log('error', error);
                next(error);
            }
        };
        this.hasFollowed = async (req, res, next) => {
            const { params } = req;
            /**
             * const andConditions = [
             *   { age: { $gte: 18 } },
             *   { status: 'active' }
             * ];
             *
             * const orConditions = [
             *   { role: 'admin' },
             *   { role: 'user' }
             * ];
             */
            try {
                const data = await this.serviceSA.findByAttributes([{ follow: new mongodb_1.ObjectID(params.profileId) }, { follower: new mongodb_1.ObjectID(params.id) }], []);
                res.locals.data = data;
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            catch (error) {
                console.log('error', error);
                next(error);
            }
        };
        this.isFriend = async (req, res, next) => {
            const { params } = req;
            try {
                if (params.id != undefined) {
                    res.locals.data = await this.serviceSA.findByAttributes([{ follow: new mongodb_1.ObjectID(params.id) }, { follower: new mongodb_1.ObjectID(params.profileId) }], []);
                }
                else {
                    res.locals.data = await this.serviceSA.findByAttributes([{ follower: new mongodb_1.ObjectID(params.profileId) }], []);
                }
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            catch (error) {
                next(error);
            }
        };
        this.addMemberToPage = async (req, res, next) => {
            try {
                const { email, pageId, } = req.body;
                const currentPage = await this.pageSA.findById(pageId);
                // 7 jours
                const link = generateHashedLink('http://localhost:3000/app/casino-request-verification', pageId, 'pokerapply', 10080);
                await (0, nodemailer_1.sendMail)({
                    to: email,
                    subject: `[PokerApply] - Invitation a devenir membre du Casino '${currentPage.name}' `,
                    body: `
          <span>
            <p>Bonjour,</p>
            <p>Nous vous invitons à rejoindre le Casino '${currentPage.name}'. Pour accepter l'invitation, veuillez cliquer sur le lien ci-dessous :</p>
            <p><a href="${link}">${link}</a></p>
          </span>
        `,
                });
                res.locals.data = true;
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            catch (error) {
                console.log('error', error);
                next(error);
            }
        };
        this.findRegistration = async (req, res, next) => {
            const params = req.query;
            let data;
            if (params.profileId && params.publicationId == undefined && params.eventId == undefined) {
                data = await this.serviceSA.findByAttributes([{ profileId: params.profileId }], []);
            }
            else if (params.profileId && params.publicationId == undefined && params.eventId) {
                data = await this.serviceSA.findByAttributes([{ profileId: params.profileId, eventId: new mongodb_1.ObjectID(params.eventId) }], []);
            }
            else {
                data = await this.serviceSA.findByAttributes([{ profileId: params.profileId, publicationId: new mongodb_1.ObjectID(params.publicationId) }], []);
            }
            res.locals.data = await Promise.all(data.map(async (d) => {
                const profile = await this.profileSA.findById(d.profileId);
                d['profile'] = {
                    _id: d.profileId,
                    ...profile,
                };
                const publication = await this.publicationSA.findById(d.publicationId);
                d['publication'] = {
                    _id: d.publicationId,
                    ...publication,
                };
                return d;
            }));
            res.locals.statusCode = http_status_1.HttpStatus.OK;
            next();
        };
        this.getSharedNoteFor = async (req, res, next) => {
            const params = req.query;
            let data = await this.serviceSA.findByAttributes([{ profileId: params.profileId }], []);
            res.locals.data = await Promise.all(data.map(async (d) => {
                d['shareNoteId'] = d.id;
                const note = await this.noteSA.findById(d.nodeId);
                Object.assign(d, note);
                d['profile'] = await this.profileSA.findById(d.profileId._id || d.profileId);
                const sharedBy = await this.profileSA.findById(d.shareId);
                d['sharedBy'] = {
                    _id: d.shareId,
                    ...sharedBy,
                };
                return d;
            }));
            res.locals.statusCode = http_status_1.HttpStatus.OK;
            next();
        };
        this.checkHasNotedSameUser = async (req, res, next) => {
            const params = req.query;
            let data = await this.serviceSA.findByAttributes([
                {
                    profileId: new mongodb_1.ObjectID(params.sharedProfileNotedId),
                    createdBy: new mongodb_1.ObjectID(params.profileId),
                },
            ], []);
            res.locals.data = data.length > 0;
            res.locals.statusCode = http_status_1.HttpStatus.OK;
            next();
        };
        this.comparateNoteByUser = async (req, res, next) => {
            const params = req.query;
            const [myNotes, sharedNote] = await Promise.all([
                this.serviceSA.findByAttributes([
                    {
                        profileId: new mongodb_1.ObjectID(params.sharedProfileNotedId),
                        createdBy: new mongodb_1.ObjectID(params.profileId),
                    },
                ], []),
                this.noteSA.findById(params.sharedNoteId),
            ]);
            if (myNotes.length === 0) {
                res.locals.data = {
                    comparison: {
                        myNotes: {},
                        sharedNote: sharedNote,
                    },
                };
                res.locals.statusCode = http_status_1.HttpStatus.OK;
                next();
            }
            myNotes[0]['profile'] = await this.profileSA.findById(myNotes[0]['profileId']);
            sharedNote['profile'] = await this.profileSA.findById(params.sharedProfileNotedId);
            res.locals.data = {
                profileShared: sharedNote['profile'],
                myNotes: myNotes[0],
                sharedNote: sharedNote,
            };
            res.locals.statusCode = http_status_1.HttpStatus.OK;
            next();
        };
        this.findSharedNoteById = async (req, res, next) => {
            const params = req.query;
            let data = await this.serviceSA.findById(params.sharedNoteId);
            const note = await this.noteSA.findById(data.nodeId);
            Object.assign(data, note);
            data['profile'] = await this.profileSA.findById(params.profileId);
            const sharedBy = await this.profileSA.findById(data.shareId);
            data['sharedBy'] = {
                _id: data.shareId,
                ...sharedBy,
            };
            res.locals.data = data;
            res.locals.statusCode = http_status_1.HttpStatus.OK;
            next();
        };
        this.notifyUser = async (req, res, next) => {
            // console.log();
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
        // gestion de suppression de compte
        /**
         *
         *  Crée une demande de désactivation du compte. Nécessite une confirmation et un mot de passe.
         */
        this.deactivateRequest = async (req, res, next) => {
            const { userId, password } = req.body;
            try {
                const user = await this.userSA.findById(userId);
                if (!user) {
                    res.locals.data = false;
                    res.locals.isError = true;
                    res.locals.message =
                        "Utilisateur non trouvé. Veuillez vérifier l'ID utilisateur et réessayer.";
                    res.locals.statusCode = http_status_1.HttpStatus.NOT_FOUND;
                    return next();
                }
                const isPasswordValid = this.authentificationSA.validatePassword(password, user.password);
                if (!isPasswordValid) {
                    res.locals.data = false;
                    res.locals.isError = true;
                    res.locals.message = 'Mot de passe incorrect. Veuillez réessayer.';
                    res.locals.statusCode = http_status_1.HttpStatus.UNAUTHORIZED;
                    return next();
                }
                // Si l'utilisateur et le mot de passe sont valides
                res.locals.data = true;
                res.locals.isError = false;
                res.locals.message = 'Demande de désactivation du compte. Veuillez confirmer pour continuer.';
                res.locals.statusCode = http_status_1.HttpStatus.OK;
            }
            catch (error) {
                res.locals.data = false;
                res.locals.isError = true;
                res.locals.message =
                    "Une erreur s'est produite lors du traitement de la demande de désactivation. Veuillez réessayer plus tard.";
                res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                console.error('Erreur lors de la demande de désactivation :', error);
            }
            next();
        };
        /**
         *
         * Valide la désactivation après la deuxième confirmation et la saisie du mot de passe.
         */
        this.deactivateConfirmation = async (req, res, next) => {
            const { userId } = req.body;
            try {
                const user = await this.userSA.findById(userId);
                const { _id, ...data } = user;
                // si c'est déja desactive donc pas la paine de continuer
                if (!user.isDeactivated || typeof user.isDeactivated === 'undefined') {
                    const updatedUser = await this.userSA.updateFields(userId, {
                        isDeactivated: true,
                        deactivatedDate: moment().format('YYYY-MM-DD HH:mm:ss'),
                    });
                    res.locals.data = updatedUser;
                    res.locals.message = 'Your account has been deactivated.';
                    res.locals.statusCode = http_status_1.HttpStatus.OK;
                }
                else {
                    res.locals.data = false;
                    res.locals.message = 'Your account is already deactivated.';
                    res.locals.statusCode = http_status_1.HttpStatus.OK;
                }
            }
            catch (error) {
                res.locals.data = false;
                res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                console.error('Error desactive requesst:', error);
            }
            next();
        };
        this.reactiveAccount = async (req, res, next) => {
            const { userId } = req.body;
            try {
                const user = await this.userSA.findById(userId);
                // si c'est déja active donc pas la paine de continuer
                if (user.isDeactivated && typeof user.isDeactivated != 'undefined') {
                    res.locals.data = await this.userSA.updateFields(userId, {
                        isDeactivated: false,
                        deactivatedDate: null,
                        deletionState: 'NONE',
                        deletionDate: null,
                        firstNotificationDate: null,
                        secondNotificationDate: null,
                    });
                    res.locals.data = true;
                    res.locals.message = 'Your account has been re-activated.';
                    res.locals.statusCode = http_status_1.HttpStatus.OK;
                }
                else {
                    res.locals.data = true;
                    res.locals.message = 'Your account is already activated.';
                    res.locals.statusCode = http_status_1.HttpStatus.OK;
                }
            }
            catch (error) {
                res.locals.data = false;
                res.locals.message =
                    "Une erreur s'est produite lors du traitement de la réactivation de compte. Veuillez réessayer plus tard.";
                res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                console.error('Error desactive requesst:', error);
            }
            next();
        };
        this.deleteAccountRequest = async (req, res, next) => {
            const { userId, password } = req.body;
            try {
                const user = await this.userSA.findById(userId);
                res.locals.data = this.authentificationSA.validatePassword(password, user.password);
                res.locals.message = 'Account delete requested. Please confirm to proceed.';
                res.locals.statusCode = http_status_1.HttpStatus.OK;
            }
            catch (error) {
                res.locals.data = false;
                res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                console.error('Error delete request:', error);
            }
            next();
        };
        this.calculateDeletionDates = (baseDate, deletionDelay, deletionUnit, firstNotificationDelay, firstNotificationUnit, secondNotificationDelay, secondNotificationUnit) => {
            const unitToSeconds = {
                seconds: 1,
                minutes: 60,
                hours: 3600,
                days: 86400,
                weeks: 604800,
            };
            const deletionDelayInSeconds = deletionDelay * (unitToSeconds[deletionUnit] || 1);
            const firstNotificationDelayInSeconds = firstNotificationDelay * (unitToSeconds[firstNotificationUnit] || 1);
            const secondNotificationDelayInSeconds = secondNotificationDelay * (unitToSeconds[secondNotificationUnit] || 1);
            const deletionDate = baseDate.clone().add(deletionDelayInSeconds, 'seconds');
            const firstNotificationDate = deletionDate
                .clone()
                .subtract(firstNotificationDelayInSeconds, 'seconds');
            const secondNotificationDate = deletionDate
                .clone()
                .subtract(secondNotificationDelayInSeconds, 'seconds');
            return {
                deletionDate: deletionDate,
                firstNotificationDate: firstNotificationDate.toISOString(),
                secondNotificationDate: secondNotificationDate.toISOString(),
            };
        };
        this.deleteAccountConfirm = async (req, res, next) => {
            const { userId } = req.body;
            /**const deletionValue = parseInt(process.env.DELETION_DELAY, 10) || 5;
            const deletionUnit = process.env.DELETION_UNIT || 'minutes';
            const firstNotificationValue = parseInt(process.env.FIRST_NOTIFICATION_DELAY, 10) || 4;
            const firstNotificationUnit = process.env.FIRST_NOTIFICATION_UNIT || 'minutes';
            const secondNotificationValue = parseInt(process.env.SECOND_NOTIFICATION_DELAY, 10) || 2;
            const secondNotificationUnit = process.env.SECOND_NOTIFICATION_UNIT || 'minutes';
        **/
            const deletionValue = 5;
            const deletionUnit = 'minutes';
            const firstNotificationValue = 4;
            const firstNotificationUnit = 'minutes';
            const secondNotificationValue = 2;
            const secondNotificationUnit = 'minutes';
            const currentDate = moment();
            const { deletionDate, firstNotificationDate, secondNotificationDate, } = this.calculateDeletionDates(currentDate, deletionValue, deletionUnit, firstNotificationValue, firstNotificationUnit, secondNotificationValue, secondNotificationUnit);
            try {
                res.locals.data = await this.userSA.updateFields(userId, {
                    isDeactivated: true,
                    deletionState: 'NONE',
                    deactivatedDate: currentDate.toISOString(),
                    deletionDate: deletionDate.toISOString(),
                    firstNotificationDate: firstNotificationDate,
                    secondNotificationDate: secondNotificationDate,
                });
                res.locals.message = 'Your account has been deactivated.';
                res.locals.statusCode = http_status_1.HttpStatus.OK;
            }
            catch (error) {
                res.locals.data = false;
                res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                console.error('Error delete confirmation:', error);
            }
            next();
        };
        this.sendDeletionNotice = async () => {
            try {
                // @ts-ignore
                const usersForFirstNotification = await this.userSA.findBetweenDates('firstNotificationDate', 'secondNotificationDate', {
                    deletionState: { $ne: 'FIRST_NOTIF' },
                });
                console.log(`Found ${usersForFirstNotification.length} users to send first notification`);
                await Promise.all(usersForFirstNotification.map(async (user) => {
                    await this.userSA.updateFields(user.id, { deletionState: 'FIRST_NOTIF' });
                    await this.sendDeleteReminderNotification(user, 'first-process', 'First warning: Your account will be deleted soon.');
                }));
                // @ts-ignore
                const usersForSecondNotification = await this.userSA.findBetweenDates('secondNotificationDate', 'deletionDate', {
                    deletionState: { $eq: 'FIRST_NOTIF' },
                });
                console.log(`Found ${usersForSecondNotification.length} users to send second notification`);
                await Promise.all(usersForSecondNotification.map(async (user) => {
                    await this.userSA.updateFields(user.id, { deletionState: 'SECOND_NOTIF' });
                    await this.sendDeleteReminderNotification(user, 'second-process', 'Second warning: Your account will be deleted imminently.');
                }));
                const allUserToDelete = await this.userSA.findBetweenDates('deletionDate', undefined, {
                    deletionState: {
                        $eq: 'SECOND_NOTIF',
                    },
                });
                console.log(`Found ${allUserToDelete.length} users to delete`);
                await Promise.all(allUserToDelete.map(async (user) => {
                    //await this.userSA.delete(user.id);
                    await this.sendDeleteReminderNotification(user, 'final-process', 'Your account has been deleted.');
                }));
            }
            catch (error) {
                console.error('Error sending deletion notices:', error);
            }
        };
        this.sendDeleteReminderNotification = async (user, type, message) => {
            console.log(`Sending ${message} notification to user ${user.nom}`);
            if (type != 'final-process') {
                await (0, nodemailer_1.sendMail)({
                    to: user.email,
                    subject: '[PokerApply] - Suppression de compte',
                    body: `Bonjour ${user.username || user.nom},
         <br /> <br />
         <span>
         <p>${message}</p>
         <br />
         <br />
         Si vous n'êtes pas à l'origine de cette action, veuillez ignorer ce mail.
         <br /> <br /> <br />
         Cordialement,
         <br /> <br />
         L'équipe Pockerapply.
         `,
                });
            }
        };
        this.requestReactivateAccount = async (req, res, next) => {
            const { userId } = req.body;
            const code = (0, inscription_sa_1.entierAleatoire)(1111, 9999).toString();
            const expirationDate = new Date();
            expirationDate.setMinutes(expirationDate.getMinutes() + 15);
            const saved = await this.userSA.updateFields(userId, {
                reactivateCode: code,
                reactivateExpiredDate: expirationDate,
            });
            if (saved) {
                const user = await this.userSA.findById(userId);
                await (0, nodemailer_1.sendMail)({
                    to: user.email,
                    subject: '[Pokerapply] - Réactivation de compte',
                    body: `
      Bonjour ${user.username || user.nom},
      <br /> <br />
      <span>
        <p>Voici votre code de reactivation: ${code},le code expire dans 15 minutes.</p>
      <br />
      <br />
      Si vous n'êtes pas à l'origine de cette action, veuillez ignorer ce mail.
      <br /> <br /> <br />
      Cordialement,
      <br /> <br />
      L'équipe Pockerapply.
      `,
                });
                res.locals.data = true;
                res.locals.message = 'The code has been sent to your email.';
                res.locals.statusCode = http_status_1.HttpStatus.OK;
            }
            else {
                res.locals.data = false;
                res.locals.message = 'An error occurred. Please try again.';
                res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                console.error('Error delete confirmation:', 'user not found');
            }
            next();
        };
        this.confirmReactiveAccount = async (req, res, next) => {
            const { userId, code } = req.body;
            try {
                const user = await this.userSA.findById(userId);
                if (user && user.reactivateCode == code && user.reactivateExpiredDate > new Date()) {
                    res.locals.data = await this.userSA.updateFields(userId, {
                        reactivateCode: null,
                        reactivateExpiredDate: null,
                        deletionState: 'NONE',
                        deactivatedDate: null,
                        deletionDate: null,
                        firstNotificationDate: null,
                        secondNotificationDate: null,
                        isDeactivated: false,
                    });
                    res.locals.message = 'Your account has been reactivated.';
                    res.locals.statusCode = http_status_1.HttpStatus.OK;
                }
                else {
                    res.locals.data = false;
                    res.locals.message = 'The code entered is not valid. Please try again.';
                    res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                    console.error('Error delete confirmation:', 'user not found');
                }
            }
            catch (error) {
                res.locals.data = false;
                res.locals.statusCode = http_status_1.HttpStatus.INTERNAL_SERVER_ERROR;
                console.error('Error delete confirmation:', error);
            }
            next();
        };
        this.serviceSA = serviceSA;
        this.userSA = Utilisateur_1.utilisateurSA;
        this.deviceSA = Device_1.deviceSA;
        this.pageSA = Page_1.pageSA;
        this.profileSA = Profile_1.profileSA;
        this.notificationSA = Notification_1.notificationSA;
        this.publicationSA = Publication_1.publicationSA;
        this.noteSA = Note_1.noteSA;
        this.authentificationSA = authentification_sa_1.authentificationSA;
        this.name = name;
    }
}
exports.GenericController = GenericController;
//# sourceMappingURL=generic.controller.js.map