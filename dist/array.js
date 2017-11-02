"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// TODO: do this recursively for an arbitrary number of dimensions
function map2d(arrayOfArrays, fn) {
    return arrayOfArrays.map(function (outerValue, outerIndex, outerArray) {
        return outerValue.map(function (value, index, array) {
            return fn(value, index, array, outerIndex, outerArray);
        });
    });
}
exports.map2d = map2d;
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
/**
 * Converts a minimal array representation of data and header into objects.
 *
 * @param {string[]} header contains the property names
 * @param {any[][]} dataAsArrays contains the property values
 * @returns data objects with properties and values from the arrays
 */
function arraysToObjects(header, dataAsArrays) {
    // Create a constructor for the object
    function DynamicDatum(values) {
        var _this = this;
        header.forEach(function (headerProperty, i) { return _this[headerProperty] = values[i]; });
    }
    ;
    return dataAsArrays.map(function (dataRow) { return new DynamicDatum(dataRow); });
}
exports.arraysToObjects = arraysToObjects;
/**
 * Creates an utility funciton for getting property values from an array.
 *
 * @param {object[]} array  an array of objects
 * @returns a function that returns an array of all the property values in the
 *          object array for a given property name.
 */
function arrayGetter(array) {
    return function (attr) { return array.map(function (element) { return element[attr]; }); };
}
exports.arrayGetter = arrayGetter;
