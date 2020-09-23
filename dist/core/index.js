import Scene from "./Scene";
import SceneChild from "./SceneChild";
import Group from "./Group";
import Line from "./shapes/primitives/Line";
import Triangle from "./shapes/primitives/Triangle";
import Rect from "./shapes/primitives/Rect";
import RegularPolygon from "./shapes/primitives/RegularPolygon";
import Circle from "./shapes/primitives/Circle";
import Rose from "./shapes/primitives/Rose";
import Spiral from "./shapes/primitives/Spiral";
import Lissajous from "./shapes/primitives/Lissajous";
import Shape from "./shapes/Shape";
import ShapePrimitive from "./shapes/ShapePrimitive";
import ShapeLoop from "./shapes/ShapeLoop";
import ShapeBuffer from "./shapes/ShapeBuffer";
import { toDegrees, toRadians, isDef, clamp, relativeClamp } from "./Utilites";
import Context from "./Context";
import { ShapePrimitiveAdaptMode } from "./interfaces/shapes/Interfaces";
const Urpflanze = Object.assign(Object.assign({ ShapePrimitiveAdaptMode }, Context), { toDegrees,
    toRadians,
    isDef,
    clamp,
    relativeClamp,
    Scene,
    SceneChild,
    Group,
    Line,
    Triangle,
    Rect,
    RegularPolygon,
    Circle,
    Rose,
    Lissajous,
    Spiral,
    Shape,
    ShapeBuffer,
    ShapeLoop,
    ShapePrimitive });
export default Urpflanze;
//# sourceMappingURL=index.js.map