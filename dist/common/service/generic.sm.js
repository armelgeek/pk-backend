"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericSM = void 0;
const mongodb_1 = require("mongodb");
const http_status_1 = require("../../data/constants/http-status");
const exception_handler_1 = require("../../service/middleware/exception-handler");
class GenericSM {
    constructor(repository) {
        this.repository = repository;
    }
    async create(entity) {
        return await this.repository.save({ ...entity, createdAt: new Date(), lastActivityAt: new Date() });
    }
    async partialUpdate(_id, partialEntity) {
        try {
            const option = { upsert: true, new: true, setDefaultsOnInsert: true };
            const updated = await this.repository.findOneAndUpdate({ _id }, { $set: { ...partialEntity, lastActivityAt: new Date() } }, option);
            return updated;
        }
        catch (error) {
            console.log({ error });
            return Promise.reject(error);
        }
    }
    async updateFields(_id, updateData) {
        try {
            const result = await this.repository.updateOne({ _id: new mongodb_1.ObjectID(_id) }, { $set: { ...updateData, lastActivityAt: new Date() } });
            if (result.modifiedCount === 0) {
                throw new Error('Document non trouvé ou aucune mise à jour effectuée');
            }
            return result;
        }
        catch (error) {
            console.error('Erreur lors de la mise à jour des champs:', error);
            throw new Error(`La mise à jour a échoué : ${error.message}`);
        }
    }
    async pushUpdate(_id, partialEntity) {
        try {
            const option = { upsert: true, new: true, setDefaultsOnInsert: true };
            const updated = await this.repository.findOneAndUpdate({ _id }, { $push: partialEntity }, option);
            await this.repository.updateOne({ _id }, { lastActivityAt: new Date() });
            return updated;
        }
        catch (error) {
            console.log({ error });
            return Promise.reject(error);
        }
    }
    async update(_id, partialEntity) {
        try {
            const updated = await this.repository.updateOne({ _id }, { ...partialEntity, lastActivityAt: new Date() });
            return updated;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async updateMany(query, partialEntity) {
        try {
            const updated = await this.repository.updateMany(query, { ...partialEntity, lastActivityAt: new Date() });
            return updated;
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async delete(id) {
        try {
            const affected = await this.repository.delete(id);
            if (affected) {
                return id;
            }
            throw new exception_handler_1.Exception(http_status_1.HttpStatus.BAD_REQUEST, `id: ${id} introuvable`);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    findByIdAggregate(aggregate) {
        return this.repository.aggregate(aggregate).toArray();
    }
    findById(_id) {
        return this.repository.findOne(_id);
    }
    findByIds(ids, options) {
        return this.repository.findByIds(ids);
    }
    findOne(option) {
        return this.repository.findOneOrFail(option);
    }
    findOneWithRelation(options) {
        const { where = {}, search, aggregate = [{ $match: {} }] } = options;
        const aggregate_search = search ? { $text: { $search: search } } : {};
        const { userId, utilisateurId, ...match } = where;
        return this.repository
            .aggregate([
            { $match: aggregate_search },
            ...aggregate,
            { $match: match },
            // relations,
        ])
            .toArray();
    }
    findOneNotFail(option) {
        return this.repository.findOne(option);
    }
    findAll(options, name) {
        const { take = 10, skip = 0, order = 1, sortField, where = {}, search, relation, match, exists, no_exists, aggregate = [], new__Queries, } = options;
        const aggregate_search = search ? { $text: { $search: search } } : {};
        const { userId, utilisateurId, longitude, latitude, maxDistance, ...whereOut } = where;
        const sort_aggregate = sortField && order ? { [sortField]: order === "ASC" ? 1 : -1 } : { lastActivityAt: order === "ASC" ? 1 : -1 };
        const search_query = Object.keys(new__Queries).length > 0 ? [{ $match: new__Queries }] : [];
        const isExist = exists ? { [exists]: { $exists: true } } : {};
        const isNotExist = no_exists
            ? { $or: [{ [no_exists]: { $exists: false } }, { [no_exists]: null }] }
            : {};
        const aggregationPipeline = this.repository
            .aggregate([
            { $match: { ...isExist, ...isNotExist, ...whereOut, ...aggregate_search } },
            ...aggregate,
            ...search_query,
            // {
            //   $geoWithin: {
            //     $geometry: {
            //       type: 'Point',
            //       coordinates: [longitude, latitude],
            //     },
            //   },
            //   $maxDistance: 10000,
            // },
            {
                $group: {
                    _id: '$_id',
                    doc: { $first: '$$ROOT' },
                },
            },
            {
                $replaceRoot: { newRoot: '$doc' }, // Replace la racine avec le document complet conservé
            },
            { $sort: { ...sort_aggregate } },
            {
                $facet: {
                    metadata: [{ $count: 'total' }],
                    data: [{ $skip: Number(skip) }, { $limit: Number(take) }],
                },
            },
        ])
            .toArray();
        return aggregationPipeline;
    }
    async count(query) {
        return await this.repository.count(query);
    }
    async find() {
        return this.repository.find();
    }
    async findByQueries(queries) {
        return this.repository.find({ where: queries });
    }
    sum(options, name) {
        const { take = 10000, skip = 0, where = {} } = options;
        const { userId, utilisateurId, ...whereOut } = where;
        return this.repository
            .aggregate([
            { $match: whereOut },
            {
                $facet: {
                    metadata: [{ $count: 'total' }],
                    data: [{ $skip: Number(skip) }, { $limit: Number(take) }],
                },
            },
        ])
            .toArray();
    }
    async findByAttributes(andConditions, orConditions) {
        try {
            const andQuery = andConditions.length > 0 ? { $and: andConditions } : {};
            const orQuery = orConditions.length > 0 ? { $or: orConditions } : {};
            const finalQuery = { ...andQuery, ...orQuery };
            return await this.repository.find({ where: finalQuery });
        }
        catch (error) {
            console.error('Error finding by attributes:', error);
            throw new exception_handler_1.Exception(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Error finding by attributes');
        }
    }
    async findBetweenDates(firstDate, lastDate, otherCondition) {
        const now = new Date().toISOString();
        try {
            const dateQuery = {
                [firstDate]: { $lte: now },
            };
            if (lastDate) {
                dateQuery[lastDate] = { $gt: now };
            }
            else {
                dateQuery[firstDate] = { $lt: now };
            }
            if (otherCondition) {
                Object.assign(dateQuery, otherCondition);
            }
            console.log('dateQuery', dateQuery);
            return await this.repository.find({ where: { $and: [dateQuery] } });
        }
        catch (error) {
            console.error('Error finding by dates:', error);
            throw new exception_handler_1.Exception(http_status_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Error finding by dates');
        }
    }
}
exports.GenericSM = GenericSM;
//# sourceMappingURL=generic.sm.js.map