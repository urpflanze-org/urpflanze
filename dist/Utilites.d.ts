/**
 * @ignore
 */
export declare const parseFunction: {
    suffix: string;
    parse: (data: any) => any;
    unparse: (data: any) => any;
};
/**
 * Cancellable Promice Interface
 *
 * @ignore
 */
export interface ICancelablePromise<T> {
    promise: Promise<T>;
    resolved: () => boolean;
    canceled: () => boolean;
    cancel: () => void;
}
/**
 * Create Cancellable Promise
 *
 * @ignore
 * @template T
 * @param {Promise<T>} promise
 * @returns {ICancelablePromise<T>}
 */
export declare function cancelablePromise<T>(promise: Promise<T>): ICancelablePromise<T>;
/**
 * Get current timestamp in milliseconds
 *
 * @ignore
 * @returns {number}
 */
export declare function now(): number;
/**
 * Convert number from radians to degrees
 *
 * @category Utilities
 *
 * @example
 * ```javascript
 * Urpflanze.toDegrees(Math.PI) // 180
 * ```
 *
 * @param {number} radians
 * @returns {number}
 */
export declare function toDegrees(radians: number): number;
/**
 * Convert angle from degrees to radians
 * @example
 * ```javascript
 * Urpflanze.toRadians(180) // 3.141592653589793
 * ```
 *
 * @category Utilities
 * @param {number} degrees
 * @returns {number}
 */
export declare function toRadians(degrees: number): number;
/**
 * Force value to array
 *
 * @ignore
 * @param {(number | Array<number>)} t
 * @returns {Array<number>}
 */
export declare function toArray(t: number | Array<number>): Array<number>;
/**
 * Return number between min and max
 *
 * @category Utilities
 * @example
 * ```javascript
 * Urpflanze.clamp(0, 1, 1.2) // 1
 * ```
 * @example
 * ```javascript
 * Urpflanze.clamp(0, 1, -2) // 0
 * ```
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
export declare function clamp(min: number, max: number, value: number): number;
/**
 * Map number between refMin e refMax from min and max
 *
 * @category Utilities
 *
 * @example
 * ```javascript
 * Urpflanze.relativeClamp(0, 1, 0.5, 100, 200) // 150
 * ```
 *
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} value
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */
export declare function relativeClamp(refMin: number, refMax: number, value: number, toMin: number, toMax: number): number;
//# sourceMappingURL=Utilites.d.ts.map