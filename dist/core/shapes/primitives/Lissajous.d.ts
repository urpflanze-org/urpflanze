import { ShapeBasePropArguments } from '@core/types/ShapeBase';
import ShapeLoop from '@core/shapes/ShapeLoop';
import { LissajousProps, LissajousSettings } from '@core/interfaces/shapes/PrimitiveInterfaces';
/**
 * Lissajous shape
 *
 * @class Lissajous
 * @extends {ShapeLoop}
 */
declare class Lissajous extends ShapeLoop {
    protected props: LissajousProps;
    /**
     * Creates an instance of Lissajous.
     *
     * @param {LissajousSettings} [settings={}]
     * @memberof Lissajous
     */
    constructor(settings?: LissajousSettings);
    /**
     * Get property value
     *
     * @param {keyof LissajousProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof Lissajous
     */
    getProp(key: keyof LissajousProps, prop_arguments?: ShapeBasePropArguments, default_value?: any): any;
    /**
     * Set single or multiple props
     *
     * @param {(keyof LissajousProps | LissajousSettings)} key
     * @param {*} [value]
     * @memberof Lissajous
     */
    setProp(key: keyof LissajousProps | LissajousSettings, value?: any): void;
}
export default Lissajous;
//# sourceMappingURL=Lissajous.d.ts.map