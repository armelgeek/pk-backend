"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataAggregates = exports.LocationElementId = exports.elements = exports.dataTDO = exports.todataTDO = void 0;
// @ts-ignore
const { ownedElements } = require('./Fragment.json');
const todataTDO = (ownedElements) => ownedElements.filter(i => i._type === 'UMLClass').reduce((acc, { name, route, attributes, operations }) => {
    return {
        ...acc,
        [name]: {
            route,
            attributes: Array.isArray(attributes)
                ? attributes.map(({ name, bo, ...all }) => {
                    var _a;
                    let entity = {};
                    if ((_a = all === null || all === void 0 ? void 0 : all.type) === null || _a === void 0 ? void 0 : _a.$ref) {
                        let getAll;
                        const { name, operations, } = ownedElements.find(({ _id }) => { var _a; return _id === ((_a = all === null || all === void 0 ? void 0 : all.type) === null || _a === void 0 ? void 0 : _a.$ref); }) || {};
                        if (Array.isArray(operations)) {
                            getAll = operations.find(({ name }) => name === 'getAll');
                        }
                        if (getAll) {
                            entity = {
                                ...getAll,
                                name,
                            };
                        }
                    }
                    return ({
                        ...all,
                        entity,
                        name,
                        key: name,
                        columns: bo ? { Header: all.form, defaultCanSort: true } : false,
                    });
                })
                : [],
            operations,
        }
    };
}, {});
exports.todataTDO = todataTDO;
exports.dataTDO = (0, exports.todataTDO)(ownedElements);
exports.elements = ownedElements;
exports.LocationElementId = (_a = ownedElements.find(({ name }) => name === 'Location')) === null || _a === void 0 ? void 0 : _a._id;
exports.dataAggregates = {};
//# sourceMappingURL=index.js.map