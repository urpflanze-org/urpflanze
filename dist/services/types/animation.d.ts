import { TEasing } from "../animation/Easings";
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
 * @category Services.Animation
 */
export declare type TDrawerTransformation = 'none' | 'angle' | 'resolution-based' | 'resolution-scaled-based';
export declare type TDrawerValue = {
    type: 'drawer-transformation';
    value: any;
};
export interface IShapeLoop {
    start: TCallableValue<number>;
    end: TCallableValue<number>;
    inc: TCallableValue<number>;
    vertex: ICallableValue<Array<number> | Float32Array>;
    dynamyc: boolean;
}
export interface IVertexCallback extends ICallableValue<Array<number> | Float32Array> {
    dynamic: boolean;
}
interface IAnimationSimple {
    type: 'simple';
    value: ISimpleAnimation;
}
interface IAnimationRaw {
    type: 'raw';
    value: IRawState;
}
export declare type TAnimation = IAnimationSimple | IAnimationRaw;
export declare type TModeFunction = TEasing | 'sin' | 'cos';
export declare type TSimpleAnimationType = 'loop' | 'uncontrolled-loop' | 'static';
export interface ISimpleAnimation {
    from: number | Array<number> | string;
    to: number | Array<number> | string;
    durate: number;
    invertOdd: boolean;
    type: TSimpleAnimationType;
    mode?: 'sinusoidal' | 'easing';
    mode_function?: TModeFunction;
    delay?: number;
    type_value?: 'int' | 'float';
    colorTransitionMode?: 'hue' | 'rgb';
}
export declare type TSimpleAnimationLoop = Omit<ISimpleAnimation, 'delay' | 'type'>;
export declare type TSimpleAnimationUncontrolledLoop = Omit<ISimpleAnimation, 'type'>;
export declare type TSimpleAnimationStatic = Omit<ISimpleAnimation, 'type'>;
export interface IRawState extends ICallableValue<number | Array<number> | Float32Array | string> {
}
export {};
//# sourceMappingURL=animation.d.ts.map