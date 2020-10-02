import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas';
import { TAnimation } from '@services/types/animation';
import { TSceneChildProp } from '@core/types/scene-child';
declare const Animation: {
    composeAnimation: (drawer: DrawerCanvas, prop_name: string, animation: TAnimation) => TSceneChildProp<any>;
};
export default Animation;
//# sourceMappingURL=Animation.d.ts.map