import { ISimpleAnimation, TSimpleAnimationLoop, TSimpleAnimationUncontrolledLoop, TSimpleAnimationStatic } from "../types/animation";
import { TSceneChildProp } from "../../core/types/scene-child";
declare const Simple: {
    loop: (props: TSimpleAnimationLoop) => TSceneChildProp<string | number | Array<number> | Float32Array>;
    uncontrolledLoop: (props: TSimpleAnimationUncontrolledLoop) => TSceneChildProp<string | number | Array<number> | Float32Array>;
    static: (props: TSimpleAnimationStatic) => TSceneChildProp<string | number | Array<number> | Float32Array>;
    compose: (simpleAnimation: ISimpleAnimation) => TSceneChildProp<string | number | Array<number> | Float32Array>;
};
export default Simple;
//# sourceMappingURL=Simple.d.ts.map