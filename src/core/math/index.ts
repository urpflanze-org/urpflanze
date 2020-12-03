/**
 * Return logarith value and base
 *
 * @category Core.Utilities
 *
 * @param n number
 * @param base number
 */
export const log = (n: number, base: number) => Math.log(n) / Math.log(base)

/**
 * @category Core.Utilities
 */
export const PI2 = Math.PI * 2
/**
 * @category Core.Utilities
 */
export const PHI = (1 + Math.sqrt(5)) / 2

/**
 * Return a positive module of positive or negative value
 *
 * @category Core.Utilities
 *
 * @param value number
 * @param base number
 */
export const pmod = (value: number, base: number): number => {
	const result = value % base

	return result < 0 ? result + base : result
}
