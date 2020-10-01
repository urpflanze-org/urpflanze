import { ShapeBaseProp } from '@core/types/ShapeBase';
import { ISimpleAnimation, TSimpleAnimationLoop, TSimpleAnimationUncontrolledLoop, TSimpleAnimationStatic } from '@services/types/animation';
import { TArray } from '@core/math/Vec2';
declare const Simple: {
    loop: (props: TSimpleAnimationLoop) => ShapeBaseProp<string | number | TArray>;
    uncontrolledLoop: (props: TSimpleAnimationUncontrolledLoop) => ShapeBaseProp<string | number | TArray>;
    static: (props: TSimpleAnimationStatic) => ShapeBaseProp<string | number | TArray>;
    compose: (simpleAnimation: ISimpleAnimation) => ShapeBaseProp<string | number | TArray>;
};
export default Simple;
//# sourceMappingURL=Simple.d.ts.map