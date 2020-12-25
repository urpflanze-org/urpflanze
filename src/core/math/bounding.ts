import { IShapeBounding } from '@core/types/shape-base'

/**
 * @internal
 * @ignore
 */
const Bounding = {
	empty: (): IShapeBounding => ({
		cx: 0,
		cy: 0,
		x: -1,
		y: -1,
		width: 2,
		height: 2,
	}),

	clear: (tmpBounding: Array<number | undefined>): void => {
		tmpBounding[0] = undefined
		tmpBounding[1] = undefined
		tmpBounding[2] = undefined
		tmpBounding[3] = undefined
	},

	add: (tmpBounding: Array<number | undefined>, x: number, y: number): void => {
		if (typeof tmpBounding[0] === 'undefined' || x < tmpBounding[0]) tmpBounding[0] = x
		if (typeof tmpBounding[2] === 'undefined' || x > tmpBounding[2]) tmpBounding[2] = x
		if (typeof tmpBounding[1] === 'undefined' || y < tmpBounding[1]) tmpBounding[1] = y
		if (typeof tmpBounding[3] === 'undefined' || y > tmpBounding[3]) tmpBounding[3] = y
	},

	sum: (dest: Array<number | undefined>, bounding: Array<number | undefined>): void => {
		if (
			typeof bounding[0] !== 'undefined' &&
			typeof bounding[1] !== 'undefined' &&
			typeof bounding[2] !== 'undefined' &&
			typeof bounding[3] !== 'undefined'
		) {
			if (
				typeof dest[0] === 'undefined' ||
				typeof dest[1] === 'undefined' ||
				typeof dest[2] === 'undefined' ||
				typeof dest[3] === 'undefined'
			) {
				dest[0] = bounding[0]
				dest[1] = bounding[1]
				dest[2] = bounding[2]
				dest[3] = bounding[3]
			} else {
				if (dest[0] < bounding[0]) dest[0] = bounding[0]
				if (dest[2] > bounding[2]) dest[2] = bounding[2]
				if (dest[1] < bounding[1]) dest[1] = bounding[1]
				if (dest[3] > bounding[3]) dest[3] = bounding[3]
			}
		} else {
			console.warn('[Urplfanze:Bounding] cannot sum bounding')
		}
	},

	bind: (bounding: IShapeBounding, tmpBounding: Array<number | undefined>): void => {
		if (
			typeof tmpBounding[0] !== 'undefined' &&
			typeof tmpBounding[1] !== 'undefined' &&
			typeof tmpBounding[2] !== 'undefined' &&
			typeof tmpBounding[3] !== 'undefined'
		) {
			bounding.x = tmpBounding[0]
			bounding.y = tmpBounding[1]
			bounding.width = tmpBounding[2] - tmpBounding[0]
			bounding.height = tmpBounding[3] - tmpBounding[1]
			bounding.cx = bounding.x + bounding.width / 2
			bounding.cy = bounding.y + bounding.height / 2
		} else {
			console.warn('[Urplfanze:Bounding] cannot bind bounding')
		}
	},
}

export default Bounding
