// TODO: make this into an NPM package.
export * from './src/aggregates';
// TODO: add linear regression.

// TODO: rename to arrayUtils and create an objectUtils.
export function range(count) {
  return Array(count).fill().map((_, i) => i);
}

export function elementwise(fn, ...args) {
  return args[0].map((_, i, arrays) => fn(arrays.map(() => arrays[i])));
}

export function map2d(arrayOfArrays, fn) {
  return arrayOfArrays.map((outerValue, outerIndex, outerArray) =>
    outerValue.map((value, index, array) =>
      fn(value, index, array, outerIndex, outerArray)));
}

// TODO: create misc utils file and move this function there.
export function getOrdinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}


// TODO: do this recursively for an arbitrary number of nesting levels
export function flatten(arrayOfArrays) {
  return [].concat(...arrayOfArrays);
}

// TODO: do this recursively for an arbitrary number of arrays
export function combinations(arrayOfArrays) {
  return flatten(arrayOfArrays[0].map(a => arrayOfArrays[1].map(b => [a, b])));
}

// export function combinations(arg) {
//   const keys = Object.keys(arg);
//   const values = keys.map(key => arg[key]);

//   return values[0].map(a => values[1].map(b => ({ [keys[0]]: a, [keys[1]]: b })));
// }
