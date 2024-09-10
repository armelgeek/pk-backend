export type UtilisateurResponseDTO = {
   nom?: string;
   prenom?: string;
   email: string;
   role?: number;
   password?: string;
   phone?: PhoneRequestDTO;
   imageUrl?: string;
   adresse?: string;
   ville?: string;
   dateInscription?: string;
   dateNaissance?: string;
   dateDerniereConnexion?: Date;
   dateModification?: Date;
   actif?: boolean;
   socketId?: string;
   nomPrenom?: string;
   code?: string;
   googleId?: string;
   facebookId?: string;
   appleId?: string;
   online?: boolean;
   lague?: string;
   username?: string;
   profileId?: string;
   twoFactorAuthentication?: string;
   isNotOnboarding?: boolean;
   codeExpireAt?: Date;
   deletionDate?: string;
   firstNotificationDate?: string;
   deletionState: string;
   isDeactivated?: boolean;
   secondNotificationDate?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} UtilisateurResponseDTO
 * @property {string} nom
 * @property {string} prenom
 * @property {string} email
 * @property {number} role
 * @property {string} password
 * @property {PhoneRequestDTO} phone
 * @property {string} imageUrl
 * @property {string} adresse
 * @property {string} ville
 * @property {string} dateInscription
 * @property {string} dateNaissance
 * @property {Date} dateDerniereConnexion
 * @property {Date} dateModification
 * @property {boolean} actif
 * @property {string} socketId
 * @property {string} nomPrenom
 * @property {string} code
 * @property {string} googleId
 * @property {string} facebookId
 * @property {string} appleId
 * @property {boolean} online
 * @property {string} lague
 * @property {string} username
 * @property {string} profileId
 * @property {string} twoFactorAuthentication
 * @property {boolean} isNotOnboarding
 * @property {Date} codeExpireAt
 * @property {string} deletionDate
 * @property {string} firstNotificationDate
 * @property {string} deletionState
 * @property {boolean} isDeactivated
 * @property {string} secondNotificationDate
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

