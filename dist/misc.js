"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create normally capitalized string form camelcase strings.
 *
 * @export
 * @param {any} camelCasedString
 * @returns
 */
function decamelize(camelCasedString) {
    return camelCasedString
        .replace(/([A-Z0-9])/g, ' $1')
        .replace(/^./, function (char) { return char.toUpperCase(); });
}
exports.decamelize = decamelize;
function getOrdinal(n) {
    var s = ['th', 'st', 'nd', 'rd'];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
exports.getOrdinal = getOrdinal;
/**
 * I think I wrote this function to round down to an exact number of decimals
 * because built-in functions failed in edge cases. TODO: confirm this.
 *
 * @export misc/round
 */
function round(number, decimals) {
    if (decimals === void 0) { decimals = 0; }
    return +(Math.round(+(number + "e" + decimals)) + "e-" + decimals);
}
exports.round = round;
