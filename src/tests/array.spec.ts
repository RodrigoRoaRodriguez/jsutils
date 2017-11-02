import {arraysToObjects, arrayGetter} from '../array';
import { expect } from 'chai';
import 'mocha';

// TODO: test the following
// range
// elementwise
// map2d
// flatten
// combinations

describe('arraysToObjects function', () => {
  let header = ['x', 'y'];
  let data = [[1, 1], [2, 3], [4, 5], [6, 7]];
  
  it('creates an object DynamicDatum type', () => {
    interface Function { name: string; } // name is a missing ES6 property. 
    const result: Function = arraysToObjects([], [['']])[0].constructor;
    expect(result.name).to.equal('DynamicDatum');
  });
  
  const objects = arraysToObjects(header, data);
  it('create objects with the right properties', () => {
    objects.map(object => expect(object).to.have.all.keys(...header));
  });

  it('create objects with the right values', () => {
    // If it throws: `TypeError: Object.values is not a function` your Node 
    // version is too old and you need to upgrade it.
    expect(objects.map(obj => (Object as any).values(obj))).to.deep.equal(data);
    // expect(objects.map(obj => (Object as any).values(obj))).to.deep.equal(data);
  });
});

describe('arrayGetter function', () => {
  let data = [{x:0,y:1},{x:2,y:3},{x:4,y:5},{x:6,y:7},{x:8,y:9}];
  let getter = arrayGetter(data);
  it('returns the right values', () => {
    let yValues = getter`y`;
    expect(yValues).to.deep.equal([1,3,5,7,9]);
  });
})
// arrayGetter
