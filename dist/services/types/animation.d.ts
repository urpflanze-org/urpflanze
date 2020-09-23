import { TArray } from "../../core/math/Vec2";
import { TEasing } from "../animation/Easings";
interface ICallableValue<T> {
    raw: string;
    state: any;
}
export declare type TCallableValue<T> = T | ICallableValue<T>;
export interface IShapeLoop {
    start: TCallableValue<number>;
    end: TCallableValue<number>;
    inc: TCallableValue<number>;
    vertex: ICallableValue<TArray>;
    dynamyc: boolean;
}
export interface IVertexCallback extends ICallableValue<TArray> {
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
export interface ISimpleAnimation {
    from: number | Array<number> | string;
    to: number | Array<number> | string;
    durate: number;
    invertOdd: boolean;
    type: 'loop' | 'uncontroller-loop' | 'static';
    mode: 'sinusoidal' | 'easing';
    mode_function?: TModeFunction;
    delay?: number;
    type_value?: 'int' | 'float';
    colorTransitionMode?: 'hue' | 'rgb';
}
export interface IRawState extends ICallableValue<number | TArray | string> {
}
export {};
