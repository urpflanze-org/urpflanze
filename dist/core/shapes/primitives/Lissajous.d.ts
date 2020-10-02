import ShapeLoop from '@core/shapes/ShapeLoop';
import { ISceneChildPropArguments } from '@core/types/scene-child';
import { ILissajousProps, ILissajousSettings } from '@core/types/shape-primitive';
/**
 * Lissajous shape
 *
 * @class Lissajous
 * @extends {ShapeLoop}
 */
declare class Lissajous extends ShapeLoop {
    protected props: ILissajousProps;
    /**
     * Creates an instance of Lissajous.
     *
     * @param {ILissajousSettings} [settings={}]
     * @memberof Lissajous
     */
    constructor(settings?: ILissajousSettings);
    /**
     * Get property value
     *
     * @param {keyof ILissajousProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof Lissajous
     */
    getProp(key: keyof ILissajousProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any;
    /**
     * Set single or multiple props
     *
     * @param {(keyof ILissajousProps | ILissajousProps)} key
     * @param {*} [value]
     * @memberof Lissajous
     */
    setProp(key: keyof ILissajousProps | ILissajousProps, value?: any): void;
}
export default Lissajous;
//# sourceMappingURL=Lissajous.d.ts.map