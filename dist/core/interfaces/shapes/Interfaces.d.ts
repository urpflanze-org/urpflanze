import SceneChild from '@core/SceneChild';
import { ShapeBaseProp, ShapeLoopGenerator, VertexCallbackGenerator } from '@core/types/ShapeBase';
export declare enum ShapePrimitiveAdaptMode {
    None = 0,
    Scale = 2,
    Center = 4,
    Fill = 8
}
/**
 * Props interface
 *
 * @interface ShapeBaseProps
 */
interface ShapeBaseProps {
    distance?: ShapeBaseProp<number | Array<number>>;
    repetitions?: ShapeBaseProp<number | Array<number>>;
    displace?: ShapeBaseProp<number>;
    skewX?: ShapeBaseProp<number>;
    skewY?: ShapeBaseProp<number>;
    squeezeX?: ShapeBaseProp<number>;
    squeezeY?: ShapeBaseProp<number>;
    rotateX?: ShapeBaseProp<number>;
    rotateY?: ShapeBaseProp<number>;
    rotateZ?: ShapeBaseProp<number>;
    scale?: ShapeBaseProp<number | Array<number>>;
    translate?: ShapeBaseProp<number | Array<number>>;
    rotationOrigin?: ShapeBaseProp<number | Array<number>>;
}
interface ShapePrimitiveProps extends ShapeBaseProps {
    sideLength?: ShapeBaseProp<number | Array<number>>;
    fillColor?: ShapeBaseProp<number | string>;
    lineWidth?: ShapeBaseProp<number>;
    strokeColor?: ShapeBaseProp<number | string>;
}
interface ShapeLoopProps extends ShapePrimitiveProps {
    loop?: ShapeLoopGenerator;
}
interface ShapeBaseSettings {
    name?: string;
    order?: number;
    type?: string;
    data?: any;
    distance?: ShapeBaseProp<number | Array<number>>;
    repetitions?: ShapeBaseProp<number | Array<number>>;
    displace?: ShapeBaseProp<number>;
    skewX?: ShapeBaseProp<number>;
    skewY?: ShapeBaseProp<number>;
    squeezeX?: ShapeBaseProp<number>;
    squeezeY?: ShapeBaseProp<number>;
    rotateX?: ShapeBaseProp<number>;
    rotateY?: ShapeBaseProp<number>;
    rotateZ?: ShapeBaseProp<number>;
    scale?: ShapeBaseProp<number | Array<number>>;
    translate?: ShapeBaseProp<number | Array<number>>;
    rotationOrigin?: ShapeBaseProp<number | Array<number>>;
    bUseParent?: boolean;
}
interface ShapePrimitiveSettings extends ShapeBaseSettings {
    bAdaptBuffer?: ShapePrimitiveAdaptMode;
    bCloseShape?: boolean;
    sideLength?: ShapeBaseProp<number | Array<number>>;
    vertexCallback?: VertexCallbackGenerator;
    fillColor?: ShapeBaseProp<number | string>;
    lineWidth?: ShapeBaseProp<number>;
    strokeColor?: ShapeBaseProp<number | string>;
}
interface ShapeLoopSettings extends ShapePrimitiveSettings {
    loop?: ShapeLoopGenerator;
    shapeLoopPropsDependencies?: Array<string>;
}
interface ShapeBufferSettings extends ShapePrimitiveSettings {
    shape?: Float32Array | Array<number>;
}
interface ShapeSettings extends ShapeBaseSettings {
    shape?: SceneChild;
}
export { ShapeBaseProps, ShapeBaseSettings, ShapePrimitiveProps, ShapePrimitiveSettings, ShapeSettings, ShapeBufferSettings, ShapeLoopProps, ShapeLoopSettings, };
//# sourceMappingURL=Interfaces.d.ts.map