/**
 * Create normally capitalized string form camelcase strings.
 * 
 * @export
 * @param {any} camelCasedString 
 * @returns 
 */
export function decamelize(camelCasedString: string) {
  return camelCasedString
    .replace(/([A-Z0-9])/g, ' $1')
    .replace(/^./, char => char.toUpperCase());
}

export function getOrdinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

/**
 * I think I wrote this function to round down to an exact number of decimals
 * because built-in functions failed in edge cases. TODO: confirm this.
 * 
 * @export misc/round
 */
export function round(number:number, decimals:number = 0): number {
  return +`${Math.round(+(`${number}e${decimals}`))}e-${decimals}`;
}
