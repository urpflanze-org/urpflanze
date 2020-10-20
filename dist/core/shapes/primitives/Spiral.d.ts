import ShapeLoop from "../ShapeLoop";
import { ISpiralProps, ISpiralSettings, TSpiralType } from "../../types/shape-primitive";
import { ISceneChildPropArguments } from "../../types/scene-child";
/**
 * Spiral shape
 *
 * @category Core.Primitives
 * @class Spiral
 * @extends {ShapeLoop}
 */
declare class Spiral extends ShapeLoop {
    protected props: ISpiralProps;
    /**
     * Spural types
     *
     * @static
     * @type {{ [name in TSpiralType]: TSpiralType }}
     * @memberof Spiral
     */
    static readonly types: {
        [name in TSpiralType]: TSpiralType;
    };
    /**
     * Creates an instance of Spiral.
     *
     * @param {SpiralSettings} [settings={}]
     * @memberof Spiral
     */
    constructor(settings?: ISpiralSettings);
    /**
     * Get property value
     *
     * @param {keyof ISpiralProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {any} [default_value]
     * @returns {*}
     * @memberof Spiral
     */
    getProp(key: keyof ISpiralProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any;
    /**
     * Set single or multiple props
     *
     * @param {(keyof ISpiralProps | ISpiralProps)} key
     * @param {*} [value]
     * @memberof Spiral
     */
    setProp(key: keyof ISpiralProps | ISpiralProps, value?: any): void;
    /**
     * Point position and scale factor for spiral types
     *
     * @static
     * @param {TSpiralType} spiral
     * @param {number} angle
     * @returns {number}
     * @memberof Spiral
     */
    static getRFromTSpiralType(spiral: TSpiralType, angle: number): number;
}
export default Spiral;
//# sourceMappingURL=Spiral.d.ts.map