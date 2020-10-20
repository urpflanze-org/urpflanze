var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import ScenePropUtilities from "../scene-utilities/ScenePropUtilities";
import Simple from "./Simple";
var Animation = {
    composeAnimation: function (drawer, prop_name, animation) {
        switch (animation.type) {
            case 'simple': {
                var simpleAnimation = __assign({}, animation.value);
                simpleAnimation.from = ScenePropUtilities.getTransformedValue(drawer, prop_name, simpleAnimation.from);
                simpleAnimation.to = ScenePropUtilities.getTransformedValue(drawer, prop_name, simpleAnimation.to);
                return Simple.compose(simpleAnimation);
            }
            case 'raw': {
                var rawValue = animation.value;
                return eval(rawValue.raw);
            }
            // case 'random': {
            //     const randomValue = SetProp.getRandomFunctionForProp(prop_name)
            //     return ({ shape }) => randomValue(shape.rand())
            // }
        }
    },
};
export default Animation;
//# sourceMappingURL=Animation.js.map