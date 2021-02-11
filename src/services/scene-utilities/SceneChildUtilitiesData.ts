import Spiral from '@core/shapes/primitives/Spiral'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import {
	TTransformableType,
	TDrawerPropsExtendedKeys,
	TSceneChildPropsExtendedKeys,
	TSettingsExtendedKeys,
} from '@services/types/scene-utilities'

/**
 * @category Services.Scene Utilities
 */
export type TPropInputType =
	| 'range'
	| 'multiple-range'
	| 'color'
	| 'select'
	| 'checkbox'
	| 'radio'
	| 'slider'
	| 'function'

/**
 * @category Services.Scene Utilities
 */
export interface ISceneChildUtiltiesData {
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
	initialArray?: boolean
	transformation: TTransformableType
	animable?: boolean
	type_value?: 'float' | 'int'
	dataType: 'props' | 'drawer' | 'settings'
}

/**
 * @category Services.Scene Utilities
 */
export type TSceneChildPropsDataKeys =
	| (Exclude<TSceneChildPropsExtendedKeys, 'loop'> | ('loop.start' | 'loop.end' | 'loop.inc'))
	| TDrawerPropsExtendedKeys
	| Exclude<TSettingsExtendedKeys, 'id' | 'name' | 'order'>

type TSceneChildUtilitiesData = {
	[key in TSceneChildPropsDataKeys]: ISceneChildUtiltiesData
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
const SceneChildUtilitiesData: TSceneChildUtilitiesData = {
	repetitions: {
		animable: true,
		name: 'repetitions',
		label: 'Repetitions',
		type: 'range',
		min: 1,
		max: 200,
		step: 1,
		default: 1,
		default_animate: 20,
		canBArray: true,
		transformation: 'none',
		dataType: 'props',
		type_value: 'int',
	},
	distance: {
		animable: true,
		name: 'distance',
		label: 'Distance',
		type: 'range',
		min: -100,
		max: 100,
		step: 0.1,
		default: 0,
		canBArray: true,
		default_animate: 25,
		transformation: 'scene-size-percentage',
		dataType: 'props',
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
		dataType: 'props',
	},

	squeezeX: {
		animable: true,
		name: 'squeezeX',
		label: 'SqueezeX',
		type: 'range',
		min: -0.2,
		max: 0.2,
		step: 0.01,
		default: 0,
		default_animate: 0.1,
		transformation: 'scene-size-percentage-inverse',
		dataType: 'props',
	},
	squeezeY: {
		animable: true,
		name: 'squeezeY',
		label: 'SqueezeY',
		type: 'range',
		min: -0.2,
		max: 0.2,
		step: 0.01,
		default: 0,
		default_animate: 0.1,
		transformation: 'scene-size-percentage-inverse',
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
	},
	translate: {
		animable: true,
		name: 'translate',
		label: 'Translate',
		type: 'multiple-range',
		min: -100,
		max: 100,
		step: 0.1,
		default: [0, 0],
		default_animate: 0,
		initialArray: true,
		transformation: 'scene-size-percentage',
		dataType: 'props',
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
		dataType: 'props',
	},

	transformOrigin: {
		animable: true,
		name: 'transformOrigin',
		label: 'Transform Origin',
		type: 'multiple-range',
		min: -1,
		max: 1,
		step: 0.01,
		default: [0, 0],
		default_animate: [-1, 1],
		initialArray: true,
		transformation: 'none',
		dataType: 'props',
	},

	perspective: {
		animable: true,
		name: 'perspective',
		label: 'Perspective',
		type: 'range',
		min: 0,
		max: 1,
		step: 0.01,
		default: 0,
		default_animate: 0.8,
		transformation: 'none',
		dataType: 'props',
	},

	perspectiveOrigin: {
		animable: true,
		name: 'perspectiveOrigin',
		label: 'Perspective Origin',
		type: 'multiple-range',
		min: -1,
		max: 1,
		step: 0.01,
		default: [0, 0],
		default_animate: [-1, 1],
		initialArray: true,
		transformation: 'none',
		dataType: 'props',
	},

	// primitive style
	fill: {
		animable: true,
		name: 'fill',
		label: 'Fill',
		type: 'color',
		default: '#000',
		default_animate: '#fff',
		transformation: 'none',
		dataType: 'drawer',
	},
	stroke: {
		animable: true,
		name: 'stroke',
		label: 'Stroke',
		type: 'color',
		default: '#fff',
		default_animate: '#000',
		transformation: 'none',
		dataType: 'drawer',
	},
	lineWidth: {
		animable: true,
		name: 'lineWidth',
		label: 'Stroke weight',
		type: 'slider',
		min: 0,
		max: 30,
		step: 0.01,
		default: 1,
		default_animate: 3,
		transformation: 'scene-size-percentage',
		dataType: 'drawer',
	},

	bClosed: {
		name: 'bClosed',
		label: 'Closed',
		type: 'checkbox',
		default: undefined,
		transformation: 'none',
		dataType: 'settings',
	},
	bUseParent: {
		name: 'bUseParent',
		label: 'Use parent repetition',
		type: 'checkbox',
		default: false,
		transformation: 'none',
		dataType: 'settings',
	},

	bUseRecursion: {
		name: 'bUseRecursion',
		label: 'Use recursion repetition',
		type: 'checkbox',
		default: false,
		transformation: 'none',
		dataType: 'settings',
	},

	vertexCallback: {
		name: 'vertexCallback',
		label: 'vertexCallback',
		type: 'function',
		default: undefined,
		transformation: 'none',
		dataType: 'settings',
	},

	adaptMode: {
		name: 'adaptMode',
		label: 'Adapt',
		type: 'radio',
		options: OptionShapePrimitiveAdaptMode,
		default: undefined,
		transformation: 'none',
		dataType: 'settings',
	},

	// recursion
	recursions: {
		animable: true,
		name: 'recursion',
		label: 'Recursion',
		type: 'range',
		min: 1,
		max: 8,
		step: 1,
		default: 1,
		default_animate: 2,
		transformation: 'none',
		dataType: 'props',
		type_value: 'int',
	},

	recursionScale: {
		animable: true,
		name: 'recursionScale',
		label: 'Recursion Scale',
		type: 'range',
		min: 0.1,
		max: 5,
		step: 0.01,
		default: 1,
		default_animate: 2,
		transformation: 'none',
		dataType: 'props',
	},

	recursionVertex: {
		animable: true,
		name: 'recursionVertex',
		label: 'Recursion Vertex',
		type: 'range',
		min: 1,
		max: 100,
		step: 1,
		default: 10,
		default_animate: 20,
		transformation: 'none',
		dataType: 'props',
		type_value: 'int',
	},
	// primitive

	sideLength: {
		animable: true,
		name: 'sideLength',
		label: 'Side Length',
		type: 'multiple-range',
		min: 0.01,
		max: 100,
		step: 0.1,
		default: [10, 10],
		default_animate: 20,
		transformation: 'scene-size-percentage',
		dataType: 'props',
	},

	// polygon
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
	},
	twistsStart: {
		animable: true,
		name: 'twists_start',
		label: 'Twists start',
		type: 'range',
		min: 0,
		max: 60,
		step: 0.1,
		default: 0,
		default_animate: 1,
		transformation: 'none',
		dataType: 'props',
	},

	spiral: {
		name: 'spiral',
		label: 'Spiral type',
		type: 'select',
		options: OptionSpiralType,
		default: Spiral.types.ARCHIMEDE,
		transformation: 'none',
		dataType: 'props',
	},

	// supershape
	a: {
		animable: true,
		name: 'a',
		label: 'A',
		type: 'range',
		min: -5,
		max: 5,
		step: 0.1,
		default: 1,
		default_animate: 0.1,
		transformation: 'none',
		dataType: 'props',
	},
	b: {
		animable: true,
		name: 'b',
		label: 'B',
		type: 'range',
		min: -5,
		max: 5,
		step: 0.1,
		default: 1,
		default_animate: 0.1,
		transformation: 'none',
		dataType: 'props',
	},
	m: {
		animable: true,
		name: 'm',
		label: 'm',
		type: 'range',
		min: 1,
		max: 20,
		step: 1,
		default: 1,
		default_animate: 6,
		transformation: 'none',
		dataType: 'props',
		type_value: 'int',
	},
	n1: {
		animable: true,
		name: 'n1',
		label: 'n1',
		type: 'range',
		min: -3,
		max: 3,
		step: 0.01,
		default: 1,
		default_animate: 0.1,
		transformation: 'none',
		dataType: 'props',
	},
	n2: {
		animable: true,
		name: 'n2',
		label: 'n2',
		type: 'range',
		min: -3,
		max: 3,
		step: 0.01,
		default: 1,
		default_animate: 0.1,
		transformation: 'none',
		dataType: 'props',
	},
	n3: {
		animable: true,
		name: 'n3',
		label: 'n3',
		type: 'range',
		min: -3,
		max: 3,
		step: 0.01,
		default: 1,
		default_animate: 0.1,
		transformation: 'none',
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
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
		dataType: 'props',
	},
}

export default SceneChildUtilitiesData
