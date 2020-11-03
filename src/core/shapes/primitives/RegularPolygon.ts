import { IRegularPolygonProps, IRegularPolygonSettings, IShapeLoopProps } from '@core/types/shape-primitive'
import ShapeLoop from '@core/shapes/ShapeLoop'
import { EShapePrimitiveAdaptMode } from '@core/types/shape-base'
import { ISceneChildPropArguments } from '@core/types/scene-child'

/**
 * Polygon shape
 *
 * @category Core.Primitives
 * @class RegularPolygon
 * @extends {ShapeLoop}
 */
class RegularPolygon extends ShapeLoop {
	protected props: IRegularPolygonProps

	constructor(settings: IRegularPolygonSettings = {}) {
		settings.type = settings.type || 'RegularPolygon'
		settings.loopDependencies = (settings.loopDependencies || []).concat(['sideNumber'])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.None

		super(settings, true)

		this.props.sideNumber = settings.sideNumber

		this.loop = {
			start: 0,
			end: ShapeLoop.PI2,
			inc: (propArguments: ISceneChildPropArguments) => ShapeLoop.PI2 / this.getProp('sideNumber', propArguments, 5),
			vertex: shapeLoopRepetition => {
				return [Math.cos(shapeLoopRepetition.angle), Math.sin(shapeLoopRepetition.angle)]
			},
		}

		this.bStaticLoop = this.isStaticLoop()
		this.bStatic = this.isStatic()
		this.bStaticIndexed = this.isStaticIndexed()
	}

	/**
	 * Get property value
	 *
	 * @param {keyof IRegularPolygonProps} key
	 * @param {ISceneChildPropArguments} [propArguments]
	 * @param {*} [defaultValue]
	 * @returns {*}
	 * @memberof IRegularPolygonProps
	 */
	public getProp(key: keyof IRegularPolygonProps, propArguments?: ISceneChildPropArguments, defaultValue?: any): any {
		return super.getProp(key as keyof IShapeLoopProps, propArguments, defaultValue)
	}

	/**
	 * Set single or multiple props
	 *
	 * @param {(keyof IRegularPolygonProps | RegularPolygonSettings)} key
	 * @param {*} [value]
	 * @memberof IRegularPolygonProps
	 */
	public setProp(key: keyof IRegularPolygonProps | IRegularPolygonSettings, value?: any): void {
		super.setProp(key as keyof IShapeLoopProps, value)
	}
}

export default RegularPolygon
