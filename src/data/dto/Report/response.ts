export type ReportResponseDTO = {
   publicationId?: string;
   eventId?: string;
   profileId?: string;
   type?: string;
   reportProfileId?: string;
   etat?: string;
   situation?: string;
   message?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} ReportResponseDTO
 * @property {string} publicationId
 * @property {string} eventId
 * @property {string} profileId
 * @property {string} type
 * @property {string} reportProfileId
 * @property {string} etat
 * @property {string} situation
 * @property {string} message
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

