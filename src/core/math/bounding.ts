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
	clear: (tmp_bounding: TTempBounding): void => {
		tmp_bounding[0] = undefined
		tmp_bounding[1] = undefined
		tmp_bounding[2] = undefined
		tmp_bounding[3] = undefined
	},

	add: (tmp_bounding: TTempBounding, x: number, y: number): void => {
		if (typeof tmp_bounding[0] === 'undefined' || x < tmp_bounding[0]) tmp_bounding[0] = x
		if (typeof tmp_bounding[2] === 'undefined' || x > tmp_bounding[2]) tmp_bounding[2] = x
		if (typeof tmp_bounding[1] === 'undefined' || y < tmp_bounding[1]) tmp_bounding[1] = y
		if (typeof tmp_bounding[3] === 'undefined' || y > tmp_bounding[3]) tmp_bounding[3] = y
	},

	bind: (bounding: IShapeBounding, tmp_bounding: TTempBounding): void => {
		if (
			typeof tmp_bounding[0] !== 'undefined' &&
			typeof tmp_bounding[1] !== 'undefined' &&
			typeof tmp_bounding[2] !== 'undefined' &&
			typeof tmp_bounding[3] !== 'undefined'
		) {
			bounding.x = tmp_bounding[0]
			bounding.y = tmp_bounding[1]
			bounding.width = tmp_bounding[2] - tmp_bounding[0]
			bounding.height = tmp_bounding[3] - tmp_bounding[1]
			bounding.cx = bounding.x + bounding.width / 2
			bounding.cy = bounding.y + bounding.height / 2
		}
	},
}

export default Bounding
