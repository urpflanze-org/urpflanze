import { ShapeBasePropArguments } from '@core/types/ShapeBase';
import ShapeLoop from '../ShapeLoop';
import { RoseProps, RoseSettings } from '@core/interfaces/shapes/PrimitiveInterfaces';
/**
 * Rose shape
 *
 * @class Rose
 * @extends {ShapeLoop}
 */
declare class Rose extends ShapeLoop {
    protected props: RoseProps;
    /**
     * Creates an instance of Rose.
     *
     * @param {RoseSettings} [settings={}]
     * @memberof Rose
     */
    constructor(settings?: RoseSettings);
    /**
     * Get property value
     *
     * @param {keyof RoseProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof Rose
     */
    getProp(key: keyof RoseProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    /**
     * Set single or multiple props
     *
     * @param {(keyof RoseProps | RoseSettings)} key
     * @param {*} [value]
     * @memberof Rose
     */
    setProp(key: keyof RoseProps | RoseSettings, value?: any): void;
    /**
     * Return end angle of rose
     *
     * @static
     * @param {number} n
     * @param {number} d
     * @returns {number}
     * @memberof Rose
     */
    static getFinalAngleFromK(n: number, d: number): number;
}
export default Rose;
//# sourceMappingURL=Rose.d.ts.map