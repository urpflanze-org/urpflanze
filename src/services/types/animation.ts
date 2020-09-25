import { TArray } from '@core/math/Vec2'
import { TEasing } from '@services/animation/Easings'

interface ICallableValue<T> {
	raw: string
	state: any
}

export type TCallableValue<T> = T | ICallableValue<T>

//////////////////////////

export interface IShapeLoop {
	start: TCallableValue<number>
	end: TCallableValue<number>
	inc: TCallableValue<number>
	vertex: ICallableValue<TArray>
	dynamyc: boolean // add 'prop_arguments' in shapeLoopPropsDependencies
}

//////////////////////////

export interface IVertexCallback extends ICallableValue<TArray> {
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
	mode: 'sinusoidal' | 'easing'
	mode_function?: TModeFunction
	delay?: number

	type_value?: 'int' | 'float'
	colorTransitionMode?: 'hue' | 'rgb'
}

export type TSimpleAnimationLoop = Omit<ISimpleAnimation, 'delay' | 'type'>
export type TSimpleAnimationUncontrolledLoop = Omit<ISimpleAnimation, 'type'>
export type TSimpleAnimationStatic = Omit<ISimpleAnimation, 'type'>

export interface IRawState extends ICallableValue<number | TArray | string> {}
