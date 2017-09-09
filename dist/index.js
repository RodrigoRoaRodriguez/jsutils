"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var aggregates_1 = require("./aggregates");
// TODO: make this into an NPM package.
__export(require("./aggregates"));
// TODO: add linear regression.
function decamelize(string) {
    return string
        .replace(/([A-Z0-9])/g, ' $1')
        .replace(/^./, function (char) { return char.toUpperCase(); });
}
exports.decamelize = decamelize;
function normalize(array) {
    var total = aggregates_1.sum(array);
    return array.map(function (n) { return n / total; });
}
exports.normalize = normalize;
function percentalize(array) {
    return normalize(array).map(function (n) { return n * 100; });
}
exports.percentalize = percentalize;
// TODO: rename to arrayUtils and create an objectUtils.
function range(count, offset, step) {
    if (offset === void 0) { offset = 0; }
    if (step === void 0) { step = 1; }
    return Array(count).fill().map(function (_, i) { return i * step + offset; });
}
exports.range = range;
function elementwise(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args[0].map(function (_, i, arrays) { return fn(arrays.map(function () { return arrays[i]; })); });
}
exports.elementwise = elementwise;
function map2d(arrayOfArrays, fn) {
    return arrayOfArrays.map(function (outerValue, outerIndex, outerArray) {
        return outerValue.map(function (value, index, array) {
            return fn(value, index, array, outerIndex, outerArray);
        });
    });
}
exports.map2d = map2d;
// TODO: create misc utils file and move this function there.
function getOrdinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
exports.getOrdinal = getOrdinal;
function round(number, decimals) {
    if (decimals === void 0) { decimals = 0; }
    return +(Math.round(+(number + "e" + decimals)) + "e-" + decimals);
}
exports.round = round;
// TODO: do this recursively for an arbitrary number of nesting levels
function flatten(arrayOfArrays) {
    return [].concat.apply([], arrayOfArrays);
}
exports.flatten = flatten;
// TODO: do this recursively for an arbitrary number of arrays
function combinations(arrayOfArrays) {
    return flatten(arrayOfArrays[0].map(function (a) { return arrayOfArrays[1].map(function (b) { return [a, b]; }); }));
}
exports.combinations = combinations;
// export function combinations(arg) {
//   const keys = Object.keys(arg);
//   const values = keys.map(key => arg[key]);
//   return values[0].map(a => values[1].map(b => ({ [keys[0]]: a, [keys[1]]: b })));
// }
