/**
 *
 * @param number the number to format
 * @returns string in local format e.g. with comma added in large numbers
 */
export function formatNumber(number: number): string {
  return number.toLocaleString();
}
