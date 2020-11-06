import ShapeLoop from "../ShapeLoop";
import { IRoseProps, IRoseSettings } from "../../types/shape-primitive";
import { ISceneChildPropArguments } from "../../types/scene-child";
/**
 * Rose shape
 *
 * @category Core.Primitives
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
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     * @memberof Rose
     */
    getProp(key: keyof IRoseProps, propArguments?: ISceneChildPropArguments, defaultValue?: any): any;
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