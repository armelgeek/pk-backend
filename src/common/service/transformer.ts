import { ObjectID } from 'mongodb';
import { dataTDO } from '../../data';

export const toObjectID = (data, name) => {
  let newData = data;
  if (Array.isArray(dataTDO[name]?.attributes)) {
    newData = dataTDO[name].attributes.reduce((acc, { isID, key, type }) => {
      let newAcc = acc;
      if (isID && acc && acc[key]) {
        newAcc = {
          ...newAcc,
          [key]: Array.isArray(acc[key]) ? acc[key].map((ID) => new ObjectID(ID)) : new ObjectID(acc[key]),
        }
      } else if(type === 'date') {
        newAcc = {
          ...newAcc,
          [key]: new Date(acc[key]),
        }
      }
      return newAcc;
    }, data);
  }

  return newData;
};
