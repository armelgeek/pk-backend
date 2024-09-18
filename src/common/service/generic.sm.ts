import {
  DeepPartial,
  FindConditions,
  FindManyOptions,
  MongoRepository,
  ObjectLiteral,
} from 'typeorm';
import { ObjectID } from 'mongodb';
import { HttpStatus } from '../../data/constants/http-status';
import { Exception } from '../../service/middleware/exception-handler';
import * as moment from 'moment';

export abstract class GenericSM<TDo, TId, TRepository extends MongoRepository<TDo>> {
  protected repository: TRepository;

  constructor(repository: TRepository) {
    this.repository = repository;
  }

  async create(entity: DeepPartial<TDo>): Promise<any> {
    return await this.repository.save({ ...entity, createdAt: new Date(), lastActivityAt: new Date() });
  }

  async partialUpdate(_id: ObjectID, partialEntity: DeepPartial<TDo>): Promise<any> {
    try {
      const option = { upsert: true, new: true, setDefaultsOnInsert: true };
      const updated = await this.repository.findOneAndUpdate(
        { _id },
        { $set: {...partialEntity, lastActivityAt: new Date()} },
        option,
      );

      return updated;
    } catch (error) {
      console.log({ error });
      return Promise.reject(error);
    }
  }

  async updateFields(_id: ObjectID, updateData: any): Promise<any> {
    try {
      const result = await this.repository.updateOne(
        { _id: new ObjectID(_id) },
        { $set: {...updateData, lastActivityAt: new Date()} },
      );

      if (result.modifiedCount === 0) {
        throw new Error('Document non trouvé ou aucune mise à jour effectuée');
      }

      return result;
    } catch (error) {
      console.error('Erreur lors de la mise à jour des champs:', error);
      throw new Error(`La mise à jour a échoué : ${error.message}`);
    }
  }

  async pushUpdate(_id: ObjectID, partialEntity: DeepPartial<TDo>): Promise<any> {
    try {
      const option = { upsert: true, new: true, setDefaultsOnInsert: true };
      const updated = await this.repository.findOneAndUpdate(
        { _id },
        { $push: partialEntity },
        option,
      );
      await this.repository.updateOne({ _id }, { lastActivityAt: new Date() });
      return updated;
    } catch (error) {
      console.log({ error });
      return Promise.reject(error);
    }
  }

  async update(_id: ObjectID, partialEntity: DeepPartial<TDo>): Promise<any> {
    try {
      const updated = await this.repository.updateOne({ _id }, {...partialEntity, lastActivityAt: new Date()});

      return updated;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateMany(query: DeepPartial<TDo>, partialEntity: DeepPartial<TDo>): Promise<any> {
    try {
      const updated = await this.repository.updateMany(query, {...partialEntity, lastActivityAt: new Date()});

      return updated;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async delete(id: ObjectID): Promise<any> {
    try {
      const affected = await this.repository.delete(id);
      if (affected) {
        return id;
      }
      throw new Exception(HttpStatus.BAD_REQUEST, `id: ${id} introuvable`);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  findByIdAggregate(aggregate: any[]): Promise<any> {
    return this.repository.aggregate(aggregate).toArray();
  }

  findById(_id: ObjectID): Promise<any> {
    return this.repository.findOne(_id);
  }

  findByIds(ids: TId[], options?: FindManyOptions<TDo>) {
    return this.repository.findByIds(ids);
  }

  findOne(option: FindConditions<TDo>): Promise<TDo> {
    return this.repository.findOneOrFail(option);
  }

  findOneWithRelation(options): Promise<any> {
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

  findOneNotFail(option: FindConditions<TDo>): Promise<TDo> {
    return this.repository.findOne(option);
  }

  findAll(options, name): Promise<any> {
    const {
      take = 10,
      skip = 0,
      order = 1,
      sortField,
      where = {},
      search,
      relation,
      match,
      exists,
      no_exists,
      aggregate = [],
      new__Queries,
    } = options;

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
        ...search_query,
        ...aggregate,
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

  async count(query: ObjectLiteral): Promise<any> {
    return await this.repository.count(query);
  }

  async find(): Promise<any> {
    return this.repository.find();
  }

  async findByQueries(queries): Promise<any> {
    return this.repository.find({ where: queries });
  }

  sum(options, name): Promise<any> {
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

  async findByAttributes(
    andConditions: FindConditions<TDo>[],
    orConditions: FindConditions<TDo>[],
  ): Promise<TDo[]> {
    try {
      const andQuery = andConditions.length > 0 ? { $and: andConditions } : {};
      const orQuery = orConditions.length > 0 ? { $or: orConditions } : {};
      const finalQuery = { ...andQuery, ...orQuery };

      return await this.repository.find({ where: finalQuery });
    } catch (error) {
      console.error('Error finding by attributes:', error);
      throw new Exception(HttpStatus.INTERNAL_SERVER_ERROR, 'Error finding by attributes');
    }
  }
  async findBetweenDates(
    firstDate: string,
    lastDate?: string,
    otherCondition?: any,
  ): Promise<TDo[]> {
    const now = new Date().toISOString();
    try {
      const dateQuery: any = {
        [firstDate]: { $lte: now },
      };

      if (lastDate) {
        dateQuery[lastDate] = { $gt: now };
      } else {
        dateQuery[firstDate] = { $lt: now };
      }

      if (otherCondition) {
        Object.assign(dateQuery, otherCondition);
      }
      console.log('dateQuery', dateQuery);
      return await this.repository.find({ where: { $and: [dateQuery] } });
    } catch (error) {
      console.error('Error finding by dates:', error);
      throw new Exception(HttpStatus.INTERNAL_SERVER_ERROR, 'Error finding by dates');
    }
  }
}
