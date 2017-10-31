import {dataArrayToObjects} from './array';
import { expect } from 'chai';
import 'mocha';



// TODO: test 
// range
// elementwise
// map2d
// flatten
// combinations

describe('dataArrayToObjects function', () => {
  let header = ['x', 'y'];
  let data = [[1, 1], [2, 3], [4, 5], [6, 7]];
  
  it('creates an object DynamicDatum type', () => {
    interface Function { name: string; } // name is a missing ES6 property. 
    const result: Function = dataArrayToObjects([], [['']])[0].constructor;
    expect(result.name).to.equal('DynamicDatum');
  });
  
  const objects = dataArrayToObjects(header, data);
  it('create objects with the right properties', () => {
    objects.map(object => expect(object).to.have.all.keys(...header));
  });

  it('create objects with the right values', () => {
    expect(objects.map(obj => (Object as any).values(obj))).to.deep.equal(data);
  });
});
// dataArrayToObjects
// arrayGetter

