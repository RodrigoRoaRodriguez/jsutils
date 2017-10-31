/**
 * Create normally capitalized string form camelcase strings.
 *
 * @export
 * @param {any} camelCasedString
 * @returns
 */
export declare function decamelize(camelCasedString: string): string;
export declare function getOrdinal(n: number): string;
/**
 * I think I wrote this function to round down to an exact number of decimals
 * because built-in functions failed in edge cases. TODO: confirm this.
 *
 * @export misc/round
 */
export declare function round(number: number, decimals?: number): number;
