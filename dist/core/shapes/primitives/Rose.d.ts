import { ShapeBasePropArguments } from "../../types/ShapeBase";
import ShapeLoop from "../ShapeLoop";
import { RoseProps, RoseSettings } from "../../interfaces/shapes/PrimitiveInterfaces";
declare class Rose extends ShapeLoop {
    protected props: RoseProps;
    constructor(settings?: RoseSettings);
    getProp(key: keyof RoseProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    setProp(key: keyof RoseProps | RoseSettings, value?: any): void;
    static getFinalAngleFromK(n: number, d: number): number;
}
export default Rose;
