/**
 * @category Services.Animation
 */
export declare type TEasing = 'linear' | 'quadraticIn' | 'quadraticOut' | 'quadraticInOut' | 'cubicIn' | 'cubicOut' | 'cubicInOut' | 'quarticIn' | 'quarticOut' | 'quarticInOut' | 'quinticIn' | 'quinticOut' | 'quinticInOut' | 'sinusoidalIn' | 'sinusoidalOut' | 'sinusoidalInOut' | 'exponentialIn' | 'exponentialOut' | 'exponentialInOut' | 'circularIn' | 'circularOut' | 'circularInOut';
/**
 *
 *
 * @category Services.Animation
 * @export
 * @interface ICallableValue
 * @template T
 */
export interface ICallableValue<T> {
    /**
     * raw function (string) return T
     *
     * @type {string}
     * @memberof ICallableValue
     */
    raw: string;
    state: any;
}
/**
 * @category Services.Animation
 */
export declare type TCallableValue<T> = T | ICallableValue<T>;
/**
 *
 *
 * @category Services.Animation
 */
export interface IShapeLoopAnimation {
    start: TCallableValue<number>;
    end: TCallableValue<number>;
    inc: TCallableValue<number>;
    vertex: ICallableValue<Array<number> | Float32Array>;
    dynamyc: boolean;
}
/**
 *
 * @category Services.Animation
 */
export interface IVertexCallbackAnimation extends ICallableValue<Array<number> | Float32Array> {
    dynamic: boolean;
}
/**
 *
 * @category Services.Animation
 */
interface IAnimationSimple {
    type: 'simple';
    value: ISimpleAnimation;
}
/**
 *
 * @category Services.Animation
 */
interface IAnimationRaw {
    type: 'raw';
    value: IRawState;
}
/**
 * @category Services.Animation
 */
export declare type TAnimation = IAnimationSimple | IAnimationRaw;
/**
 * @category Services.Animation
 */
export declare type TModeFunction = TEasing | 'sin' | 'cos';
/**
 * @category Services.Animation
 */
export declare type TSimpleAnimationType = 'loop' | 'uncontrolled-loop' | 'static';
/**
 * @category Services.Animation
 */
export interface ISimpleAnimation {
    /**
     * Supported color string format:
     * rgba([0-255], [0-255], [0-255], 0-1)
     * hsla([0-350], [0-100]%, [0-100]%, 0-1)
     * @order 1
     */
    from: number | Array<number> | string;
    /**
     * Supported color string format:
     * rgba([0-255], [0-255], [0-255], 0-1)
     * hsla([0-350], [0-100]%, [0-100]%, 0-1)
     * @order 2
     */
    to: number | Array<number> | string;
    /**
     * Duratin in millisecond
     * @order 3
     */
    durate: number;
    /**
     * Invert animation on odd repetition index
     * @order 4
     */
    invertOdd: boolean;
    /**
     * 'loop' | 'uncontrolled-loop' | 'static'
     * @order 4
     */
    type: TSimpleAnimationType;
    /**
     * type of animate value
     * @order 5
     */
    mode?: 'sinusoidal' | 'easing';
    /**
     * Is based on <mark>mode</mark> value.
     * If mode is 'sinusoidal' the modeFunction value can be 'sin' | 'cos'
     * If mode is 'easing' the modeFunction value can be <a href="[base_url]/TEasing">TEasing</a>
     * @order 6
     */
    modeFunction?: TModeFunction;
    /**
     * @order 7
     */
    delay?: number;
    /**
     * Default is 'float', whit 'int' value, the numbers are rounded
     * @order 8
     */
    typeValue?: 'int' | 'float';
    /**
     * With the 'rgb' value the color will vary linearly according to the mode and mode function,
     * while with 'hue' they will be converted to hsla and then go through the color wheel
     *
     * @order 9
     */
    colorTransitionMode?: 'hue' | 'rgb';
}
/**
 * @category Services.Animation
 */
export declare type TSimpleAnimationLoop = Omit<ISimpleAnimation, 'delay' | 'type'>;
/**
 * @category Services.Animation
 */
export declare type TSimpleAnimationUncontrolledLoop = Omit<ISimpleAnimation, 'type'>;
/**
 * @category Services.Animation
 */
export declare type TSimpleAnimationStatic = Omit<ISimpleAnimation, 'type'>;
/**
 * @category Services.Animation
 */
export interface IRawState extends ICallableValue<number | Array<number> | Float32Array | string> {
}
export {};
//# sourceMappingURL=animation.d.ts.map