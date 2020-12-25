import { toRadians, toDegrees } from 'src/Utilites'

import { TVertexCallback } from '@core/types/shape-base'

import { IShapeLoopAnimation, TAnimation } from '@services/types/animation'
import { IShapeLoopGenerator, TShapeLoopGeneratorFormula } from '@core/types/shape-primitives'
import { TSceneUtilityPropTransformation, TSceneUtilityPropValue } from '@services/types/scene-utilities'

import Scene from '@core/Scene'
import SceneChildPropsData, {
	ISceneChildPropData,
	TSceneChildPropsDataKeys,
} from '@services/scene-utilities/SceneChildPropsData'

/**
 *
 * @category Services.Scene Utilities
 * @class ScenePropUtilities
 */
class ScenePropUtilities {
	public static readonly RAW_ARGUMENTS: string = '{ context, repetition, time, shape, shape_loop, data }'
	public static readonly RAW_ARGUMENTS_WITH_PARENT: string =
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

	static composeVertexCallback(value: any): TVertexCallback | undefined {
		if (value && value.raw) {
			const vertexCallback = new Function(
				'vertex',
				'vertexRepetition',
				ScenePropUtilities.RAW_ARGUMENTS,
				`return ${value.raw}`
			) as TVertexCallback

			return vertexCallback
		}
	}

	static composeLoop(loop: IShapeLoopAnimation): IShapeLoopGenerator {
		const vertex = loop.vertex.raw
			? (new Function(
					'shapeLoopRepetition',
					ScenePropUtilities.RAW_ARGUMENTS,
					`return ${loop.vertex.raw}`
			  ) as TShapeLoopGeneratorFormula)
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

	static bTransformableValue(value: TSceneUtilityPropValue | any): boolean {
		return (
			value !== null &&
			typeof value === 'object' &&
			typeof value.type === 'string' &&
			value.type === 'transformable-prop'
		)
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

	static getValueDrawerTransformationType(name: string): TSceneUtilityPropTransformation | null {
		const sceneChildProp = SceneChildPropsData[name as TSceneChildPropsDataKeys]

		return sceneChildProp && sceneChildProp.transformation !== 'none' ? sceneChildProp.transformation : null
	}

	static getTransformedValue(scene: Scene, name: string, value: any): string | number | Array<number> {
		const sceneChildProp = SceneChildPropsData[name as TSceneChildPropsDataKeys]

		if (ScenePropUtilities.bPropTransformable(name, value)) {
			switch (sceneChildProp.transformation) {
				case 'angle':
					if (Array.isArray(value)) {
						return [toRadians(value[0]), toRadians(value[1])]
					}
					return toRadians(value)
				case 'scene-size-percentage': {
					if (typeof scene !== 'undefined') {
						if (Array.isArray(value)) {
							return [(value[0] * scene.width) / 100, (value[1] * scene.height) / 100]
						}
						// TODO: hypot? or scene-width/height-percentage?
						return (value * scene.width) / 100
					}
					break
				}
				case 'scene-size-percentage-inverse': {
					if (typeof scene !== 'undefined') {
						if (Array.isArray(value)) {
							return [(value[0] * 100) / scene.width, (value[1] * 100) / scene.height]
						}
						// TODO: hypot? or scene-width/height-percentage?
						return (value * 100) / scene.width
					}
					break
				}
				// case 'resolution-scaled-based':
				// 	transformedValueFunction = drawer.getValueFromResolutionScaled.bind(drawer)
				// 	break
			}
		}

		return value
	}

	static getTransformedValueInverse(scene: Scene, name: TSceneChildPropsDataKeys, value: any): number | Array<number> {
		const sceneChildProp = SceneChildPropsData[name] as ISceneChildPropData

		if (ScenePropUtilities.bPropTransformable(name, value)) {
			switch (sceneChildProp.transformation) {
				case 'angle': {
					if (Array.isArray(value)) {
						return [toDegrees(value[0]), toDegrees(value[1])]
					}
					return toDegrees(value)
				}
				case 'scene-size-percentage': {
					if (typeof scene !== 'undefined') {
						if (Array.isArray(value)) {
							return [(value[0] * 100) / scene.width, (value[1] * 100) / scene.height]
						}
						// TODO: hypot? or scene-width/height-percentage?
						return (value * 100) / scene.width
					}
					break
				}
				case 'scene-size-percentage-inverse': {
					if (typeof scene !== 'undefined') {
						if (Array.isArray(value)) {
							return [(value[0] * scene.width) / 100, (value[1] * scene.height) / 100]
						}
						// TODO: hypot? or scene-width/height-percentage?
						return (value * scene.width) / 100
					}
					break
				}
				// case 'resolution-scaled-based':
				// 	transformedValueFunction = drawer.getValueFromResolution.bind(drawer)
				// 	break
			}
		}

		return value
	}
}

export default ScenePropUtilities
