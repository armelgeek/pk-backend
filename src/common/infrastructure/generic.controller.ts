import { ObjectID as ObjectIDType, MongoRepository } from 'typeorm';
import { HttpStatus } from '../../data/constants/http-status';
import { GenericFactory } from '../constraint/factory/generic.factory';
import { GenericSA } from '../service/generic.sa';
import { GenericSM } from '../service/generic.sm';

export class GenericController<
  TDo,
  TRequestDto,
  TResponseDto,
  TSa extends GenericSA<
    TDo,
    TRequestDto,
    TResponseDto,
    GenericSM<TDo, string | number | ObjectIDType, MongoRepository<TDo>>,
    GenericFactory<TDo, TRequestDto, TResponseDto>
  >
> {
  serviceSA: TSa;

  constructor(serviceSA) {
    this.serviceSA = serviceSA;
  }

  /**
   * WS managing the creation of an entity
   */
  create = async (req, res, next) => {
    const { body } = req;
    try {
      const created = await this.serviceSA.create(body);

      res.locals.data = created;
      res.locals.statusCode = HttpStatus.CREATED;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the update of an entity
   */
  update = async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;
    try {
      const updated = await this.serviceSA.update(id, body);

      res.locals.data = updated;
      res.locals.statusCode = HttpStatus.OK;

      next();
    } catch (error) {
      next(error);
    }
  };

  partialUpdate = async (req, res, next) => {
    const {
      body,
      params: { id },
    } = req;
    try {
      const updated = await this.serviceSA.partialUpdate(id, body);

      res.locals.data = updated;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the deletion of an entity
   */
  delete = async (req, res, next) => {
    const {
      params: { id },
    } = req;
    try {
      const response = await this.serviceSA.delete(id);

      res.locals.data = response;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the recovery of an entity by its id
   */
  findById = async (req, res, next) => {
    const {
      params: { id },
    } = req;
    try {
      const found = await this.serviceSA.findById(id);

      res.locals.data = found;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the recovery of an entity by its Attributes
   */
  findByAttributes = async (req, res, next) => {
    const { params } = req;
    try {
      const found = await this.serviceSA.findOneNotFail(params);

      res.locals.data = found;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS returning list of all entitie
   */
  findAll = async (req, res, next) => {
    const {
      query: { page = 1, rowPerPage = 10, light, direction, sortField, match, recherche, ...queries },
    } = req;

    try {
      const dtos = await this.serviceSA.findAll({
        search: recherche,
        match,
        sortField,
        direction,
        queries,
        light: JSON.parse(light || 'true'),
        take: rowPerPage,
        skip: (page - 1) * rowPerPage,
      });

      res.locals.data = dtos;

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS returning the document meeting the specified criteria
   */
  findOne = async (req, res, next) => {
    const {
      query: { page, rowPerPage, light, direction, sortField, match, recherche, ...queries },
    } = req;
    try {
      const found = await this.serviceSA.findOneWithRelation({
        search: recherche,
        match,
        queries,
      });

      if (Array.isArray(found) && found.length > 0) {
        res.locals.data = found[0];
      } else {
        res.locals.data = false;
      }

      next();
    } catch (error) {
      next(error);
    }
  };

  /**
   * WS managing the count elements of an entity
   */
  count = async (req, res, next) => {
    const { query } = req;
    try {
      const params = await this.serviceSA.count(query);

      res.locals.data = params;
      res.locals.statusCode = HttpStatus.OK;

      next();
    } catch (error) {
      next(error);
    }
  };
}
