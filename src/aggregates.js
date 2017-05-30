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
