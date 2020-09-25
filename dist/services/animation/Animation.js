import ScenePropUtilities from "../scene-utilities/ScenePropUtilities";
import Simple from "./Simple";
const Animation = {
    composeAnimation: (drawer, prop_name, animation) => {
        switch (animation.type) {
            case 'simple': {
                const simpleAnimation = Object.assign({}, animation.value);
                simpleAnimation.from = ScenePropUtilities.getTransformedValue(drawer, prop_name, simpleAnimation.from);
                simpleAnimation.to = ScenePropUtilities.getTransformedValue(drawer, prop_name, simpleAnimation.to);
                return Simple.compose(simpleAnimation);
            }
            case 'raw': {
                const rawValue = animation.value;
                return eval(rawValue.raw);
            }
        }
    },
};
export default Animation;
//# sourceMappingURL=Animation.js.map