import { FindConditions, MongoRepository, ObjectLiteral } from 'typeorm';
import { ObjectID } from 'mongodb';

import { GenericFactory } from '../constraint/factory/generic.factory';
import { GenericSM } from './generic.sm';
import { factoryObject, toQueryAnd, toQueryOr } from './transformer';

import { dataTDO } from '../../data';
import { removeId } from '../../utils';

export abstract class GenericSA<
  TDo,
  TRequestDto,
  TResponseDto,
  TSm extends GenericSM<TDo, number | string | ObjectID, MongoRepository<TDo>>,
  TFactory extends GenericFactory<TDo, TRequestDto, TResponseDto>
> {
  protected serviceSM: TSm;

  protected factory: TFactory;

  protected name: string;

  constructor(serviceSM: TSm, factory: TFactory, name: string) {
    this.serviceSM = serviceSM;
    this.factory = factory;
    this.name = name;
  }

  async create(dto: TRequestDto | TRequestDto[]): Promise<TResponseDto> {
    try {
      const entity = this.factory.toDo(dto);
      const result = await this.serviceSM.create(factoryObject(entity, this.name));
  
      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async update(id: ObjectID, dto: TRequestDto): Promise<any> {
    try {
      const entity = this.factory.toDo(dto);

      const result = await this.serviceSM.update(id, factoryObject(entity, this.name));

      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateMany(query: TRequestDto, dto: TRequestDto): Promise<any> {
    try {
      const entity = this.factory.toDo(dto);
      const data = this.factory.toDo(query);

      const result = await this.serviceSM.updateMany(
        factoryObject(data, this.name),
        factoryObject(entity, this.name),
      );

      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async partialUpdate(id: ObjectID, partialEntity): Promise<any> {
    try {
      const result = await this.serviceSM.partialUpdate(
        new ObjectID(id),
        factoryObject(partialEntity, this.name),
      );
      return { id, update: result?.ok };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async pushUpdate(id: ObjectID, partialEntity): Promise<any> {
    try {
      const result = await this.serviceSM.pushUpdate(
        new ObjectID(id),
        factoryObject(partialEntity, this.name),
      );
      return { id, update: result?.ok };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  updateFields(id: ObjectID, partialEntity): Promise<any> {
    return this.serviceSM.updateFields(id, partialEntity);
  }
  delete(id: ObjectID): Promise<any> {
    return this.serviceSM.delete(id);
  }

  async findByIds(ids: string[], options?: any): Promise<any> {
    try {
      const result = await this.serviceSM.findByIds(ids, options);

      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findById(id: ObjectID): Promise<any> {
    try {
      const properties = dataTDO[this.name]?.attributes;
      let aggregate = [{ $match: { _id: new ObjectID(id) } }, { $limit: 1 }];
      if (properties) {
        const toAggrecate = properties
          .filter(({ isID, entity }) => isID && entity?.name)
          .reduce((acc, { name, entity, isArray }) => {
            let lookup2 = [];
            const lookup = {
              $lookup: {
                from: entity?.name?.toLowerCase(),
                localField: name,
                foreignField: '_id',
                as: name,
              },
            };
            let results = acc;
            if (isArray) {
              results = [...results, lookup];
            } else {
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
            if (Array.isArray(dataTDO[entity?.name]?.attributes)) {
              lookup2 = dataTDO[entity?.name]?.attributes
                .filter(({ isID, entity }) => isID && entity?.name)
                .reduce((acc1, lp2) => {
                  if (isArray && lp2?.isArray) {
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
                          from: lp2?.entity?.name?.toLowerCase(),
                          localField: `${name}_${lp2.name}`,
                          foreignField: '_id',
                          as: `${name}_${lp2.name}`,
                        },
                      },
                    ];
                  }
                  if (!lp2?.isArray) {
                    return [
                      ...acc1,
                      {
                        $lookup: {
                          from: lp2?.entity?.name?.toLowerCase(),
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
                        from: lp2?.entity?.name?.toLowerCase(),
                        localField: `${name}.${lp2.name}`,
                        foreignField: '_id',
                        as: `${name}_${lp2.name}`,
                      },
                    },
                  ];
                }, []);
              if (lookup2?.length > 0) {
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
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findOne(option: FindConditions<TDo>) {
    try {
      const result = await this.serviceSM.findOne(factoryObject(option, this.name));

      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findOneWithRelation(options: any) {
    try {
      const { search, match, bo, queries } = options;
      let newQueries = queries;
      const properties = dataTDO[this.name]?.attributes;
      let aggregate = [{ $match: {} }];
      if (!bo && properties) {
        const toAggrecate = properties
          .filter(({ isID, entity }) => isID && entity?.name)
          .reduce((acc, { name, entity, isArray }) => {
            const lookup = {
              $lookup: {
                from: entity?.name?.toLowerCase(),
                localField: name,
                foreignField: '_id',
                as: name,
              },
            };
            if (isArray) {
              return [...acc, lookup];
            } else {
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
          const isExist = properties.find((propertie) => propertie?.key === key);
          if (isExist && isExist?.isID && ObjectID.isValid(queries[key])) {
            return {
              ...acc,
              [`${key}._id`]: new ObjectID(queries[key]),
            };
          } else if (key?.split('__')?.length === 2) {
            if (ObjectID.isValid(queries[key])) {
              return {
                ...acc,
                [key.replace('__', '.')]: new ObjectID(queries[key]),
              };
            }
            return {
              ...acc,
              [key.replace('__', '.')]: { $regex: new RegExp(queries[key], 'i') },
            };
          }
          if (ObjectID.isValid(queries[key])) {
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
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findOneNotFail(option: FindConditions<TDo>) {
    try {
      const result = await this.serviceSM.findOneNotFail(option);

      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findAll(options): Promise<any> {
    try {
      const {
        take,
        skip,
        sortField,
        order,
        relation,
        search,
        match,
        bo,
        queries,
        lookup,
        geoNear,
        exists,
        no_exists,
        sort,
      } = options;
      let newQueries = queries;
      let new__Queries = {};
      const properties = dataTDO[this.name]?.attributes;

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
          .filter(({ isID, entity }) => isID && entity?.name)
          .reduce((acc, { name, entity, isArray }) => {
            const lookup = {
              $lookup: {
                from: entity?.name?.toLowerCase(),
                localField: name,
                foreignField: '_id',
                as: removeId(name),
              },
            };

            if (!isArray) {
              return [
                ...acc,
                lookup,
                {
                  $unwind: {
                    path: `$${removeId(name)}`,
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
          const isExist = properties.find((propertie) => propertie?.key === key);
          if (key?.split('__')?.length === 2) {
            return {
              ...acc,
            };
          } else if (key === '$or') {
            return {
              ...acc,
              ...toQueryOr(queries[key], this.name),
            };
          } else if (key === '$and') {
            return {
              ...acc,
              ...toQueryAnd(queries[key], this.name),
            };
          } else if (isExist && isExist?.isID && ObjectID.isValid(queries[key])) {
            if (Array.isArray(queries[key])) {
              return {
                ...acc,
                [key.replace('__', '.')]: { $in: queries[key].map((id) => new ObjectID(id)) },
              };
            }
            return {
              ...acc,
              [`${key}`]: new ObjectID(queries[key]),
            };
          } else if (key?.split('_lte')?.length === 2) {
            return {
              ...acc,
              [key?.split('_lte')[0]]: { $lte: new Date(queries[key]) },
            };
          } else if (key?.split('_gte')?.length === 2) {
            const keySplit = key?.split('_gte');
            return {
              ...acc,
              [keySplit[0]]: { $gte: new Date(queries[key]) },
            };
          } else if (isExist && isExist.type === 'boolean') {
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

          if (ObjectID.isValid(queries[key])) {
            return {
              ...acc,
              [key]: ObjectID(queries[key]),
            };
          }

          return {
            ...acc,
            [key]: { $regex: new RegExp(queries[key]) },
          };
        }, {});

        new__Queries = Object.keys(queries).reduce((acc, key) => {
          if (key?.split('__')?.length === 2) {
            const row = key?.split('__')[1];
            if (ObjectID.isValid(queries[key])) {
              return {
                ...acc,
                [key.replace('__', '.')]: new ObjectID(queries[key]),
              };
            } else if (row?.split('_lte')?.length === 2) {
              const row_row = `${key?.split('__')[0]}.${row?.split('_lte')[0]}`;
              return {
                ...acc,
                [row_row]: { $lte: new Date(queries[key]) },
              };
            } else if (row?.split('_gte')?.length === 2) {
              const row_row = `${key?.split('__')[0]}.${row?.split('_gte')[0]}`;
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

      const data = await this.serviceSM.findAll(
        {
          relation,
          search,
          take,
          skip,
          match,
          aggregate,
          where: newQueries,
          new__Queries: new__Queries,
          order,
          sortField,
          exists,
          no_exists,
        },
        this.name,
      );

      // const items = this.factory.toResponseDto(data[0]?.data || []);
      const items = (data[0]?.data || []).map(({ _id, ...item }) => ({ id: _id, ...item }));

      const totalCount = data[0]?.metadata[0]?.total;

      return {
        items,
        totalCount,
        ...(!Number.isNaN(take) && !Number.isNaN(skip)
          ? { hasNext: take * (skip / take + 1) < totalCount }
          : {}),
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findByQueries(queries): Promise<any> {
    return this.serviceSM.findByQueries(queries);
  }

  async count(query: ObjectLiteral): Promise<number> {
    try {
      let queryOr = {};
      if (query['$or']) {
        queryOr = toQueryOr(query, this.name);
      }
      const result = await this.serviceSM.count({ ...factoryObject(query, this.name), ...queryOr });

      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async find(): Promise<any> {
    try {
      const data = await this.serviceSM.find();
      const items = this.factory.toResponseDto(data || []);
      return items;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async sum(options): Promise<any> {
    try {
      const { take, skip, sortField, order, relation, search, match, queries, field } = options;
      let newQueries = queries;
      const data = await this.serviceSM.sum(
        {
          relation,
          search,
          take,
          skip,
          match,
          where: newQueries,
          order,
          sortField,
        },
        this.name,
      );

      const sum = (data[0]?.data || []).reduce((acc, curr) => {
        if (!isNaN(curr[field])) {
          return acc + curr[field];
        }
        return acc;
      }, 0);

      const totalCount = data[0]?.metadata[0]?.total;

      return {
        sum,
        totalCount,
      };
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async findByAttributes(andConditions, orConditions): Promise<any> {
    try {
      const data = await this.serviceSM.findByAttributes(andConditions, orConditions);
      return this.factory.toResponseDto(data || []);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findBetweenDates(firstDate: string, lastDate?: string, otherCondition?: any): Promise<any> {
    try {
      const data = await this.serviceSM.findBetweenDates(firstDate, lastDate, otherCondition);
      return this.factory.toResponseDto(data || []);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
