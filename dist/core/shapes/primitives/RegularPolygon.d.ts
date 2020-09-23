import { RegularPolygonProps, RegularPolygonSettings } from "../../interfaces/shapes/PrimitiveInterfaces";
import ShapeLoop from "../ShapeLoop";
import { ShapeBasePropArguments } from "../../types/ShapeBase";
declare class RegularPolygon extends ShapeLoop {
    protected props: RegularPolygonProps;
    constructor(settings?: RegularPolygonSettings);
    getProp(key: keyof RegularPolygonProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    setProp(key: keyof RegularPolygonProps | RegularPolygonSettings, value?: any): void;
}
export default RegularPolygon;
