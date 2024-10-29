"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDelete = exports.useGet = exports.usePut = exports.usePost = exports.useRequest = void 0;
const axios_1 = require("axios");
const configs_1 = require("../../data/constants/configs");
const { andoomApiUrl } = configs_1.configs;
const useRequest = (url, method) => async (options) => {
    var _a;
    const { body, params, customUrl, customHeader = {}, fullUrl } = options;
    try {
        const result = await (0, axios_1.default)({
            params,
            method,
            headers: {
                ...customHeader,
            },
            url: fullUrl || `${andoomApiUrl}${customUrl || url}`,
            data: body,
            timeout: 300000,
        });
        const { data } = result;
        return data;
    }
    catch (error) {
        return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
    }
};
exports.useRequest = useRequest;
const usePost = (url) => (0, exports.useRequest)(url, 'POST');
exports.usePost = usePost;
const usePut = (url) => (0, exports.useRequest)(url, 'PUT');
exports.usePut = usePut;
const useGet = (url) => (0, exports.useRequest)(url, 'GET');
exports.useGet = useGet;
const useDelete = (url) => (0, exports.useRequest)(url, 'DELETE');
exports.useDelete = useDelete;
//# sourceMappingURL=axios.js.map