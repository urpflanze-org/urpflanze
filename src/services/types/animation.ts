import { TEasing } from '@services/animation/Easings'

/**
 *
 *
 * @category Services.Animation
 * @export
 * @interface ICallableValue
 * @template T
 */
export interface ICallableValue<T> /* eslint-disable-line no-eval */ {
	/**
	 * raw function (string) return T
	 *
	 * @type {string}
	 * @memberof ICallableValue
	 */
	raw: string
	state: any
}

/**
 * @category Services.Animation
 */
export type TCallableValue<T> = T | ICallableValue<T>

//////////////////////////

/**
 *
 *
 * @category Services.Animation
 */
export interface IShapeLoopAnimation {
	start: TCallableValue<number>
	end: TCallableValue<number>
	inc: TCallableValue<number>
	vertex: ICallableValue<Array<number> | Float32Array>
	dynamyc: boolean // add 'prop_arguments' in shapeLoopPropsDependencies
}

//////////////////////////

/**
 *
 * @category Services.Animation
 */
export interface IVertexCallbackAnimation extends ICallableValue<Array<number> | Float32Array> {
	dynamic: boolean // set bUseParent at true
}

//////////////////////////

/**
 *
 * @category Services.Animation
 */
interface IAnimationSimple {
	type: 'simple'
	value: ISimpleAnimation
}

/**
 *
 * @category Services.Animation
 */
interface IAnimationRaw {
	type: 'raw'
	value: IRawState
}

/**
 * @category Services.Animation
 */
export type TAnimation = IAnimationSimple | IAnimationRaw

/**
 * @category Services.Animation
 */
export type TModeFunction = TEasing | 'sin' | 'cos'

/**
 * @category Services.Animation
 */
export type TSimpleAnimationType = 'loop' | 'uncontrolled-loop' | 'static'

/**
 * @category Services.Animation
 */
export interface ISimpleAnimation {
	from: number | Array<number> | string
	to: number | Array<number> | string
	durate: number

	invertOdd: boolean
	type: TSimpleAnimationType
	mode?: 'sinusoidal' | 'easing'
	mode_function?: TModeFunction
	delay?: number

	type_value?: 'int' | 'float'
	colorTransitionMode?: 'hue' | 'rgb'
}

/**
 * @category Services.Animation
 */
export type TSimpleAnimationLoop = Omit<ISimpleAnimation, 'delay' | 'type'>

/**
 * @category Services.Animation
 */
export type TSimpleAnimationUncontrolledLoop = Omit<ISimpleAnimation, 'type'>

/**
 * @category Services.Animation
 */
export type TSimpleAnimationStatic = Omit<ISimpleAnimation, 'type'>

/**
 * @category Services.Animation
 */
export interface IRawState extends ICallableValue<number | Array<number> | Float32Array | string> {}
