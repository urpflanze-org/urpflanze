import { ShapeBasePropArguments, ShapeLoopGenerator } from '@core/types/ShapeBase'
import Utilities from 'src/Utilites'

import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas'
import SceneChildPropsData, {
	ISceneChildPropData,
	TSceneChildPropsDataKeys,
} from '@services/scene-utilities/SceneChildPropsData'
import { IShapeLoop, TAnimation, TDrawerTransformation, TDrawerValue } from '@services/types/animation'

class ScenePropUtilities {
	public static readonly RAW_ARGUMENTS: string = '{ context, repetition, time, shape, shape_loop, data }'
	public static readonly RAW_ARGUMENTS_WIT_PARENT: string =
		'{ context, repetition, parent, time, shape, shape_loop, data }'

	//#region ShapeLoop

	static bValueLoop(value: any): boolean {
		return (
			typeof value === 'object' &&
			'start' in value &&
			'end' in value &&
			'inc' in value &&
			'vertex' in value &&
			value.vertex.raw &&
			value.vertex.raw.length > 0
		)
	}

	static bValueVertexCallback(value: any): boolean {
		return value && value.raw && value.raw.length > 0
	}
	static composeVertexCallback(
		value: any
	):
		| ((
				vertex: Array<number> | Float32Array,
				prop_argumens: ShapeBasePropArguments,
				vertex_index: number,
				vertex_length: number
		  ) => Array<number> | Float32Array)
		| undefined {
		if (value && value.raw) {
			const vertexCallback = new Function(
				'vertex',
				ScenePropUtilities.RAW_ARGUMENTS,
				'vertex_index',
				'vertex_lenght',
				`return ${value.raw}`
			) as (
				vertex: Array<number> | Float32Array,
				prop_argumens: ShapeBasePropArguments,
				vertex_index: number,
				vertex_length: number
			) => Array<number> | Float32Array

			return vertexCallback
		}
	}

	static composeLoop(loop: IShapeLoop): ShapeLoopGenerator {
		const vertex = loop.vertex.raw
			? (new Function('index', ScenePropUtilities.RAW_ARGUMENTS, `return ${loop.vertex.raw}`) as (
					current_angle: number,
					prop_arguments: ShapeBasePropArguments
			  ) => Array<number> | Float32Array)
			: undefined

		//Todo: number -> resolve function
		return {
			start: loop.start as number,
			end: loop.end as number,
			inc: loop.inc as number,
			vertex,
		}
	}

	//#endregion

	// static getRandomFunctionForProp(name): (rand: number) => any {
	//     const prop: ISceneChildProp = UISceneChildUtilitiesStatic.sceneChildProps[name]

	//     switch (prop.type)
	//     {
	//         case 'multiple-range': case 'range': case 'slider':
	//             return (rand: number) => {
	//                 const min = prop.min as number / 2
	//                 const max = prop.max as number / 2
	//                 const value = min + ((max - min) * rand)
	//                 return prop.bAngle ? toRadians(value) : value
	//             }
	//         case 'color':
	//             return (rand: number) => `hsl(${Math.floor(360 * rand)}, ${Math.floor(25 + 75 * rand)}%, ${Math.floor(25 + 75 * rand)}%)`
	//         default:
	//             return (rand: number) => undefined
	//     }
	// }

	//#endregion

	//#region Props relative to drawer

	static bValueAnimation(value: TAnimation | any): boolean {
		return (
			value &&
			typeof value === 'object' &&
			value.type &&
			(value.type === 'simple' || value.type === 'raw') /*|| value.type == 'random'*/
		)
	}

	static bValueDrawer(value: TDrawerValue | any): boolean {
		return value && typeof value === 'object' && value.type && value.type === 'drawer-transformation'
	}

	static bPropTransformable(name: string, value: any): boolean {
		const sceneChildProp = SceneChildPropsData[name as TSceneChildPropsDataKeys]

		return (
			sceneChildProp &&
			sceneChildProp.transformation !== 'none' &&
			typeof value !== 'undefined' &&
			typeof value !== 'function' &&
			!ScenePropUtilities.bValueAnimation(value)
		)
	}

	static getValueDrawerTransformationType(name: string): TDrawerTransformation | null {
		const sceneChildProp = SceneChildPropsData[name as TSceneChildPropsDataKeys]

		return sceneChildProp && sceneChildProp.transformation !== 'none' ? sceneChildProp.transformation : null
	}

	static getTransformedValue(drawer: DrawerCanvas, name: string, value: any): string | number | Array<number> {
		const sceneChildProp = SceneChildPropsData[name as TSceneChildPropsDataKeys]

		if (ScenePropUtilities.bPropTransformable(name, value)) {
			let transformedValueFunction

			switch (sceneChildProp.transformation) {
				case 'angle':
					transformedValueFunction = Utilities.toRadians
					break
				case 'resolution-based':
					transformedValueFunction = drawer.getValueFromResolution.bind(drawer)
					break
				case 'resolution-scaled-based':
					transformedValueFunction = drawer.getValueFromResolutionScaled.bind(drawer)
					break
			}

			return transformedValueFunction
				? Array.isArray(value)
					? [transformedValueFunction(value[0]), transformedValueFunction(value[1])]
					: transformedValueFunction(value)
				: value
		}

		return value
	}

	static getTransformedValueInverse(
		drawer: DrawerCanvas,
		name: TSceneChildPropsDataKeys,
		value: any
	): number | Array<number> {
		const sceneChildProp = SceneChildPropsData[name] as ISceneChildPropData

		if (ScenePropUtilities.bPropTransformable(name, value)) {
			let transformedValueFunction

			switch (sceneChildProp.transformation) {
				case 'angle':
					transformedValueFunction = Utilities.toDegrees
					break
				case 'resolution-based':
					transformedValueFunction = drawer.getValueFromResolutionScaled.bind(drawer)
					break
				case 'resolution-scaled-based':
					transformedValueFunction = drawer.getValueFromResolution.bind(drawer)
					break
			}

			if (transformedValueFunction)
				return Array.isArray(value)
					? [transformedValueFunction(value[0]), transformedValueFunction(value[1])]
					: transformedValueFunction(value)
		}

		return value
	}
}

export default ScenePropUtilities
