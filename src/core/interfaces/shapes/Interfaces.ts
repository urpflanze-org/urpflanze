import SceneChild from '@core/SceneChild'
import { ShapeBaseProp, ShapeLoopGenerator, VertexCallbackGenerator } from '@core/types/ShapeBase'

enum ShapePrimitiveAdaptMode {
	None,
	Scale = 1 << 1,
	Center = 1 << 2,
	Fill = 1 << 3,
}

/**
 * Props interface
 *
 * @interface ShapeBaseProps
 */
interface ShapeBaseProps {
	distance?: ShapeBaseProp<number | Array<number>> // distance from center
	repetitions?: ShapeBaseProp<number | Array<number>> // number of shape repetitions
	displace?: ShapeBaseProp<number>

	skewX?: ShapeBaseProp<number>
	skewY?: ShapeBaseProp<number>
	squeezeX?: ShapeBaseProp<number>
	squeezeY?: ShapeBaseProp<number>
	rotateX?: ShapeBaseProp<number>
	rotateY?: ShapeBaseProp<number>
	rotateZ?: ShapeBaseProp<number>
	scale?: ShapeBaseProp<number | Array<number>>
	translate?: ShapeBaseProp<number | Array<number>>

	rotationOrigin?: ShapeBaseProp<number | Array<number>>
	// randomSeed?: string
}

interface ShapePrimitiveProps extends ShapeBaseProps {
	sideLength?: ShapeBaseProp<number | Array<number>>

	fillColor?: ShapeBaseProp<number | string> // fill color
	lineWidth?: ShapeBaseProp<number> // stroke width
	strokeColor?: ShapeBaseProp<number | string> // stroke color
}

interface ShapeLoopProps extends ShapePrimitiveProps {
	loop?: ShapeLoopGenerator
}

interface ShapeBaseSettings {
	name?: string
	order?: number
	type?: string
	data?: any

	distance?: ShapeBaseProp<number | Array<number>> // distance from center
	repetitions?: ShapeBaseProp<number | Array<number>> // number of shape repetitions
	displace?: ShapeBaseProp<number> // displace of repetition

	skewX?: ShapeBaseProp<number>
	skewY?: ShapeBaseProp<number>
	squeezeX?: ShapeBaseProp<number>
	squeezeY?: ShapeBaseProp<number>
	rotateX?: ShapeBaseProp<number> // rotation of a shape
	rotateY?: ShapeBaseProp<number> // rotation of a shape
	rotateZ?: ShapeBaseProp<number> // rotation of a shape
	scale?: ShapeBaseProp<number | Array<number>> // scale of shape
	translate?: ShapeBaseProp<number | Array<number>> // translation of a shape
	rotationOrigin?: ShapeBaseProp<number | Array<number>>

	bUseParent?: boolean

	// randomSeed?: string
}

interface ShapePrimitiveSettings extends ShapeBaseSettings {
	bAdaptBuffer?: ShapePrimitiveAdaptMode
	bCloseShape?: boolean

	sideLength?: ShapeBaseProp<number | Array<number>>
	vertexCallback?: VertexCallbackGenerator

	fillColor?: ShapeBaseProp<number | string> // fill color
	lineWidth?: ShapeBaseProp<number> // stroke width
	strokeColor?: ShapeBaseProp<number | string> // stroke color
}

interface ShapeLoopSettings extends ShapePrimitiveSettings {
	loop?: ShapeLoopGenerator
	shapeLoopPropsDependencies?: Array<string>
}

interface ShapeBufferSettings extends ShapePrimitiveSettings {
	shape?: Float32Array | Array<number>
}

interface ShapeSettings extends ShapeBaseSettings {
	shape?: SceneChild
}

export {
	ShapeBaseProps,
	ShapeBaseSettings,
	ShapePrimitiveAdaptMode,
	ShapePrimitiveProps,
	ShapePrimitiveSettings,
	ShapeSettings,
	ShapeBufferSettings,
	ShapeLoopProps,
	ShapeLoopSettings,
}
