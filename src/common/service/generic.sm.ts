import {
  AggregationCursor,
  DeepPartial,
  FindConditions,
  FindManyOptions,
  MongoRepository,
  ObjectLiteral,
} from 'typeorm';
import { ObjectID } from 'mongodb';
import { HttpStatus } from '../../data/constants/http-status';
import { Exception } from '../../service/middleware/exception-handler';

export abstract class GenericSM<TDo, TId, TRepository extends MongoRepository<TDo>> {
  protected repository: TRepository;

  constructor(repository: TRepository) {
    this.repository = repository;
  }

  async create(entity: DeepPartial<TDo>): Promise<any> {
    return await this.repository.save({...entity, createdAt: new Date()});
  }

  async partialUpdate(_id: ObjectID, partialEntity: DeepPartial<TDo>): Promise<any> {
    try {
      const option = { upsert: true, new: true, setDefaultsOnInsert: true };
      const updated = await this.repository.findOneAndUpdate(
        { _id },
        { $set: partialEntity },
        option,
      );

      return updated;
    } catch (error) {
      console.log({ error });
      return Promise.reject(error);
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

      return updated;
    } catch (error) {
      console.log({ error });
      return Promise.reject(error);
    }
  }

  async update(_id: ObjectID, partialEntity: DeepPartial<TDo>): Promise<any> {
    try {
      const updated = await this.repository.updateOne({ _id }, partialEntity);

      return updated;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateMany(query: DeepPartial<TDo>, partialEntity: DeepPartial<TDo>): Promise<any> {
    try {
      const updated = await this.repository.updateMany(query, partialEntity);

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

  findByIds(ids: TId[], options: FindManyOptions<TDo>) {
    return this.repository.findByIds(ids, options);
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
      aggregate = [],
    } = options;

    const aggregate_search = search ? { $text: { $search: search } } : {};
    const { userId, utilisateurId, ...whereOut } = where;
    const sort_aggregate = sortField ? { [sortField]: order } : { name: 1 };

    return this.repository
      .aggregate([
        { $match: { ...whereOut, ...aggregate_search }},
        ...aggregate,
        { $sort: { ...sort_aggregate } },
        {
          $facet: {
            metadata: [{ $count: 'total' }],
            data: [{ $skip: Number(skip) }, { $limit: Number(take) }],
          },
        },
      ])
      .toArray();
  }

  async count(query: ObjectLiteral): Promise<any> {
    return await this.repository.count(query);
  }

  async find(): Promise<any> {
    return this.repository.find();
  }

  sum(options, name): AggregationCursor<any> {
    const {
      take = 10000,
      skip = 0,
      where = {},
    } = options;

    const { userId, utilisateurId, ...whereOut } = where;

    console.log(' bgggg sdcl,sdmcvndslm ds,cmsdnv ====================================');
    console.log(whereOut);
    console.log('====================================');
    return this.repository
      .aggregate([
        { $match: { ...whereOut }},
        {
          $groupe: {
            _id: null,
            "donorsCount": { $sum: '$donorsCount' }
          },
        },
      ])
  }
}
