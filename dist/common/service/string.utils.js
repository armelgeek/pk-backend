"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAlphanumericString = exports.removeQuotes = void 0;
const removeQuotes = (value) => value.replace('"', '').replace('"', '');
exports.removeQuotes = removeQuotes;
const generateAlphanumericString = (length = 20) => Array.from({ length }, () => Math.floor(Math.random() * 36).toString(36)).join('');
exports.generateAlphanumericString = generateAlphanumericString;
//# sourceMappingURL=string.utils.js.map