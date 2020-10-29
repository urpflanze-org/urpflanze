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
    clear: (tmp_bounding: TTempBounding) => void;
    add: (tmp_bounding: TTempBounding, x: number, y: number) => void;
    bind: (bounding: IShapeBounding, tmp_bounding: TTempBounding) => void;
};
export default Bounding;
//# sourceMappingURL=bounding.d.ts.map