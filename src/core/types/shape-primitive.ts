import { ISceneChildPropArguments, TSceneChildProp } from '@core/types/scene-child'
import { IShapePrimitiveProps, IShapePrimitiveSettings } from './shape-base'

export interface IShapeBufferProps extends IShapePrimitiveProps {}

export interface IShapeBufferSettings extends IShapeBufferProps, IShapePrimitiveSettings {
	shape?: Float32Array | Array<number>
}

export type TShapeLoopGeneratorFormula = (
	current_angle: number,
	prop_arguments: ISceneChildPropArguments
) => Array<number> | Float32Array

export interface IShapeLoopGenerator {
	start?: TSceneChildProp<number>
	end?: TSceneChildProp<number>
	inc?: TSceneChildProp<number>
	vertex?: TShapeLoopGeneratorFormula
}

export interface IShapeLoopProps extends IShapePrimitiveProps {
	loop?: IShapeLoopGenerator
}

export interface IShapeLoopSettings extends IShapeLoopProps, IShapePrimitiveSettings {
	shapeLoopPropsDependencies?: Array<string>
}

//////

export interface IRegularPolygonProps extends IShapeLoopProps {
	sideNumber?: TSceneChildProp<number>
}

export interface IRegularPolygonSettings extends IRegularPolygonProps, IShapeLoopSettings {}

export interface IRoseProps extends IShapeLoopProps {
	n?: TSceneChildProp<number>
	d?: TSceneChildProp<number>
}
export interface IRoseSettings extends IRoseProps, IShapeLoopSettings {}

export type TSpiralType = 'ARCHIMEDE' | 'HYPERBOLIC' | 'FERMAT' | 'LITUUS' | 'LOGARITHMIC'

export interface ISpiralProps extends IShapeLoopProps {
	spiral?: TSpiralType
	twists?: TSceneChildProp<number>
	twists_start?: TSceneChildProp<number>
}

export interface ISpiralSettings extends ISpiralProps, IShapeLoopSettings {}

export interface ILissajousProps extends IShapeLoopProps {
	wx?: TSceneChildProp<number>
	wy?: TSceneChildProp<number>
	wz?: TSceneChildProp<number>
}

export interface ILissajousSettings extends ILissajousProps, IShapeLoopSettings {}
