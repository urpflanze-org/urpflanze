import SimplexNoise from 'simplex-noise'
import Vec2, { TArray } from './math/Vec2'
import Shape from './shapes/Shape'
import ShapeBase from './shapes/ShapeBase'
import { Repetition, RepetitionType } from './types/ShapeBase'

interface Noises {
	[key: string]: SimplexNoise
}

const noises: Noises = {
	random: new SimplexNoise(Math.random),
}

export default {
	noise: (seed: string = 'random', x = 0, y = 0, z = 0): number => {
		if (!noises[seed]) {
			noises[seed] = new SimplexNoise(seed)
		}

		return noises[seed].noise3D(x, y, z)
	},

	/**
	 * Return angle from offset(or center)
	 *
	 * @param {Repetition} repetition
	 * @param {number | TArray} offsetFromCenter
	 * @returns {number}
	 * @memberof ShapeBase
	 */
	angle: (repetition: Repetition, offsetFromCenter: number | TArray = [0, 0]): number => {
		if (repetition.type == RepetitionType.Matrix) {
			const matrixOffset = Vec2.create(offsetFromCenter)
			const center_matrix = Vec2.create(
				((repetition.count_col as number) - 1) / 2,
				((repetition.count_row as number) - 1) / 2
			)

			center_matrix[0] += center_matrix[0] * matrixOffset[0]
			center_matrix[1] += center_matrix[1] * matrixOffset[1]

			return Math.atan(
				((repetition.current_row as number) - 1 - center_matrix[1]) /
					((repetition.current_col as number) - 1 - center_matrix[0])
			)
		}

		return repetition.current_angle ?? 0
	},

	/**
	 * Return distance from offset (or center)
	 *
	 * @param {Repetition} repetition
	 * @param {number | TArray} offsetFromCenter offset relative to distance prop
	 * @param {number | TArray} scaleDistance divide result by scaleDistance
	 * @returns {number}
	 * @memberof ShapeBase
	 */
	distance: (
		repetition: Repetition,
		offsetFromCenter: number | TArray = [0, 0],
		scaleDistance: number | TArray = [1, 1]
	): number => {
		if (repetition.type == RepetitionType.Matrix) {
			const matrixOffset = Vec2.create(offsetFromCenter)
			const scale = Vec2.create(scaleDistance)

			const center_matrix = Vec2.create(
				((repetition.count_col as number) - 1) / 2,
				((repetition.count_row as number) - 1) / 2
			)

			center_matrix[0] += center_matrix[0] * matrixOffset[0]
			center_matrix[1] += center_matrix[1] * matrixOffset[1]

			const current = Vec2.create(repetition.current_col - 1, repetition.current_row - 1)

			Vec2.divide(current, scale)

			return Vec2.distance(current, center_matrix)
		}

		return 1
	},

	percW: (percentage: number, shape: ShapeBase): number =>
		shape && shape.scene ? (shape.scene.width * percentage) / 100 : percentage,
	percH: (percentage: number, shape: ShapeBase): number =>
		shape && shape.scene ? (shape.scene.height * percentage) / 100 : percentage,
}
