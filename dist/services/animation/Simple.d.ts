import { ISimpleAnimation, TSimpleAnimationLoop, TSimpleAnimationUncontrolledLoop, TSimpleAnimationStatic } from "../types/animation";
import { TArray } from "../../core/math/Vec2";
import { TSceneChildProp } from "../../core/types/scene-child";
declare const Simple: {
    loop: (props: TSimpleAnimationLoop) => TSceneChildProp<string | number | TArray>;
    uncontrolledLoop: (props: TSimpleAnimationUncontrolledLoop) => TSceneChildProp<string | number | TArray>;
    static: (props: TSimpleAnimationStatic) => TSceneChildProp<string | number | TArray>;
    compose: (simpleAnimation: ISimpleAnimation) => TSceneChildProp<string | number | TArray>;
};
export default Simple;
//# sourceMappingURL=Simple.d.ts.map