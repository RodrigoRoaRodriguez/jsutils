"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = function (array, valueFn) {
    if (valueFn === void 0) { valueFn = function (id) { return id; }; }
    return array.map(valueFn).reduce(function (total, next) { return total + next; }, 0);
};
exports.mean = function (array, valueFn) {
    if (valueFn === void 0) { valueFn = function (id) { return id; }; }
    return exports.sum(array, valueFn) / array.length;
};
exports.weightedMean = function (array, valueFn, weightFn) {
    if (valueFn === void 0) { valueFn = function (id) { return id; }; }
    if (weightFn === void 0) { weightFn = function (id) { return id; }; }
    return exports.sum(array, function (n) { return valueFn(n) * weightFn(n); }) / exports.sum(array, weightFn);
};
exports.geometricMean = function (array, valueFn) {
    if (valueFn === void 0) { valueFn = function (id) { return id; }; }
    return Math.pow(array.map(valueFn).reduce(function (prev, next) { return prev * next; }, 1), (1 / array.length));
};
function normalize(array) {
    var total = exports.sum(array);
    return array.map(function (n) { return n / total; });
}
exports.normalize = normalize;
function percentalize(array) {
    return normalize(array).map(function (n) { return n * 100; });
}
exports.percentalize = percentalize;
// export function combinations(arg) {
//   const keys = Object.keys(arg);
//   const values = keys.map(key => arg[key]);
//   return values[0].map(a => values[1].map(b => ({ [keys[0]]: a, [keys[1]]: b })));
// }
// TODO: add linear regression. 
