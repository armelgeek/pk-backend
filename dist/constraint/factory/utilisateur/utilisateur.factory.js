"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilisateurFactory = exports.UtilisateurFactory = void 0;
const generic_factory_1 = require("../../../common/constraint/factory/generic.factory");
const date_service_1 = require("../../../common/service/date.service");
const data_1 = require("../../../data");
const commonSchema = {
    ...data_1.dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};
const schema = {
    ...commonSchema,
    nom: 'nom',
    prenom: 'prenom',
    username: 'username',
    dateInscription: 'dateInscription',
    dateDerniereConnexion: 'dateDerniereConnexion',
};
const requestSchema = {
    ...commonSchema,
    nom: 'nom',
    prenom: 'prenom',
};
const responseSchema = {
    ...commonSchema,
    id: '_id',
    actif: 'actif',
    nomPrenom: ({ nom, prenom }) => `${nom} ${prenom}`,
    dateInscription: {
        path: 'dateInscription',
        fn: (value) => (0, date_service_1.formatDateToLocale)(value),
    },
    dateDerniereConnexion: {
        path: 'dateDerniereConnexion',
        fn: (value) => (0, date_service_1.formatDateToLocale)(value),
    },
    nom: 'nom',
    prenom: 'prenom',
    username: 'username',
};
const boResponseSchema = {
    ...commonSchema,
    nom: 'nom',
    prenom: 'prenom',
};
const cinResponseSchema = {
    items: ({ cinUrl1, cinUrl2 }) => (cinUrl1 ? [cinUrl1, cinUrl2] : []),
};
const odooRequestSchema = {
    bo_id: '_id',
    nom: 'nom',
    prenom: 'prenom',
    mobile: 'phone',
    email: 'email',
    street: 'adresse',
    date_of_birth: 'dateNaissance',
    city: 'ville',
    website: () => '',
};
class UtilisateurFactory extends generic_factory_1.GenericFactory {
    toBODTO(utilisateurDO) {
        return this.mapper(boResponseSchema, utilisateurDO);
    }
    toOdooRequestDTO(utilisateurDO) {
        return this.mapper(odooRequestSchema, utilisateurDO);
    }
    toCinResponseDTO(utilisateurDO) {
        return this.mapper(cinResponseSchema, utilisateurDO);
    }
}
exports.UtilisateurFactory = UtilisateurFactory;
exports.utilisateurFactory = new UtilisateurFactory(schema, requestSchema, responseSchema);
//# sourceMappingURL=utilisateur.factory.js.map