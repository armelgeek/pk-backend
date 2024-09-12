export type NotificationResponseDTO = {
   title?: string;
   message?: string;
   tous?: boolean;
   usersIds?: string[];
   user?: string;
   view?: string;
   targetId?: string;
   target?: string;
   type?: string;
   sender?: string;
   receiver?: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

/**
 * @typedef {object} NotificationResponseDTO
 * @property {string} title
 * @property {string} message
 * @property {boolean} tous
 * @property {array<string>} usersIds
 * @property {string} user
 * @property {string} view
 * @property {string} targetId
 * @property {string} target
 * @property {string} type
 * @property {string} sender
 * @property {string} receiver
 * @property {string} id
 * @property {string} updatedAt
 * @property {string} createdAt
 */

