export const sum = (array, valueFn = id => id) =>
  array.map(valueFn).reduce((total, next) => total + next, 0);

export const mean = (array, valueFn = id => id) =>
 sum(array, valueFn) / array.length;

export const weightedMean = (array, valueFn = id => id, weightFn = id => id) =>
  sum(array, n => valueFn(n) * weightFn(n)) / sum(array, weightFn);

export const geometricMean = (array, valueFn = id => id) =>
  array.map(valueFn).reduce(
    (prev, next) => prev * next, 1) ** (1 / array.length
    );

export function normalize(array) {
  const total = sum(array);
  return array.map(n => n / total);
}
export function percentalize(array) {
  return normalize(array).map(n => n * 100);
}

// export function combinations(arg) {
//   const keys = Object.keys(arg);
//   const values = keys.map(key => arg[key]);

//   return values[0].map(a => values[1].map(b => ({ [keys[0]]: a, [keys[1]]: b })));
// }


// TODO: add linear regression.