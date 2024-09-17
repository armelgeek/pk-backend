export type AssessmentResponseDTO = {
   profileId?: string;
   assessmentProfile?: string;
   note?: number;
   avis?: string;
   etat?: string;
   link?: string;
  createdAt: Date;
  updatedAt: Date;
  lastActivityAt: Date;
  id: string;
}

/**
 * @typedef {object} AssessmentResponseDTO
 * @property {string} profileId
 * @property {string} assessmentProfile
 * @property {number} note
 * @property {string} avis
 * @property {string} etat
 * @property {string} link
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} lastActivityAt
 * @property {string} createdAt
 */

