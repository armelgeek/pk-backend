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

  async update(_id: ObjectID, partialEntity: DeepPartial<TDo>): Promise<any> {
    try {
      const updated = await this.repository.updateOne({ _id }, partialEntity);

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
    const { userId, utilisateurId, profileId, ...match } = where;
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
      take = 100,
      skip = 1,
      order,
      where = {},
      search,
      relation,
      match,
      aggregate = [{ $match: {} }],
    } = options;
    const aggregate_search = search ? { $text: { $search: search } } : {};
    const { userId, utilisateurId, profileId, ...whereOut } = where;
    return this.repository
      .aggregate([
        { $match: aggregate_search },
        ...aggregate,
        { $match: whereOut },
        { $sort: { nom: 1 } },
        {
          $facet: {
            metadata: [{ $count: 'total' }, { $addFields: { page: 10 } }],
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
}
