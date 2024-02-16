import { FindConditions, MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

import { GenericFactory } from '../constraint/factory/generic.factory';
import { GenericSM } from './generic.sm';
import { toObjectID } from './transformer';

import { dataTDO } from '../../data';

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
      const result = await this.serviceSM.create(toObjectID(entity, this.name));

      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async update(id: ObjectID, dto: TRequestDto): Promise<any> {
    try {
      const entity = this.factory.toDo(dto);

      const result = await this.serviceSM.update(id, toObjectID(entity, this.name));

      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async partialUpdate(id: ObjectID, partialEntity): Promise<any> {
    try {

      const result = await this.serviceSM.partialUpdate(new ObjectID(id), toObjectID(partialEntity, this.name));

      return this.factory.toResponseDto(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  delete(id: ObjectID): Promise<any> {
    return this.serviceSM.delete(id);
  }

  async findById(id: ObjectID): Promise<any> {
    try {
      const properties = dataTDO[this.name]?.attributes;
      let aggregate = [{ $match: { _id: new ObjectID(id) } }, { $limit: 1 }]
      if (properties) {
        const toAggrecate = properties.filter(({ isID, entity }) => isID && entity?.name)
          .reduce((acc, { name, entity, isArray }) => {
            // return ({ isArray, ...entity });
            let lookup2 = [];
            const lookup = {
              $lookup: {
                from: entity?.name?.toLowerCase(),
                localField: name,
                foreignField: '_id',
                as: name
              },
            }
            let results = acc;
            if (isArray) {
              results = [...results, lookup];
            } else {
              results = [...results, lookup, {
                "$unwind": {
                  "path": `$${name}`,
                  "preserveNullAndEmptyArrays": true
                },
              }];
            }
            if (Array.isArray(dataTDO[entity?.name]?.attributes)) {
              lookup2 = dataTDO[entity?.name]?.attributes.filter(({ isID, entity }) => isID && entity?.name).reduce((acc1, lp2) => {
                if (isArray && lp2?.isArray) {
                  return [
                    ...acc1,
                    {
                      $addFields: {
                        [`${name}_${lp2.name}`]: {
                          $reduce: {
                            input: `$${name}` || [],
                            initialValue: [],
                            'in': {
                              $concatArrays: [
                                '$$value',
                                `$$this.${lp2.name}`,
                              ]
                            }
                          }
                        }
                      }
                    },
                    {
                      $lookup: {
                        from: lp2?.entity?.name?.toLowerCase(),
                        localField: `${name}_${lp2.name}`,
                        foreignField: '_id',
                        as: `${name}_${lp2.name}`
                      },
                    }
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
                        as: `${name}_${lp2.name}`
                      },
                    },
                    {
                      "$unwind": {
                        "path": `$${name}_${lp2.name}`,
                        "preserveNullAndEmptyArrays": true
                      }
                    }
                  ]
                }
                return [
                  ...acc1,
                  {
                    $lookup: {
                      from: lp2?.entity?.name?.toLowerCase(),
                      localField: `${name}.${lp2.name}`,
                      foreignField: '_id',
                      as: `${name}_${lp2.name}`
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
        return result[0]
      }
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findOne(option: FindConditions<TDo>) {
    try {

      const result = await this.serviceSM.findOne(toObjectID(option, this.name));

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
      let aggregate = [{ $match: {} }]
      if (!bo && properties) {
        const toAggrecate = properties.filter(({ isID, entity }) => isID && entity?.name)
          .reduce((acc, { name, entity, isArray }) => {
            const lookup = {
              $lookup: {
                from: entity?.name?.toLowerCase(),
                localField: name,
                foreignField: '_id',
                as: name
              },
            }
            if (isArray) {
              return [...acc, lookup];
            } else {
              return [...acc, lookup, {
                "$unwind": {
                  "path": `$${name}`,
                  "preserveNullAndEmptyArrays": true
                },
              }];
            }

          }, [])
        aggregate = [...aggregate, ...toAggrecate];

      }
      if (queries && Array.isArray(Object.keys(queries)) && properties) {
        newQueries = Object.keys(queries).reduce((acc, key) => {
          const isExist = properties.find((propertie) => propertie?.key === key);
          if (isExist && isExist?.isID && ObjectID.isValid(queries[key])) {
            return {
              ...acc,
              [`${key}._id`]: new ObjectID(queries[key])
            }
          } else if (key?.split('__')?.length === 2) {
            if (ObjectID.isValid(queries[key])) {
              return {
                ...acc,
                [key.replace('__', '.')]: new ObjectID(queries[key]),
              }
            }
            return {
              ...acc,
              [key.replace('__', '.')]: { $regex: new RegExp(queries[key], 'i') }
            }
          }
          return {
            ...acc,
            [key]: { $regex: new RegExp(queries[key]) }
          };
        }, {})
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
      const { take, skip, direction, sortField, relation, search, match, bo, queries } = options;
      let newQueries = queries;
      const properties = dataTDO[this.name]?.attributes;
      let aggregate = [{ $match: {} }]
      if (!bo && properties) {
        const toAggrecate = properties.filter(({ isID, entity }) => isID && entity?.name)
          .reduce((acc, { name, entity, isArray }) => {
            const lookup = {
              $lookup: {
                from: entity?.name?.toLowerCase(),
                localField: name,
                foreignField: '_id',
                as: name
              },
            }
            if (!isArray) {
              return [...acc, lookup, {
                "$unwind": {
                  "path": `$${name}`,
                  "preserveNullAndEmptyArrays": true
                },
              }]
            }
            return [...acc, lookup];
          }, [])
        aggregate = [...aggregate, ...toAggrecate];
      }

      if (queries && Array.isArray(Object.keys(queries)) && properties) {
        newQueries = Object.keys(queries).reduce((acc, key) => {
          const isExist = properties.find((propertie) => propertie?.key === key);
          if (isExist && isExist?.isID && ObjectID.isValid(queries[key])) {
            return {
              ...acc,
              [`${key}._id`]: new ObjectID(queries[key])
            }
          } else if (key?.split('__')?.length === 2) {
            if (ObjectID.isValid(queries[key])) {
              return {
                ...acc,
                [key.replace('__', '.')]: new ObjectID(queries[key]),
              }
            }
            return {
              ...acc,
              [key.replace('__', '.')]: { $regex: new RegExp(queries[key], 'i') }
            }
          }
          return {
            ...acc,
            [key]: { $regex: new RegExp(queries[key]) }
          };
        }, {})
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
        },
        this.name,
      );

      const items = this.factory.toResponseDto(data[0]?.data || []);

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
}
