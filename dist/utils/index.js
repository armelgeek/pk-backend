"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeId = void 0;
const removeId = (str) => {
    const strLength = str.length;
    if (str.charAt(strLength - 1) === 'd' && str.charAt(strLength - 2) === 'I') {
        return str.slice(0, -2);
    }
    return str;
};
exports.removeId = removeId;
//# sourceMappingURL=index.js.map