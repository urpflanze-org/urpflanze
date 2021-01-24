/**
 * Meta
 */

export { version, author, license } from './meta'

// Set glMatrixArrayType
import { glMatrix } from 'gl-matrix'

glMatrix.setMatrixArrayType(Array)

/**
 * Core
 */

export { default as Scene } from '@core/Scene'
export { default as SceneChild } from '@core/SceneChild'

export { default as Group } from '@core/Group'

// Shapes
export { default as ShapePrimitive } from '@core/shapes/ShapePrimitive'
export { default as ShapeLoop } from '@core/shapes/ShapeLoop'
export { default as ShapeBuffer } from '@core/shapes/ShapeBuffer'
export { default as Shape } from '@core/shapes/Shape'
export { default as ShapeRecursive } from '@core/shapes/ShapeRecursive'

export { default as Line } from '@core/shapes/primitives/Line'
export { default as Triangle } from '@core/shapes/primitives/Triangle'
export { default as Rect } from '@core/shapes/primitives/Rect'
export { default as Polygon } from '@core/shapes/primitives/Polygon'
export { default as Circle } from '@core/shapes/primitives/Circle'

export { default as Rose } from '@core/shapes/primitives/Rose'
export { default as Spiral } from '@core/shapes/primitives/Spiral'
export { default as Lissajous } from '@core/shapes/primitives/Lissajous'
export { default as SuperShape } from '@core/shapes/primitives/SuperShape'

// Utilities
export {
	lerp,
	clamp,
	relativeClamp,
	toDegrees,
	toRadians,
	now,
	noise,
	angleFromRepetition,
	angle2FromRepetition,
	distanceFromRepetition,
} from 'src/Utilites'

export { default as Vec2 } from '@core/math/Vec2'

export { PHI, PI2, log } from '@core/math'

/**
 * Services
 */
export { default as DrawerCanvas } from '@services/drawers/drawer-canvas/DrawerCanvas'
export { default as Animation } from '@services/animation/Simple'
export { default as Easings } from '@services/animation/Easings'
