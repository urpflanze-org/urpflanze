import { ISceneChildPropArguments, IShapeLoopRepetition, TSceneChildProp } from '@core/types/scene-child'
import { vec2 } from 'gl-matrix'
import { IShapePrimitiveProps, IShapePrimitiveSettings } from './shape-base'

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBufferProps extends IShapePrimitiveProps {}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeBufferSettings extends IShapeBufferProps, IShapePrimitiveSettings {
	/**
	 * [x1,y1, x2,y1-, ...., xn, yn]
	 * @order -30
	 */
	shape?: Float32Array | Array<number>
}

/**
 *
 * @category Core.Types
 */
export type TShapeLoopGeneratorFormula = (
	shapeLoopRepetition: IShapeLoopRepetition,
	propArguments: ISceneChildPropArguments
) => vec2

/**
 * Object to create a shape from a loop from <mark>start</mark>
 * to <mark>end</mark> by <mark>inc</mark> increments.
 *
 * @example
 * ```javascript
 *  //
 *  // Example of creating a circle of 100 points
 *  //
 * ShapeLoop({
 * 	loop: {
 * 		start: 0,
 * 		end: 100,
 * 		inc: 1,
 * 		vertex: ({ offset }) => [Math.cos(offset * Math.PI * 2), Math.sin(offset * Math.PI * 2)]
 * 	}
 * })
 * ```
 * @category Core.Interfaces
 */
export interface IShapeLoopGenerator {
	start?: TSceneChildProp<number>
	end?: TSceneChildProp<number>
	inc?: TSceneChildProp<number>
	vertex?: TShapeLoopGeneratorFormula
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeLoopProps extends IShapePrimitiveProps {
	/**
	 * <a href="[base_url]/IShapeLoopGenerator">IShapeLoopGenerator</a> for more details
	 * @order -30
	 */
	loop?: IShapeLoopGenerator
}

/**
 *
 * @category Core.Props and Settings Interfaces
 */
export interface IShapeLoopSettings extends IShapeLoopProps, IShapePrimitiveSettings {
	/**
	 * Array of properties on which shapeloop generation depends,
	 * for example the circle varies the number of points based on the radius (sideLength)
	 * @order -30
	 */
	shapeLoopPropsDependencies?: Array<'vertexCallback' | 'propArguments' | string>
}

//////

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IRegularPolygonProps extends IShapeLoopProps {
	/**
	 * sideNumber / segments
	 * @order -35
	 */
	sideNumber?: TSceneChildProp<number>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IRegularPolygonSettings extends IRegularPolygonProps, IShapeLoopSettings {}

/**
 * For <mark>n</mark> and <mark>d</mark> see Rose on <a target="_blank" href="https://en.wikipedia.org/wiki/Rose_(mathematics)">Wikipedia</a>
 *
 * @category Core.Primitive Interfaces
 */
export interface IRoseProps extends IShapeLoopProps {
	/**
	 * n coefficient
	 * @order -31
	 */
	n?: TSceneChildProp<number>

	/**
	 * d coefficient
	 * @order -30
	 */
	d?: TSceneChildProp<number>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface IRoseSettings extends IRoseProps, IShapeLoopSettings {}

/**
 *
 * @category Core.Types
 */
export type TSpiralType = 'ARCHIMEDE' | 'HYPERBOLIC' | 'FERMAT' | 'LITUUS' | 'LOGARITHMIC'

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISpiralProps extends IShapeLoopProps {
	/**
	 * type of spiral
	 * @order -35
	 */
	spiral?: TSpiralType

	/**
	 * number of twists
	 * @order -34
	 */
	twists?: TSceneChildProp<number>

	/**
	 * twist start
	 * @order -33
	 */
	twistsStart?: TSceneChildProp<number>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ISpiralSettings extends ISpiralProps, IShapeLoopSettings {}

/**
 * For <mark>wx</mark>, <mark>wy</mark> and <mark>wx</mark> see Lissajous on <a target="_blank" href="https://en.wikipedia.org/wiki/Lissajous_curve">Wikipedia</a>
 * @category Core.Primitive Interfaces
 */
export interface ILissajousProps extends IShapeLoopProps {
	/**
	 * wx coefficient
	 * @order -37
	 */
	wx?: TSceneChildProp<number>

	/**
	 * wy coefficient
	 * @order -36
	 */
	wy?: TSceneChildProp<number>

	/**
	 * wz coefficient
	 * @order -35
	 */
	wz?: TSceneChildProp<number>
}

/**
 *
 * @category Core.Primitive Interfaces
 */
export interface ILissajousSettings extends ILissajousProps, IShapeLoopSettings {}
