import { IShapeBounding } from '@core/types/shape-base'

/**
 * @internale
 * @ignore
 */
export type TTempBounding = [number | undefined, number | undefined, number | undefined, number | undefined]

/**
 * @internal
 * @ignore
 */
const Bounding = {
	clear: (tmpBounding: TTempBounding): void => {
		tmpBounding[0] = undefined
		tmpBounding[1] = undefined
		tmpBounding[2] = undefined
		tmpBounding[3] = undefined
	},

	add: (tmpBounding: TTempBounding, x: number, y: number): void => {
		if (typeof tmpBounding[0] === 'undefined' || x < tmpBounding[0]) tmpBounding[0] = x
		if (typeof tmpBounding[2] === 'undefined' || x > tmpBounding[2]) tmpBounding[2] = x
		if (typeof tmpBounding[1] === 'undefined' || y < tmpBounding[1]) tmpBounding[1] = y
		if (typeof tmpBounding[3] === 'undefined' || y > tmpBounding[3]) tmpBounding[3] = y
	},

	bind: (bounding: IShapeBounding, tmpBounding: TTempBounding): void => {
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
