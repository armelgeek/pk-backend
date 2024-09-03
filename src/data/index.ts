// @ts-ignore
const { ownedElements } = require('./Fragment.json');

export const todataTDO = (ownedElements) => ownedElements.filter(i => i._type === 'UMLClass').reduce((acc: any, { name, route, attributes, operations }) => {
  if(name == 'Publication') {
    attributes.push(
      {
        _type: 'UMLAttribute',
        _id: 'AAAAAAGPH3dXXXRg9C0',
        _parent: { '$ref': 'AAAAAAGN1UIvcq/6Ym4=' },
        name: 'isShared',
        type: 'boolean'
      },
      {
        _type: 'UMLAttribute',
        _id: 'AAAAAAGPH3dXXXRg9C1',
        _parent: { '$ref': 'AAAAAAGN1UIvcq/6Ym4=' },
        name: 'originalId',
        type: 'string',
        isID: true
      }
    );
  }else if(name == 'Notification') {

    attributes.push(
      {
        _type: 'UMLAttribute',
        _id: 'AAAAAAGHH3dXXXRg9C0',
        _parent: { '$ref': 'AAAAAAGN1UIvcq/6Ym4=' },
        name: 'receiver',
        type: 'string',
        isID: true
      }
    );
  }
  return {
    ...acc,
    [name]: {
      route,
      attributes: Array.isArray(attributes)
        ? attributes.map(({ name, bo, ...all }) => {
          let entity = {};
          if (all?.type?.$ref) {
            let getAll;
            const {
              name,
              operations,
            } = ownedElements.find(({ _id }) => _id === all?.type?.$ref) || {};
            if (Array.isArray(operations)) {
              getAll = operations.find(({ name }) => name === 'getAll');
            }
            if (getAll) {
              entity = {
                ...getAll,
                name,
              };
            }
          }
          return ({
            ...all,
            entity,
            name,
            key: name,
            columns: bo ? { Header: all.form, defaultCanSort: true } : false,
          });
        })
        : [],
      operations,
    }
  }
}, {});


export const dataTDO = todataTDO(ownedElements);

export const elements = ownedElements

export const LocationElementId = ownedElements.find(({ name }) => name === 'Location')?._id;

export const dataAggregates = {

}
