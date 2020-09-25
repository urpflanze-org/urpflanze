import { ShapeBaseProp } from "../../core/types/ShapeBase";
import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
import { TAnimation } from "../types/animation";
declare const Animation: {
    composeAnimation: (drawer: DrawerCanvas, prop_name: string, animation: TAnimation) => ShapeBaseProp<any>;
};
export default Animation;
