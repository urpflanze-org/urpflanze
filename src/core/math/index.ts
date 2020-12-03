export const log = (n: number, base: number) => Math.log(n) / Math.log(base)

export const PI2 = Math.PI * 2
export const PHI = (1 + Math.sqrt(5)) / 2

export const pmod = (value: number, base: number): number => {
	const result = value % base
	if (result < 0) {
		return result + base
	}

	return result
}
