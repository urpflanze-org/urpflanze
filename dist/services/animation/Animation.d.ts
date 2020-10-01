import { ShapeBaseProp } from '@core/types/ShapeBase';
import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas';
import { TAnimation } from '@services/types/animation';
declare const Animation: {
    composeAnimation: (drawer: DrawerCanvas, prop_name: string, animation: TAnimation) => ShapeBaseProp<any>;
};
export default Animation;
//# sourceMappingURL=Animation.d.ts.map