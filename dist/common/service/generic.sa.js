"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSA = void 0;
const mongodb_1 = require("mongodb");
const transformer_1 = require("./transformer");
const data_1 = require("../../data");
const utils_1 = require("../../utils");
class GenericSA {
    constructor(serviceSM, factory, name) {
        this.serviceSM = serviceSM;
        this.factory = factory;
        this.name = name;
    }
    async create(dto) {
        try {
            const entity = this.factory.toDo(dto);
            const result = await this.serviceSM.create((0, transformer_1.factoryObject)(entity, this.name));
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async update(id, dto) {
        try {
            const entity = this.factory.toDo(dto);
            const result = await this.serviceSM.update(id, (0, transformer_1.factoryObject)(entity, this.name));
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async updateMany(query, dto) {
        try {
            const entity = this.factory.toDo(dto);
            const data = this.factory.toDo(query);
            const result = await this.serviceSM.updateMany((0, transformer_1.factoryObject)(data, this.name), (0, transformer_1.factoryObject)(entity, this.name));
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async partialUpdate(id, partialEntity) {
        try {
            const result = await this.serviceSM.partialUpdate(new mongodb_1.ObjectID(id), (0, transformer_1.factoryObject)(partialEntity, this.name));
            return { id, update: result === null || result === void 0 ? void 0 : result.ok };
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async pushUpdate(id, partialEntity) {
        try {
            const result = await this.serviceSM.pushUpdate(new mongodb_1.ObjectID(id), (0, transformer_1.factoryObject)(partialEntity, this.name));
            return { id, update: result === null || result === void 0 ? void 0 : result.ok };
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    updateFields(id, partialEntity) {
        return this.serviceSM.updateFields(id, partialEntity);
    }
    delete(id) {
        return this.serviceSM.delete(id);
    }
    async findByIds(ids, options) {
        try {
            const result = await this.serviceSM.findByIds(ids, options);
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findById(id) {
        var _a;
        try {
            const properties = (_a = data_1.dataTDO[this.name]) === null || _a === void 0 ? void 0 : _a.attributes;
            let aggregate = [{ $match: { _id: new mongodb_1.ObjectID(id) } }, { $limit: 1 }];
            if (properties) {
                const toAggrecate = properties
                    .filter(({ isID, entity }) => isID && (entity === null || entity === void 0 ? void 0 : entity.name))
                    .reduce((acc, { name, entity, isArray }) => {
                    var _a, _b, _c;
                    let lookup2 = [];
                    const lookup = {
                        $lookup: {
                            from: (_a = entity === null || entity === void 0 ? void 0 : entity.name) === null || _a === void 0 ? void 0 : _a.toLowerCase(),
                            localField: name,
                            foreignField: '_id',
                            as: name,
                        },
                    };
                    let results = acc;
                    if (isArray) {
                        results = [...results, lookup];
                    }
                    else {
                        results = [
                            ...results,
                            lookup,
                            {
                                $unwind: {
                                    path: `$${name}`,
                                    preserveNullAndEmptyArrays: true,
                                },
                            },
                        ];
                    }
                    if (Array.isArray((_b = data_1.dataTDO[entity === null || entity === void 0 ? void 0 : entity.name]) === null || _b === void 0 ? void 0 : _b.attributes)) {
                        lookup2 = (_c = data_1.dataTDO[entity === null || entity === void 0 ? void 0 : entity.name]) === null || _c === void 0 ? void 0 : _c.attributes.filter(({ isID, entity }) => isID && (entity === null || entity === void 0 ? void 0 : entity.name)).reduce((acc1, lp2) => {
                            var _a, _b, _c, _d, _e, _f;
                            if (isArray && (lp2 === null || lp2 === void 0 ? void 0 : lp2.isArray)) {
                                return [
                                    ...acc1,
                                    {
                                        $addFields: {
                                            [`${name}_${lp2.name}`]: {
                                                $reduce: {
                                                    input: `$${name}` || [],
                                                    initialValue: [],
                                                    in: {
                                                        $concatArrays: ['$$value', `$$this.${lp2.name}`],
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    {
                                        $lookup: {
                                            from: (_b = (_a = lp2 === null || lp2 === void 0 ? void 0 : lp2.entity) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toLowerCase(),
                                            localField: `${name}_${lp2.name}`,
                                            foreignField: '_id',
                                            as: `${name}_${lp2.name}`,
                                        },
                                    },
                                ];
                            }
                            if (!(lp2 === null || lp2 === void 0 ? void 0 : lp2.isArray)) {
                                return [
                                    ...acc1,
                                    {
                                        $lookup: {
                                            from: (_d = (_c = lp2 === null || lp2 === void 0 ? void 0 : lp2.entity) === null || _c === void 0 ? void 0 : _c.name) === null || _d === void 0 ? void 0 : _d.toLowerCase(),
                                            localField: `${name}.${lp2.name}`,
                                            foreignField: '_id',
                                            as: `${name}_${lp2.name}`,
                                        },
                                    },
                                    {
                                        $unwind: {
                                            path: `$${name}_${lp2.name}`,
                                            preserveNullAndEmptyArrays: true,
                                        },
                                    },
                                ];
                            }
                            return [
                                ...acc1,
                                {
                                    $lookup: {
                                        from: (_f = (_e = lp2 === null || lp2 === void 0 ? void 0 : lp2.entity) === null || _e === void 0 ? void 0 : _e.name) === null || _f === void 0 ? void 0 : _f.toLowerCase(),
                                        localField: `${name}.${lp2.name}`,
                                        foreignField: '_id',
                                        as: `${name}_${lp2.name}`,
                                    },
                                },
                            ];
                        }, []);
                        if ((lookup2 === null || lookup2 === void 0 ? void 0 : lookup2.length) > 0) {
                            results = [...results, ...lookup2];
                        }
                    }
                    return results;
                }, []);
                aggregate = [...aggregate, ...toAggrecate];
            }
            const result = await this.serviceSM.findByIdAggregate(aggregate);
            if (Array.isArray(result) && result.length > 0) {
                return this.factory.toResponseDto(result[0]);
            }
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findOne(option) {
        try {
            const result = await this.serviceSM.findOne((0, transformer_1.factoryObject)(option, this.name));
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findOneWithRelation(options) {
        var _a;
        try {
            const { search, match, bo, queries } = options;
            let newQueries = queries;
            const properties = (_a = data_1.dataTDO[this.name]) === null || _a === void 0 ? void 0 : _a.attributes;
            let aggregate = [{ $match: {} }];
            if (!bo && properties) {
                const toAggrecate = properties
                    .filter(({ isID, entity }) => isID && (entity === null || entity === void 0 ? void 0 : entity.name))
                    .reduce((acc, { name, entity, isArray }) => {
                    var _a;
                    const lookup = {
                        $lookup: {
                            from: (_a = entity === null || entity === void 0 ? void 0 : entity.name) === null || _a === void 0 ? void 0 : _a.toLowerCase(),
                            localField: name,
                            foreignField: '_id',
                            as: name,
                        },
                    };
                    if (isArray) {
                        return [...acc, lookup];
                    }
                    else {
                        return [
                            ...acc,
                            lookup,
                            {
                                $unwind: {
                                    path: `$${name}`,
                                    preserveNullAndEmptyArrays: true,
                                },
                            },
                        ];
                    }
                }, []);
                aggregate = [...aggregate, ...toAggrecate];
            }
            if (queries && Array.isArray(Object.keys(queries)) && properties) {
                newQueries = Object.keys(queries).reduce((acc, key) => {
                    var _a;
                    const isExist = properties.find((propertie) => (propertie === null || propertie === void 0 ? void 0 : propertie.key) === key);
                    if (isExist && (isExist === null || isExist === void 0 ? void 0 : isExist.isID) && mongodb_1.ObjectID.isValid(queries[key])) {
                        return {
                            ...acc,
                            [`${key}._id`]: new mongodb_1.ObjectID(queries[key]),
                        };
                    }
                    else if (((_a = key === null || key === void 0 ? void 0 : key.split('__')) === null || _a === void 0 ? void 0 : _a.length) === 2) {
                        if (mongodb_1.ObjectID.isValid(queries[key])) {
                            return {
                                ...acc,
                                [key.replace('__', '.')]: new mongodb_1.ObjectID(queries[key]),
                            };
                        }
                        return {
                            ...acc,
                            [key.replace('__', '.')]: { $regex: new RegExp(queries[key], 'i') },
                        };
                    }
                    if (mongodb_1.ObjectID.isValid(queries[key])) {
                        return {
                            ...acc,
                            [key]: queries[key],
                        };
                    }
                    return {
                        ...acc,
                        [key]: { $regex: new RegExp(queries[key]) },
                    };
                }, {});
            }
            const result = await this.serviceSM.findOneWithRelation({
                search,
                match,
                aggregate,
                where: newQueries,
            });
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findOneNotFail(option) {
        try {
            const result = await this.serviceSM.findOneNotFail(option);
            return this.factory.toResponseDto(result);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findAll(options) {
        var _a, _b, _c, _d;
        try {
            const { take, skip, sortField, order, relation, search, match, bo, queries, lookup, geoNear, exists, no_exists, sort, search_or, attributes_or, child_or, } = options;
            let newQueries = queries;
            let new__Queries = {};
            const properties = (_a = data_1.dataTDO[this.name]) === null || _a === void 0 ? void 0 : _a.attributes;
            const geoNearAggregate = geoNear ? [{ $geoNear: JSON.parse(geoNear) }] : [];
            let aggregate = lookup
                ? JSON.parse(lookup).reduce((acc, curr) => {
                    const { from, foreignField, localField } = curr;
                    const lookup = {
                        $lookup: {
                            from,
                            localField,
                            foreignField: foreignField || '_id',
                            as: from,
                        },
                    };
                    return [
                        ...acc,
                        lookup,
                        {
                            $unwind: {
                                path: `$${from}`,
                                preserveNullAndEmptyArrays: true,
                            },
                        },
                    ];
                }, [])
                : [];
            if (!bo && properties) {
                const toAggregate = properties
                    .filter(({ isID, entity }) => isID && (entity === null || entity === void 0 ? void 0 : entity.name))
                    .reduce((acc, { name, entity, isArray }) => {
                    var _a;
                    const lookup = {
                        $lookup: {
                            from: (_a = entity === null || entity === void 0 ? void 0 : entity.name) === null || _a === void 0 ? void 0 : _a.toLowerCase(),
                            localField: name,
                            foreignField: '_id',
                            as: (0, utils_1.removeId)(name),
                        },
                    };
                    if (!isArray) {
                        return [
                            ...acc,
                            lookup,
                            {
                                $unwind: {
                                    path: `$${(0, utils_1.removeId)(name)}`,
                                    preserveNullAndEmptyArrays: true,
                                },
                            },
                        ];
                    }
                    return [...acc, lookup];
                }, []);
                aggregate = [...geoNearAggregate, ...aggregate, ...toAggregate];
            }
            if (queries && Array.isArray(Object.keys(queries)) && properties) {
                newQueries = Object.keys(queries).reduce((acc, key) => {
                    var _a, _b, _c;
                    const isExist = properties.find((propertie) => (propertie === null || propertie === void 0 ? void 0 : propertie.key) === key);
                    if (((_a = key === null || key === void 0 ? void 0 : key.split('__')) === null || _a === void 0 ? void 0 : _a.length) === 2) {
                        return {
                            ...acc,
                        };
                    }
                    else if (key === '$or') {
                        return {
                            ...acc,
                            ...(0, transformer_1.toQueryOr)(queries[key], this.name),
                        };
                    }
                    else if (key === '$and') {
                        return {
                            ...acc,
                            ...(0, transformer_1.toQueryAnd)(queries[key], this.name),
                        };
                    }
                    else if (isExist && (isExist === null || isExist === void 0 ? void 0 : isExist.isID) && mongodb_1.ObjectID.isValid(queries[key])) {
                        if (Array.isArray(queries[key])) {
                            return {
                                ...acc,
                                [key.replace('__', '.')]: { $in: queries[key].map((id) => new mongodb_1.ObjectID(id)) },
                            };
                        }
                        return {
                            ...acc,
                            [`${key}`]: new mongodb_1.ObjectID(queries[key]),
                        };
                    }
                    else if (((_b = key === null || key === void 0 ? void 0 : key.split('_lte')) === null || _b === void 0 ? void 0 : _b.length) === 2) {
                        return {
                            ...acc,
                            [key === null || key === void 0 ? void 0 : key.split('_lte')[0]]: { $lte: new Date(queries[key]) },
                        };
                    }
                    else if (((_c = key === null || key === void 0 ? void 0 : key.split('_gte')) === null || _c === void 0 ? void 0 : _c.length) === 2) {
                        const keySplit = key === null || key === void 0 ? void 0 : key.split('_gte');
                        return {
                            ...acc,
                            [keySplit[0]]: { $gte: new Date(queries[key]) },
                        };
                    }
                    else if (isExist && isExist.type === 'boolean') {
                        return {
                            ...acc,
                            [`${key}`]: queries[key] === 'true' ? true : false,
                        };
                    }
                    if (Array.isArray(queries[key])) {
                        return {
                            ...acc,
                            [key.replace('__', '.')]: { $in: queries[key] },
                        };
                    }
                    if (mongodb_1.ObjectID.isValid(queries[key])) {
                        return {
                            ...acc,
                            [key]: (0, mongodb_1.ObjectID)(queries[key]),
                        };
                    }
                    return {
                        ...acc,
                        [key]: { $regex: new RegExp(queries[key]) },
                    };
                }, {});
                new__Queries = Object.keys(queries).reduce((acc, key) => {
                    var _a, _b, _c;
                    if (((_a = key === null || key === void 0 ? void 0 : key.split('__')) === null || _a === void 0 ? void 0 : _a.length) === 2) {
                        const row = key === null || key === void 0 ? void 0 : key.split('__')[1];
                        if (mongodb_1.ObjectID.isValid(queries[key])) {
                            return {
                                ...acc,
                                [key.replace('__', '.')]: new mongodb_1.ObjectID(queries[key]),
                            };
                        }
                        else if (((_b = row === null || row === void 0 ? void 0 : row.split('_lte')) === null || _b === void 0 ? void 0 : _b.length) === 2) {
                            const row_row = `${key === null || key === void 0 ? void 0 : key.split('__')[0]}.${row === null || row === void 0 ? void 0 : row.split('_lte')[0]}`;
                            return {
                                ...acc,
                                [row_row]: { $lte: new Date(queries[key]) },
                            };
                        }
                        else if (((_c = row === null || row === void 0 ? void 0 : row.split('_gte')) === null || _c === void 0 ? void 0 : _c.length) === 2) {
                            const row_row = `${key === null || key === void 0 ? void 0 : key.split('__')[0]}.${row === null || row === void 0 ? void 0 : row.split('_gte')[0]}`;
                            return {
                                ...acc,
                                [row_row]: { $gte: new Date(queries[key]) },
                            };
                        }
                        if (Array.isArray(queries[key])) {
                            return {
                                ...acc,
                                [key.replace('__', '.')]: { $in: queries[key] },
                            };
                        }
                        return {
                            ...acc,
                            [key.replace('__', '.')]: { $regex: new RegExp(queries[key], 'i') },
                        };
                    }
                    return {
                        ...acc,
                    };
                }, {});
            }
            const querySearchOr = search_or && (attributes_or === null || attributes_or === void 0 ? void 0 : attributes_or.length) > 1 && child_or ? { $or: attributes_or.map((attribut) => ({ [`${child_or}.${attribut}`]: { $regex: new RegExp(search_or, 'i') } })) } : {};
            const data = await this.serviceSM.findAll({
                relation,
                search,
                take,
                skip,
                match,
                aggregate,
                where: newQueries,
                new__Queries: { ...new__Queries, ...querySearchOr },
                order,
                sortField,
                exists,
                no_exists,
            }, this.name);
            // const items = this.factory.toResponseDto(data[0]?.data || []);
            const items = (((_b = data[0]) === null || _b === void 0 ? void 0 : _b.data) || []).map(({ _id, ...item }) => ({ id: _id, ...item }));
            const totalCount = (_d = (_c = data[0]) === null || _c === void 0 ? void 0 : _c.metadata[0]) === null || _d === void 0 ? void 0 : _d.total;
            return {
                items,
                totalCount,
                ...(!Number.isNaN(take) && !Number.isNaN(skip)
                    ? { hasNext: take * (skip / take + 1) < totalCount }
                    : {}),
            };
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findByQueries(queries) {
        return this.serviceSM.findByQueries(queries);
    }
    async count(query) {
        try {
            let queryOr = {};
            if (query['$or']) {
                queryOr = (0, transformer_1.toQueryOr)(query, this.name);
            }
            const result = await this.serviceSM.count({ ...(0, transformer_1.factoryObject)(query, this.name), ...queryOr });
            return result;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async find() {
        try {
            const data = await this.serviceSM.find();
            const items = this.factory.toResponseDto(data || []);
            return items;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async sum(options) {
        var _a, _b, _c;
        try {
            const { take, skip, sortField, order, relation, search, match, queries, field } = options;
            let newQueries = queries;
            const data = await this.serviceSM.sum({
                relation,
                search,
                take,
                skip,
                match,
                where: newQueries,
                order,
                sortField,
            }, this.name);
            const sum = (((_a = data[0]) === null || _a === void 0 ? void 0 : _a.data) || []).reduce((acc, curr) => {
                if (!isNaN(curr[field])) {
                    return acc + curr[field];
                }
                return acc;
            }, 0);
            const totalCount = (_c = (_b = data[0]) === null || _b === void 0 ? void 0 : _b.metadata[0]) === null || _c === void 0 ? void 0 : _c.total;
            return {
                sum,
                totalCount,
            };
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findByAttributes(andConditions, orConditions) {
        try {
            const data = await this.serviceSM.findByAttributes(andConditions, orConditions);
            return this.factory.toResponseDto(data || []);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async findBetweenDates(firstDate, lastDate, otherCondition) {
        try {
            const data = await this.serviceSM.findBetweenDates(firstDate, lastDate, otherCondition);
            return this.factory.toResponseDto(data || []);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
}
exports.GenericSA = GenericSA;
//# sourceMappingURL=generic.sa.js.map