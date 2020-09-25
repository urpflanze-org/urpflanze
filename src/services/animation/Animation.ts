import { ShapeBaseProp } from '@core/types/ShapeBase'

import ScenePropUtilities from '@services/scene-utilities/ScenePropUtilities'
import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas'

import { TAnimation } from '@services/types/animation'
import Simple from '@services/animation/Simple'

const Animation = {
	composeAnimation: (drawer: DrawerCanvas, prop_name: string, animation: TAnimation): ShapeBaseProp<any> => {
		switch (animation.type) {
			case 'simple': {
				const simpleAnimation = { ...animation.value }

				simpleAnimation.from = ScenePropUtilities.getTransformedValue(drawer, prop_name, simpleAnimation.from)
				simpleAnimation.to = ScenePropUtilities.getTransformedValue(drawer, prop_name, simpleAnimation.to)

				return Simple.compose(simpleAnimation)
			}
			case 'raw': {
				const rawValue = animation.value
				return eval(rawValue.raw)
			}
			// case 'random': {
			//     const randomValue = SetProp.getRandomFunctionForProp(prop_name)
			//     return ({ shape }) => randomValue(shape.rand())
			// }
		}
	},
}

export default Animation
