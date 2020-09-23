import { ShapeBaseProp } from "../../types/ShapeBase";
import { ShapeLoopProps, ShapeLoopSettings } from "./Interfaces";
import { SpiralType } from "../../types/Spiral";
interface RegularPolygonProps extends ShapeLoopProps {
    sideNumber?: ShapeBaseProp<number>;
}
interface RegularPolygonSettings extends ShapeLoopSettings {
    sideNumber?: ShapeBaseProp<number>;
}
interface RoseProps extends ShapeLoopProps {
    n?: ShapeBaseProp<number>;
    d?: ShapeBaseProp<number>;
}
interface RoseSettings extends ShapeLoopSettings {
    n?: ShapeBaseProp<number>;
    d?: ShapeBaseProp<number>;
}
interface SpiralProps extends ShapeLoopProps {
    spiral?: SpiralType;
    twists?: ShapeBaseProp<number>;
    twists_start?: ShapeBaseProp<number>;
}
interface SpiralSettings extends ShapeLoopSettings {
    spiral?: SpiralType;
    twists?: ShapeBaseProp<number>;
    twists_start?: ShapeBaseProp<number>;
}
interface LissajousProps extends ShapeLoopProps {
    wx?: ShapeBaseProp<number>;
    wy?: ShapeBaseProp<number>;
    wz?: ShapeBaseProp<number>;
}
interface LissajousSettings extends ShapeLoopSettings {
    wx?: ShapeBaseProp<number>;
    wy?: ShapeBaseProp<number>;
    wz?: ShapeBaseProp<number>;
}
export { RegularPolygonProps, RegularPolygonSettings, RoseProps, RoseSettings, SpiralProps, SpiralSettings, LissajousProps, LissajousSettings, };
