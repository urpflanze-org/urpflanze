import Spiral from '@core/shapes/primitives/Spiral'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { TDrawerTransformation } from '@services/types/drawer'
import { TSceneChildProps } from '@services/types/scene-utilities'

/**
 * @category Services.Scene Utilities
 */
export type TPropInputType = 'range' | 'multiple-range' | 'color' | 'select' | 'checkbox' | 'radio' | 'slider'

/**
 * @category Services.Scene Utilities
 */
export interface ISceneChildPropData {
	label: string
	name: string
	type: TPropInputType
	min?: number
	max?: number
	step?: number
	options?: Array<{ key: string; value: any }>
	default: any
	default_animate?: any
	canBArray?: boolean
	transformation: TDrawerTransformation
	animable?: boolean
	type_value?: 'float' | 'int'
}

/**
 * @category Services.Scene Utilities
 */
export type TSceneChildPropsDataKeys = Exclude<
	keyof TSceneChildProps | 'loop.start' | 'loop.end' | 'loop.inc',
	'shapeLoopPropsDependencies' | 'vertexCallback' | 'loop' | 'name' | 'order' | 'type' | 'data' | 'shape' | 'id'
>

type TSceneChildUtilityProps = {
	[key in TSceneChildPropsDataKeys]: ISceneChildPropData
}

const OptionShapePrimitiveAdaptMode = [
	{ key: 'None', value: EShapePrimitiveAdaptMode.None },
	{ key: 'Scale', value: EShapePrimitiveAdaptMode.Scale },
	{ key: 'Center', value: EShapePrimitiveAdaptMode.Center },
	{ key: 'Fill', value: EShapePrimitiveAdaptMode.Fill },
]

const OptionSpiralType = [
	{ key: 'ARCHIMEDE', value: Spiral.types.ARCHIMEDE },
	{ key: 'FERMAT', value: Spiral.types.FERMAT },
	{ key: 'HYPERBOLIC', value: Spiral.types.HYPERBOLIC },
	{ key: 'LITUUS', value: Spiral.types.LITUUS },
	{ key: 'LOGARITHMIC', value: Spiral.types.LOGARITHMIC },
]

/**
 * @category Services.Scene Utilities
 */
const SceneChildPropsData: TSceneChildUtilityProps = {
	repetitions: {
		animable: true,
		name: 'repetitions',
		label: 'Repetitions',
		type: 'range',
		min: 1,
		max: 100,
		step: 1,
		default: 1,
		default_animate: 20,
		canBArray: true,
		transformation: 'none',
		type_value: 'int',
	},
	distance: {
		animable: true,
		name: 'distance',
		label: 'Distance',
		type: 'range',
		min: -200,
		max: 200,
		step: 1,
		default: 0,
		canBArray: true,
		default_animate: 50,
		transformation: 'resolution-based',
	},
	displace: {
		animable: true,
		name: 'displace',
		label: 'Displace',
		type: 'range',
		min: -360,
		max: 360,
		step: 1,
		default: 0,
		default_animate: 360,
		transformation: 'angle',
	},

	squeezeX: {
		animable: true,
		name: 'squeezeX',
		label: 'SqueezeX',
		type: 'range',
		min: -0.2,
		max: 0.2,
		step: 0.001,
		default: 0,
		default_animate: 0.01,
		transformation: 'resolution-scaled-based',
	},
	squeezeY: {
		animable: true,
		name: 'squeezeY',
		label: 'SqueezeY',
		type: 'range',
		min: -0.2,
		max: 0.2,
		step: 0.001,
		default: 0,
		default_animate: 0.01,
		transformation: 'resolution-scaled-based',
	},

	rotateX: {
		animable: true,
		name: 'rotateX',
		label: 'RotateX',
		type: 'range',
		min: -360,
		max: 360,
		step: 1,
		default: 0,
		default_animate: 360,
		transformation: 'angle',
	},
	rotateY: {
		animable: true,
		name: 'rotateY',
		label: 'RotateY',
		type: 'range',
		min: -360,
		max: 360,
		step: 1,
		default: 0,
		default_animate: 360,
		transformation: 'angle',
	},
	rotateZ: {
		animable: true,
		name: 'rotateZ',
		label: 'RotateZ',
		type: 'range',
		min: -360,
		max: 360,
		step: 1,
		default: 0,
		default_animate: 360,
		transformation: 'angle',
	},
	skewX: {
		animable: true,
		name: 'skewX',
		label: 'SkewX',
		type: 'range',
		min: -90,
		max: 90,
		step: 1,
		default: 0,
		default_animate: 1,
		transformation: 'angle',
	},
	skewY: {
		animable: true,
		name: 'skewY',
		label: 'SkewY',
		type: 'range',
		min: -90,
		max: 90,
		step: 1,
		default: 0,
		default_animate: 1,
		transformation: 'angle',
	},
	translate: {
		animable: true,
		name: 'translate',
		label: 'Translate',
		type: 'multiple-range',
		min: -200,
		max: 200,
		step: 1,
		default: [0, 0],
		default_animate: 0,
		transformation: 'resolution-based',
	},
	scale: {
		animable: true,
		name: 'scale',
		label: 'Scale',
		type: 'multiple-range',
		min: -5,
		max: 5,
		step: 0.01,
		default: [1, 1],
		default_animate: 3,
		transformation: 'none',
	},

	transformOrigin: {
		animable: true,
		name: 'transformOrigin',
		label: 'Transform Origin',
		type: 'multiple-range',
		min: -1,
		max: 1,
		step: 0.01,
		default: [1, 1],
		default_animate: [-1, 1],
		transformation: 'none',
	},

	perspective: {
		animable: true,
		name: 'perspective',
		label: 'Perspective',
		type: 'range',
		min: -1,
		max: 1,
		step: 0.01,
		default: 0,
		default_animate: 0.8,
		transformation: 'none',
	},

	perspectiveOrigin: {
		animable: true,
		name: 'perspectiveOrigin',
		label: 'Perspective Origin',
		type: 'multiple-range',
		min: -1,
		max: 1,
		step: 0.01,
		default: [1, 1],
		default_animate: [-1, 1],
		transformation: 'none',
	},
	// rotationOrigin: {
	// 	animable: true,
	// 	name: 'rotationOrigin',
	// 	label: 'Rotation Origin',
	// 	type: 'multiple-range',
	// 	min: -1,
	// 	max: 1,
	// 	step: 0.01,
	// 	default: [1, 1],
	// 	default_animate: [-1, 1],
	// 	transformation: 'none',
	// },

	// primitive
	fillColor: {
		animable: true,
		name: 'fillColor',
		label: 'Fill',
		type: 'color',
		default: '#000',
		default_animate: '#fff',
		transformation: 'none',
	},
	strokeColor: {
		animable: true,
		name: 'strokeColor',
		label: 'Stroke',
		type: 'color',
		default: '#fff',
		default_animate: '#000',
		transformation: 'none',
	},
	lineWidth: {
		animable: true,
		name: 'lineWidth',
		label: 'Stroke weight',
		type: 'slider',
		min: 0,
		max: 30,
		step: 0.1,
		default: 1,
		default_animate: 3,
		transformation: 'none',
	},

	bCloseShape: { name: 'bCloseShape', label: 'Closed', type: 'checkbox', default: undefined, transformation: 'none' },
	bUseParent: {
		name: 'bbUseParent',
		label: 'Use parent repetition',
		type: 'checkbox',
		default: false,
		transformation: 'none',
	},

	adaptMode: {
		name: 'adaptMode',
		label: 'Adapt',
		type: 'radio',
		options: OptionShapePrimitiveAdaptMode,
		default: undefined,
		transformation: 'none',
	},

	sideLength: {
		animable: true,
		name: 'sideLength',
		label: 'Side Length',
		type: 'multiple-range',
		min: 0.1,
		max: 100,
		step: 0.1,
		default: [10, 10],
		default_animate: 20,
		transformation: 'resolution-based',
	},
	sideNumber: {
		animable: true,
		name: 'sideNumber',
		label: 'Side Number',
		type: 'range',
		min: 1,
		max: 20,
		step: 1,
		default: 5,
		default_animate: 2,
		transformation: 'none',
	},

	// rose
	n: {
		animable: true,
		name: 'n',
		label: 'n',
		type: 'range',
		min: 1,
		max: 10,
		step: 1,
		default: 1,
		default_animate: 3,
		transformation: 'none',
	},
	d: {
		animable: true,
		name: 'd',
		label: 'd',
		type: 'range',
		min: 1,
		max: 10,
		step: 1,
		default: 2,
		default_animate: 4,
		transformation: 'none',
	},

	// lissajous
	wx: {
		animable: true,
		name: 'wx',
		label: 'wx',
		type: 'range',
		min: 1,
		max: 10,
		step: 1,
		default: 1,
		default_animate: 3,
		transformation: 'none',
	},
	wy: {
		animable: true,
		name: 'wy',
		label: 'wy',
		type: 'range',
		min: 1,
		max: 10,
		step: 1,
		default: 2,
		default_animate: 4,
		transformation: 'none',
	},
	wz: {
		animable: true,
		name: 'wz',
		label: 'wz',
		type: 'range',
		min: -360,
		max: 360,
		step: 1,
		default: 0,
		default_animate: 360,
		transformation: 'angle',
	},

	// spiral
	twists: {
		animable: true,
		name: 'twists',
		label: 'Twists',
		type: 'range',
		min: 1,
		max: 60,
		step: 0.1,
		default: 1,
		default_animate: 3,
		transformation: 'none',
	},
	twists_start: {
		animable: true,
		name: 'twists_start',
		label: 'Twists start',
		type: 'range',
		min: 1,
		max: 60,
		step: 0.1,
		default: 0,
		default_animate: 1,
		transformation: 'none',
	},

	spiral: {
		name: 'spiral',
		label: 'Spiral type',
		type: 'select',
		options: OptionSpiralType,
		default: Spiral.types.ARCHIMEDE,
		transformation: 'none',
	},

	// loop
	'loop.start': {
		name: 'loop.start',
		label: 'start',
		type: 'range',
		default: undefined,
		min: 0,
		max: 100,
		step: 0.01,
		transformation: 'none',
	},
	'loop.end': {
		name: 'loop.end',
		label: 'end',
		type: 'range',
		default: undefined,
		min: 0,
		max: 100,
		step: 0.01,
		transformation: 'none',
	},
	'loop.inc': {
		name: 'loop.inc',
		label: 'inc',
		type: 'range',
		default: undefined,
		min: 0.01,
		max: 100,
		step: 0.01,
		transformation: 'none',
	},
}

export default SceneChildPropsData
