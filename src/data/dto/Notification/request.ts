export type NotificationRequestDTO = {
   title?: string;
   message?: string;
   tous?: boolean;
   userIds?: string[];
   user?: string;
   view?: string;
   targetId?: string;
   target?: string;
   type?: string;
   sender?: string;
   receiver?: string;
}

/**
 * @typedef {object} NotificationRequestDTO
 * @property {string} title
 * @property {string} message
 * @property {boolean} tous
 * @property {array<string>} userIds
 * @property {string} user
 * @property {string} view
 * @property {string} targetId
 * @property {string} target
 * @property {string} type
 * @property {string} sender
 * @property {string} receiver
 */

