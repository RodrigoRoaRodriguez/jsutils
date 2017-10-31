
export function range(count: number, offset: number = 0, step: number = 1) {
  return (Array(count) as any).fill().map((_, i) => i * step + offset);
}

export function elementwise(fn, ...args) {
  return args[0].map((_, i, arrays) => fn(arrays.map(() => arrays[i])));
}

// TODO: do this recursively for an arbitrary number of dimensions
export function map2d(arrayOfArrays, fn) {
  return arrayOfArrays.map((outerValue, outerIndex, outerArray) =>
    outerValue.map((value, index, array) =>
      fn(value, index, array, outerIndex, outerArray)));
}

// TODO: do this recursively for an arbitrary number of nesting levels
export function flatten(arrayOfArrays): any[] {
  return [].concat(...arrayOfArrays);
}

// TODO: do this recursively for an arbitrary number of arrays
export function combinations(arrayOfArrays) {
  return flatten(arrayOfArrays[0].map(a => arrayOfArrays[1].map(b => [a, b])));
}

/**
 * Converts a minimal array representation of data and header into objects.
 * 
 * @param {string[]} header contains the property names
 * @param {any[][]} dataAsArrays contains the property values
 * @returns data objects with properties and values from the arrays
 */
export function dataArrayToObjects(header: string[], dataAsArrays: any[][]) {
  // Create a constructor for the object
  function DynamicDatum(this:any, values: any[]) {
    header.forEach((headerProperty, i) => this[headerProperty] = values[i]);
  };
  return dataAsArrays.map(dataRow => new DynamicDatum(dataRow));
}


/**
 * Creates an utility funciton for getting property values from an array.
 * 
 * @param {object[]} array  an array of objects 
 * @returns a function that returns an array of all the property values in the 
 *          object array for a given property name.
 */
export const arrayGetter = (array:object[]) => (attr:string) => array.map(element => element[attr]);