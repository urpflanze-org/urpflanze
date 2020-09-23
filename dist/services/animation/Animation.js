import ScenePropUtilities from "../scene-utilities/ScenePropUtilities";
import composeSimpleAnimation from "./Simple";
class Animation {
    static composeAnimation(drawer, prop_name, animation) {
        switch (animation.type) {
            case 'simple': {
                const simpleAnimation = Object.assign({}, animation.value);
                simpleAnimation.from = ScenePropUtilities.getTransformedValue(drawer, prop_name, simpleAnimation.from);
                simpleAnimation.to = ScenePropUtilities.getTransformedValue(drawer, prop_name, simpleAnimation.to);
                return composeSimpleAnimation(simpleAnimation);
            }
            case 'raw': {
                const rawValue = animation.value;
                return eval(rawValue.raw);
            }
        }
        return () => 0;
    }
}
export default Animation;
//# sourceMappingURL=Animation.js.map