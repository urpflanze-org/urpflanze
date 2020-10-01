import { RegularPolygonProps, RegularPolygonSettings } from '@core/interfaces/shapes/PrimitiveInterfaces';
import ShapeLoop from '../ShapeLoop';
import { ShapeBasePropArguments } from '@core/types/ShapeBase';
/**
 * Polygon shape
 *
 * @class RegularPolygon
 * @extends {ShapeLoop}
 */
declare class RegularPolygon extends ShapeLoop {
    protected props: RegularPolygonProps;
    constructor(settings?: RegularPolygonSettings);
    /**
     * Get property value
     *
     * @param {keyof RegularPolygonProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof RegularPolygonProps
     */
    getProp(key: keyof RegularPolygonProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    /**
     * Set single or multiple props
     *
     * @param {(keyof RegularPolygonProps | RegularPolygonSettings)} key
     * @param {*} [value]
     * @memberof RegularPolygonProps
     */
    setProp(key: keyof RegularPolygonProps | RegularPolygonSettings, value?: any): void;
}
export default RegularPolygon;
//# sourceMappingURL=RegularPolygon.d.ts.map