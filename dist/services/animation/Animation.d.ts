import { TAnimation } from "../types/animation";
import { TSceneChildProp } from "../../core/types/scene-child";
import Drawer from "../drawers/Drawer";
/**
 * @ignore
 * @internal
 * @category Services.Animation
 */
declare const Animation: {
    composeAnimation: (drawer: Drawer<any, any>, prop_name: string, animation: TAnimation) => TSceneChildProp<any>;
};
export default Animation;
//# sourceMappingURL=Animation.d.ts.map