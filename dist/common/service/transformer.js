"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryAnd = exports.toQueryOr = exports.factoryObject = void 0;
const mongodb_1 = require("mongodb");
const data_1 = require("../../data");
const factoryObject = (data, name, query = false) => {
    var _a;
    const keys = Object.keys(data);
    let newData = data;
    if (Array.isArray((_a = data_1.dataTDO[name]) === null || _a === void 0 ? void 0 : _a.attributes)) {
        newData = data_1.dataTDO[name].attributes
            .filter((attribute) => keys.includes(attribute.key))
            .reduce((acc, { isID, key, type }) => {
            var _a, _b, _c, _d;
            let newAcc = acc;
            if (isID && acc && acc[key]) {
                newAcc = {
                    ...newAcc,
                    [key]: Array.isArray(acc[key])
                        ? acc[key].map((ID) => new mongodb_1.ObjectID(ID))
                        : new mongodb_1.ObjectID(acc[key]),
                };
            }
            else if (type === 'date') {
                newAcc = {
                    ...newAcc,
                    [key]: new Date(acc[key]),
                };
            }
            else if ((type === null || type === void 0 ? void 0 : type.$ref) === data_1.LocationElementId && ((_a = acc[key]) === null || _a === void 0 ? void 0 : _a.latitude) && ((_b = acc[key]) === null || _b === void 0 ? void 0 : _b.longitude)) {
                newAcc = {
                    ...newAcc,
                    [key]: {
                        "type": "Point",
                        "coordinates": [
                            (_c = acc[key]) === null || _c === void 0 ? void 0 : _c.latitude,
                            (_d = acc[key]) === null || _d === void 0 ? void 0 : _d.longitude,
                        ]
                    },
                };
            }
            else if (type === 'boolean') {
                newAcc = {
                    ...newAcc,
                    [key]: typeof acc[key] === "boolean" ? acc[key] : acc[key] === 'true' ? true : false,
                };
            }
            if (query) {
                return {
                    ...newAcc,
                    [key]: { $regex: new RegExp(acc[key], 'i') }
                };
            }
            return newAcc;
        }, data);
    }
    return newData;
};
exports.factoryObject = factoryObject;
const toQueryOr = (query, name) => {
    const queries = JSON.parse(query);
    return { $or: queries === null || queries === void 0 ? void 0 : queries.map((item) => (0, exports.factoryObject)(item, name, true)) };
};
exports.toQueryOr = toQueryOr;
const toQueryAnd = (query, name) => {
    const queries = JSON.parse(query);
    return { $and: queries === null || queries === void 0 ? void 0 : queries.map((item) => (0, exports.factoryObject)(item, name)) };
};
exports.toQueryAnd = toQueryAnd;
//# sourceMappingURL=transformer.js.map