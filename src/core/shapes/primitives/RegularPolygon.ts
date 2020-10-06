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
		settings.shapeLoopPropsDependencies = (settings.shapeLoopPropsDependencies || []).concat(['sideNumber'])
		settings.adaptMode = settings.adaptMode ?? EShapePrimitiveAdaptMode.None

		super(settings, true)

		this.props.sideNumber = settings.sideNumber

		this.loop = {
			start: 0,
			end: ShapeLoop.PI2,
			inc: (prop_arguments: ISceneChildPropArguments) => ShapeLoop.PI2 / this.getProp('sideNumber', prop_arguments, 5),
			vertex: angle => {
				return [Math.cos(angle), Math.sin(angle)]
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
	 * @param {ISceneChildPropArguments} [prop_arguments]
	 * @param {*} [default_value]
	 * @returns {*}
	 * @memberof IRegularPolygonProps
	 */
	public getProp(key: keyof IRegularPolygonProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any {
		return super.getProp(key as keyof IShapeLoopProps, prop_arguments, default_value)
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
