import { ShapeBasePropArguments } from "../../types/ShapeBase";
import { SpiralType } from "../../types/Spiral";
import { SpiralProps, SpiralSettings } from "../../interfaces/shapes/PrimitiveInterfaces";
import ShapeLoop from "../ShapeLoop";
declare class Spiral extends ShapeLoop {
    protected props: SpiralProps;
    static readonly types: {
        [name in SpiralType]: SpiralType;
    };
    constructor(settings?: SpiralSettings);
    getProp(key: keyof SpiralProps, prop_arguments?: ShapeBasePropArguments, defaul_value?: any): any;
    setProp(key: keyof SpiralProps | SpiralSettings, value?: any): void;
    static getRFromSpiralType(spiral: SpiralType, angle: number): number;
}
export default Spiral;
