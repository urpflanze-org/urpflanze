import { TEasing } from '@services/animation/Easings'

/**
 *
 *
 * @category Core.Animation
 * @export
 * @interface ICallableValue
 * @template T
 */
export interface ICallableValue<T> {
	/**
	 * raw function (string) return T
	 *
	 * @type {string}
	 * @memberof ICallableValue
	 */
	raw: string
	state: any
}

export type TCallableValue<T> = T | ICallableValue<T>

export type TDrawerTransformation = 'none' | 'angle' | 'resolution-based' | 'resolution-scaled-based'

export type TDrawerValue = {
	type: 'drawer-transformation'
	value: any
}

//////////////////////////

export interface IShapeLoop {
	start: TCallableValue<number>
	end: TCallableValue<number>
	inc: TCallableValue<number>
	vertex: ICallableValue<Array<number> | Float32Array>
	dynamyc: boolean // add 'prop_arguments' in shapeLoopPropsDependencies
}

//////////////////////////

export interface IVertexCallback extends ICallableValue<Array<number> | Float32Array> {
	dynamic: boolean // set bUseParent at true
}

//////////////////////////

interface IAnimationSimple {
	type: 'simple'
	value: ISimpleAnimation
}

interface IAnimationRaw {
	type: 'raw'
	value: IRawState
}

export type TAnimation = IAnimationSimple | IAnimationRaw

export type TModeFunction = TEasing | 'sin' | 'cos'
export type TSimpleAnimationType = 'loop' | 'uncontrolled-loop' | 'static'

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

export type TSimpleAnimationLoop = Omit<ISimpleAnimation, 'delay' | 'type'>
export type TSimpleAnimationUncontrolledLoop = Omit<ISimpleAnimation, 'type'>
export type TSimpleAnimationStatic = Omit<ISimpleAnimation, 'type'>

export interface IRawState extends ICallableValue<number | Array<number> | Float32Array | string> {}
