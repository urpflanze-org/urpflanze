// import { IProjectSceneChildData } from '@services/types/exporters-importers'

import {
	ILissajousProps,
	IPolygonProps,
	IRoseProps,
	IShapeBufferProps,
	IShapeLoopProps,
	ISpiralProps,
	ISuperShapeProps,
} from '@core/types/shape-primitives'
import { IShapePrimitiveProps } from '@core/types/shape-base'
import { ICallableValue, TAnimation, TCallableValue } from '@services/types/animation'
import { vec2 } from 'gl-matrix'
import { TSceneChildProp } from '@core/types/scene-child'
import { IDrawerStreamProps, TDrawerProp } from './drawer'

/**
 * @internal
 * @category Services.Scene Utilities
 */
export interface ISceneChildPropsExtendedShapeLoop {
	start: TCallableValue<number>
	end: TCallableValue<number>
	inc: TCallableValue<number>
	vertex: ICallableValue<vec2 | Float32Array>
	dynamyc: boolean // add 'propArguments' in loopDependencies
}

/////

/**
 * Declaring Types for Object Prop Type
 */

// Responsive prop (scene-size-percentage), degrees angle
/**
 * @internal
 * @category Services.Scene Utilities
 */
export type TTransformableType = 'none' | 'angle' | 'scene-size-percentage' | 'scene-size-percentage-inverse'

/**
 * @internal
 * @category Services.Scene Utilities
 */
export type TTransformable = {
	type: 'transformable-prop'
	value: number | vec2
}

/////

/**
 * @internal
 * @category Services.Scene Utilities
 */
export type TSceneChildPropsExtendedKeys = keyof (IShapeLoopProps &
	IShapeBufferProps &
	IShapePrimitiveProps &
	IPolygonProps &
	ILissajousProps &
	ISpiralProps &
	IRoseProps &
	ISuperShapeProps)

/**
 * @internal
 * @category Services.Scene Utilities
 */
export type TSceneChildPropExtendedValue<T = string | number | vec2> =
	| ISceneChildPropsExtendedShapeLoop
	| TTransformable // Object
	| TAnimation // Object
	| ICallableValue<T> // Object
	| TSceneChildProp<T>

///////////////////////

/**
 * @internal
 * @category Services.Scene Utilities
 */
export type TDrawerPropsExtendedKeys = keyof IDrawerStreamProps

/**
 * @internal
 * @category Services.Scene Utilities
 */
export type TDrawerPropExtendedValue<T = string | number | vec2> =
	| TAnimation // Object
	| ICallableValue<T> // Object
	| TDrawerProp<T>

//////////

/**
 * @internal
 * @category Services.Scene Utilities
 */
export interface ISceneChildPropsExtendedVertexCallback extends ICallableValue<vec2 | Float32Array> {
	// dynamic: boolean // set bUseParent at true
}

/**
 * @internal
 * @category Services.Scene Utilities
 */
export type TSettingsExtendedKeys =
	| 'id'
	| 'name'
	| 'order'
	| 'bClosed'
	| 'bUseParent'
	| 'bUseRecursion'
	| 'adaptMode'
	| 'vertexCallback'
export type TSettingExtendedValue = string | number | boolean | ISceneChildPropsExtendedVertexCallback

///////

export type TSceneChildUtilitiesSettingsKeys =
	| TSceneChildPropsExtendedKeys
	| TDrawerPropsExtendedKeys
	| TSettingsExtendedKeys

export type TSceneChildUtilitiesSettings = {
	[key in TSceneChildUtilitiesSettingsKeys | 'data' | 'shape' | 'loopDependencies']?: string | number | vec2 | any
}
