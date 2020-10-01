import { TArray } from './math/Vec2';
declare const Utilities: {
    isDef: (object: any) => boolean;
    now: () => number;
    toDegrees: (radians: number) => number;
    toRadians: (degrees: number) => number;
    toArray: (t: number | TArray) => (number | Float32Array)[];
    /**
     * Return true if key exist in props
     * args[0] = props
     * args[1...n] = search key
     *
     * @protected
     * @static
     * @param {...any} args
     * @returns {boolean}
     */
    hasKey: (...args: any) => boolean;
    /**
     * Return number between {min} and {max}
     *
     * @param {number} min
     * @param {number} max
     * @param {number} value
     * @returns {number}
     */
    clamp: (min: number, max: number, value: number) => number;
    /**
     * Map number between {refMin} e {refMin} from {min} and  {max}
     *
     * @example
     * ```javascript
     * relativeClamp2(0.5, 0, 1, 100, 200) // 150
     * ```
     *
     * @param {number} value
     * @param {number} refMin
     * @param {number} refMax
     * @param {number} toMin
     * @param {number} toMax
     * @returns {number}
     */
    relativeClamp: (value: number, refMin: number, refMax: number, toMin: number, toMax: number) => number;
};
export default Utilities;
//# sourceMappingURL=Utilites.d.ts.map