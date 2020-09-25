/**
 * Core
 */

import Scene from '@core/Scene'
import SceneChild from '@core/SceneChild'

import Group from '@core/Group'

// Shapes
import Line from '@core/shapes/primitives/Line'
import Triangle from '@core/shapes/primitives/Triangle'
import Rect from '@core/shapes/primitives/Rect'
import RegularPolygon from '@core/shapes/primitives/RegularPolygon'
import Circle from '@core/shapes/primitives/Circle'

import Rose from '@core/shapes/primitives/Rose'
import Spiral from '@core/shapes/primitives/Spiral'
import Lissajous from '@core/shapes/primitives/Lissajous'
// import Heart from '@core/shapes/primitives/Heart'

import Shape from '@core/shapes/Shape'
import ShapePrimitive from '@core/shapes/ShapePrimitive'
import ShapeLoop from '@core/shapes/ShapeLoop'
import ShapeBuffer from '@core/shapes/ShapeBuffer'

// Utilities
import Vec2 from '@core/math/Vec2'
import { toDegrees, toRadians, isDef, clamp, relativeClamp } from '@core/Utilites'

import Context from '@core/Context'

import { ShapePrimitiveAdaptMode } from '@core/interfaces/shapes/Interfaces'

/**
 * Services
 */
import SceneUtilities from '@services/scene-utilities/SceneUtilities'
import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas'
import SimpleAnimation from '@services/animation/Simple'
import Renderer from '@services/renderer/Renderer'
import JSONImporter from '@services/importers/JSONImporter'
import JSONExporter from '@services/exporters/JSONExporter'

const Urpflanze = {
	ShapePrimitiveAdaptMode,

	Context,

	Vec2,
	toDegrees,
	toRadians,
	isDef,
	clamp,
	relativeClamp,

	Scene,
	SceneChild,
	Group,

	Line,
	Triangle,
	Rect,
	RegularPolygon,
	Circle,
	// Heart,
	Rose,
	Lissajous,
	Spiral,

	Shape,
	ShapeBuffer,
	ShapeLoop,
	ShapePrimitive,

	//
	DrawerCanvas,
	SimpleAnimation,
	Renderer,
	SceneUtilities,

	JSONImporter,
	JSONExporter,
}

export default Urpflanze
