import ShapeLoop from '@core/shapes/ShapeLoop';
import { IRoseProps, IRoseSettings } from '@core/types/shape-primitive';
import { ISceneChildPropArguments } from '@core/types/scene-child';
/**
 * Rose shape
 *
 * @class Rose
 * @extends {ShapeLoop}
 */
declare class Rose extends ShapeLoop {
    protected props: IRoseProps;
    /**
     * Creates an instance of Rose.
     *
     * @param {IRoseSettings} [settings={}]
     * @memberof Rose
     */
    constructor(settings?: IRoseSettings);
    /**
     * Get property value
     *
     * @param {keyof RoseProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof Rose
     */
    getProp(key: keyof IRoseProps, prop_arguments?: ISceneChildPropArguments, default_value?: any): any;
    /**
     * Set single or multiple props
     *
     * @param {(keyof IRoseProps | IRoseSettings)} key
     * @param {*} [value]
     * @memberof Rose
     */
    setProp(key: keyof IRoseProps | IRoseSettings, value?: any): void;
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