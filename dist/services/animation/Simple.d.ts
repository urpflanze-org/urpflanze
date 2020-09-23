import { ShapeBaseProp } from "../../core/types/ShapeBase";
import { ISimpleAnimation } from "../types/animation";
import { TArray } from "../../core/math/Vec2";
declare const composeSimpleAnimation: (simpleAnimation: ISimpleAnimation) => ShapeBaseProp<string | number | TArray>;
export default composeSimpleAnimation;
