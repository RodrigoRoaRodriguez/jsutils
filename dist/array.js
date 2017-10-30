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
// input: a header and an unlabeled data array.
// output: data objects with properties for each element in the data array.
function dataArrayToObjects(header, dataAsArrays) {
    // Create a constructor for the object
    function DynamicDatum(values) {
        var _this = this;
        header.forEach(function (headerProperty, i) { return _this[headerProperty] = values[i]; });
    }
    ;
    return dataAsArrays.map(function (dataRow) { return new DynamicDatum(dataRow); });
}
exports.dataArrayToObjects = dataArrayToObjects;
// input: an array 
// output: a function that has: input: a property name string, output: the property values of the array
exports.arrayGetter = function (array) { return function (attr) { return array.map(function (element) { return element[attr]; }); }; };
