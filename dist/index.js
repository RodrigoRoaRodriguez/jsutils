"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./math")); // calculation tools, mostly aggregates
__export(require("./array")); // array utils, useful for functional programming
__export(require("./misc")); // unclassified, mostly string utils so far.
