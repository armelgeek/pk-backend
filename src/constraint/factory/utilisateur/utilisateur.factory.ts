import { GenericFactory } from '../../../common/constraint/factory/generic.factory';
import { formatDateToLocale } from '../../../common/service/date.service';
import { imageToBase64 } from '../../../common/service/image';
import { dataTDO } from '../../../data';
import { UtilisateurDO } from '../../../data/do/utilisateur/utilisateur.do';
// @ts-ignore
import { UtilisateurEditRequestDTO } from '../../../data/dto/Utilisateur/utilisateur-edit-request.dto';
// @ts-ignore
import { UtilisateurRequestDTO } from '../../../data/dto/Utilisateur/request';
// @ts-ignore
import { UtilisateurResponseDTO } from '../../../data/dto/Utilisateur/response';

const commonSchema = {
  ...dataTDO.Utilisateur.attributes.reduce((acc, { key }) => ({ ...acc, [key]: key }), {}),
};

const schema = {
  ...commonSchema,
  nom: 'nom',
  prenom: 'prenom',
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
    fn: (value) => formatDateToLocale(value),
  },
  dateDerniereConnexion: {
    path: 'dateDerniereConnexion',
    fn: (value) => formatDateToLocale(value),
  },
  nom: 'nom',
  prenom: 'prenom',
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
  mobile: 'telephone',
  email: 'email',
  street: 'adresse',
  date_of_birth: 'dateNaissance',
  city: 'ville',
  website: () => '',
};

export class UtilisateurFactory extends GenericFactory<
  UtilisateurDO,
  UtilisateurRequestDTO,
  UtilisateurResponseDTO
> {
  toBODTO(utilisateurDO: UtilisateurDO | UtilisateurDO[]) {
    return this.mapper(boResponseSchema, utilisateurDO);
  }

  toOdooRequestDTO(
    utilisateurDO: UtilisateurDO | UtilisateurRequestDTO | UtilisateurEditRequestDTO,
  ) {
    return this.mapper(odooRequestSchema, utilisateurDO);
  }

  toCinResponseDTO(utilisateurDO: UtilisateurDO) {
    return this.mapper(cinResponseSchema, utilisateurDO);
  }
}

export const utilisateurFactory = new UtilisateurFactory(schema, requestSchema, responseSchema);
