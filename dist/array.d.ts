export declare function range(count: number, offset?: number, step?: number): any;
export declare function elementwise(fn: any, ...args: any[]): any;
export declare function map2d(arrayOfArrays: any, fn: any): any;
export declare function flatten(arrayOfArrays: any): any[];
export declare function combinations(arrayOfArrays: any): any[];
/**
 * Converts a minimal array representation of data and header into objects.
 *
 * @param {string[]} header contains the property names
 * @param {any[][]} dataAsArrays contains the property values
 * @returns data objects with properties and values from the arrays
 */
export declare function arraysToObjects(header: string[], dataAsArrays: any[][]): any[];
/**
 * Creates an utility funciton for getting property values from an array.
 *
 * @param {object[]} array  an array of objects
 * @returns a function that returns an array of all the property values in the
 *          object array for a given property name.
 */
export declare function arrayGetter(array: object[]): Function;
