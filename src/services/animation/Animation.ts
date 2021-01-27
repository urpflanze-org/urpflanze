import { ISimpleAnimation, TAnimation } from '@services/types/animation'
import Simple from '@services/animation/Simple'
import { TSceneChildProp } from '@core/types/scene-child'
import Scene from '@core/Scene'
import SceneUtilitiesExtended from '@services/scene-utilities/SceneUtilitiesExtended'
import { TDrawerPropsExtendedKeys, TSceneChildPropsExtendedKeys } from '@services/types/scene-utilities'
import * as Urpflanze from 'src/index-light'

/**
 * @ignore
 * @internal
 * @category Services.Animation
 */
const Animation = {
	composeAnimation: (
		scene: Scene,
		prop_name: Exclude<TSceneChildPropsExtendedKeys | TDrawerPropsExtendedKeys, 'loop'>,
		animation: TAnimation
	): TSceneChildProp<any> => {
		switch (animation.type) {
			case 'simple': {
				const simpleAnimation: ISimpleAnimation = { ...animation.value }

				simpleAnimation.from = SceneUtilitiesExtended.getTransformedValue(scene, prop_name, simpleAnimation.from)
				simpleAnimation.to = SceneUtilitiesExtended.getTransformedValue(scene, prop_name, simpleAnimation.to)

				return Simple.compose(simpleAnimation)
			}
			case 'raw': {
				const rawValue = animation.value
				return new Function('Urpflanze', 'scene', `"use strict"; return ${rawValue.raw}`)(Urpflanze, scene)
			}
			// case 'random': {
			//     const randomValue = SetProp.getRandomFunctionForProp(prop_name)
			//     return ({ shape }) => randomValue(shape.rand())
			// }
		}
	},
}

export default Animation
