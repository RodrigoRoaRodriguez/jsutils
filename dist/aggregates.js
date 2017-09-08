(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
});
