/**
 * Get random element from an array.
 * @param arr Array
 */
export function randomItemFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}
