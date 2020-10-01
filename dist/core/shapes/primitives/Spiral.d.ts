import { ShapeBasePropArguments } from '@core/types/ShapeBase';
import { SpiralType } from '@core/types/Spiral';
import { SpiralProps, SpiralSettings } from '@core/interfaces/shapes/PrimitiveInterfaces';
import ShapeLoop from '../ShapeLoop';
/**
 * Spiral shape
 *
 * @class Spiral
 * @extends {ShapeLoop}
 */
declare class Spiral extends ShapeLoop {
    protected props: SpiralProps;
    /**
     * Spural types
     *
     * @static
     * @type {{ [name in SpiralType]: SpiralType }}
     * @memberof Spiral
     */
    static readonly types: {
        [name in SpiralType]: SpiralType;
    };
    /**
     * Creates an instance of Spiral.
     *
     * @param {SpiralSettings} [settings={}]
     * @memberof Spiral
     */
    constructor(settings?: SpiralSettings);
    /**
     * Get property value
     *
     * @param {keyof SpiralProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [defaul_value]
     * @returns {*}
     * @memberof Spiral
     */
    getProp(key: keyof SpiralProps, prop_arguments?: ShapeBasePropArguments, defaul_value?: any): any;
    /**
     * Set single or multiple props
     *
     * @param {(keyof SpiralProps | SpiralSettings)} key
     * @param {*} [value]
     * @memberof Spiral
     */
    setProp(key: keyof SpiralProps | SpiralSettings, value?: any): void;
    /**
     * Point position and scale factor for spiral types
     *
     * @static
     * @param {SpiralType} spiral
     * @param {number} angle
     * @returns {number}
     * @memberof Spiral
     */
    static getRFromSpiralType(spiral: SpiralType, angle: number): number;
}
export default Spiral;
//# sourceMappingURL=Spiral.d.ts.map