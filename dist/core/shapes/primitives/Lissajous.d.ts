import { ShapeBasePropArguments } from "../../types/ShapeBase";
import ShapeLoop from "../ShapeLoop";
import { LissajousProps, LissajousSettings } from "../../interfaces/shapes/PrimitiveInterfaces";
declare class Lissajous extends ShapeLoop {
    protected props: LissajousProps;
    constructor(settings?: LissajousSettings);
    getProp(key: keyof LissajousProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    setProp(key: keyof LissajousProps | LissajousSettings, value?: any): void;
}
export default Lissajous;
