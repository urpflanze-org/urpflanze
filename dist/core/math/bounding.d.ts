import { IShapeBounding } from "../types/shape-base";
/**
 * @internale
 * @ignore
 */
export declare type TTempBounding = [number | undefined, number | undefined, number | undefined, number | undefined];
/**
 * @internal
 * @ignore
 */
declare const Bounding: {
    clear: (tmpBounding: TTempBounding) => void;
    add: (tmpBounding: TTempBounding, x: number, y: number) => void;
    bind: (bounding: IShapeBounding, tmpBounding: TTempBounding) => void;
};
export default Bounding;
//# sourceMappingURL=bounding.d.ts.map