import { ObjectID } from 'mongodb';
import { LocationElementId, dataTDO } from '../../data';

export const factoryObject = (data, name) => {
  const keys = Object.keys(data);
  let newData = data;
  if (Array.isArray(dataTDO[name]?.attributes)) {
    newData = dataTDO[name].attributes
      .filter((attribute) => keys.includes(attribute.key))
      .reduce((acc, { isID, key, type }) => {
        let newAcc = acc;
        if (isID && acc && acc[key]) {
          newAcc = {
            ...newAcc,
            [key]: Array.isArray(acc[key])
              ? acc[key].map((ID) => new ObjectID(ID))
              : new ObjectID(acc[key]),
          };
        } else if (type === 'date') {
          newAcc = {
            ...newAcc,
            [key]: new Date(acc[key]),
          };
        }
        else if (type?.$ref === LocationElementId && acc[key]?.latitude && acc[key]?.longitude) {
          newAcc = {
            ...newAcc,
            [key]: {
              "type": "Point",
              "coordinates": [
                acc[key]?.latitude,
                acc[key]?.longitude,
              ]
            },
          };
        } else if (type === 'boolean') {
          newAcc = {
            ...newAcc,
            [key]: typeof acc[key] === "boolean" ? acc[key] : acc[key] === 'true' ? true : false,
          };
        }
        return newAcc;
      }, data);
  }

  return newData;
};

export const toQueryOr = (query, name) => {
  const queries = JSON.parse(query['$or']);
  return {
    $or: queries?.map((item) => factoryObject(item, name)),
  };
};
