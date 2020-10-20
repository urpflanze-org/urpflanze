import { toRadians, toDegrees } from "../../Utilites";
import SceneChildPropsData, { ISceneChildPropData, TSceneChildPropsDataKeys, } from "./SceneChildPropsData";
/**
 *
 * @category Services.Scene Utilities
 * @class ScenePropUtilities
 */
var ScenePropUtilities = /** @class */ (function () {
    function ScenePropUtilities() {
    }
    //#region ShapeLoop
    ScenePropUtilities.bValueLoop = function (value) {
        return (typeof value === 'object' &&
            'start' in value &&
            'end' in value &&
            'inc' in value &&
            'vertex' in value &&
            value.vertex.raw &&
            value.vertex.raw.length > 0);
    };
    ScenePropUtilities.bValueVertexCallback = function (value) {
        return value && value.raw && value.raw.length > 0;
    };
    ScenePropUtilities.composeVertexCallback = function (value) {
        if (value && value.raw) {
            var vertexCallback = new Function('vertex', ScenePropUtilities.RAW_ARGUMENTS, 'vertex_index', 'vertex_lenght', "return " + value.raw);
            return vertexCallback;
        }
    };
    ScenePropUtilities.composeLoop = function (loop) {
        var vertex = loop.vertex.raw
            ? new Function('index', ScenePropUtilities.RAW_ARGUMENTS, "return " + loop.vertex.raw)
            : undefined;
        //Todo: number -> resolve function
        return {
            start: loop.start,
            end: loop.end,
            inc: loop.inc,
            vertex: vertex,
        };
    };
    //#endregion
    // static getRandomFunctionForProp(name): (rand: number) => any {
    //     const prop: ISceneChildProp = UISceneChildUtilitiesStatic.sceneChildProps[name]
    //     switch (prop.type)
    //     {
    //         case 'multiple-range': case 'range': case 'slider':
    //             return (rand: number) => {
    //                 const min = prop.min as number / 2
    //                 const max = prop.max as number / 2
    //                 const value = min + ((max - min) * rand)
    //                 return prop.bAngle ? toRadians(value) : value
    //             }
    //         case 'color':
    //             return (rand: number) => `hsl(${Math.floor(360 * rand)}, ${Math.floor(25 + 75 * rand)}%, ${Math.floor(25 + 75 * rand)}%)`
    //         default:
    //             return (rand: number) => undefined
    //     }
    // }
    //#endregion
    //#region Props relative to drawer
    ScenePropUtilities.bValueAnimation = function (value) {
        return (value &&
            typeof value === 'object' &&
            value.type &&
            (value.type === 'simple' || value.type === 'raw') /*|| value.type == 'random'*/);
    };
    ScenePropUtilities.bValueDrawer = function (value) {
        return value && typeof value === 'object' && value.type && value.type === 'drawer-transformation';
    };
    ScenePropUtilities.bPropTransformable = function (name, value) {
        var sceneChildProp = SceneChildPropsData[name];
        return (sceneChildProp &&
            sceneChildProp.transformation !== 'none' &&
            typeof value !== 'undefined' &&
            typeof value !== 'function' &&
            !ScenePropUtilities.bValueAnimation(value));
    };
    ScenePropUtilities.getValueDrawerTransformationType = function (name) {
        var sceneChildProp = SceneChildPropsData[name];
        return sceneChildProp && sceneChildProp.transformation !== 'none' ? sceneChildProp.transformation : null;
    };
    ScenePropUtilities.getTransformedValue = function (drawer, name, value) {
        var sceneChildProp = SceneChildPropsData[name];
        if (ScenePropUtilities.bPropTransformable(name, value)) {
            var transformedValueFunction = void 0;
            switch (sceneChildProp.transformation) {
                case 'angle':
                    transformedValueFunction = toRadians;
                    break;
                case 'resolution-based':
                    transformedValueFunction = drawer.getValueFromResolution.bind(drawer);
                    break;
                case 'resolution-scaled-based':
                    transformedValueFunction = drawer.getValueFromResolutionScaled.bind(drawer);
                    break;
            }
            return transformedValueFunction
                ? Array.isArray(value)
                    ? [transformedValueFunction(value[0]), transformedValueFunction(value[1])]
                    : transformedValueFunction(value)
                : value;
        }
        return value;
    };
    ScenePropUtilities.getTransformedValueInverse = function (drawer, name, value) {
        var sceneChildProp = SceneChildPropsData[name];
        if (ScenePropUtilities.bPropTransformable(name, value)) {
            var transformedValueFunction = void 0;
            switch (sceneChildProp.transformation) {
                case 'angle':
                    transformedValueFunction = toDegrees;
                    break;
                case 'resolution-based':
                    transformedValueFunction = drawer.getValueFromResolutionScaled.bind(drawer);
                    break;
                case 'resolution-scaled-based':
                    transformedValueFunction = drawer.getValueFromResolution.bind(drawer);
                    break;
            }
            if (transformedValueFunction)
                return Array.isArray(value)
                    ? [transformedValueFunction(value[0]), transformedValueFunction(value[1])]
                    : transformedValueFunction(value);
        }
        return value;
    };
    ScenePropUtilities.RAW_ARGUMENTS = '{ context, repetition, time, shape, shape_loop, data }';
    ScenePropUtilities.RAW_ARGUMENTS_WITH_PARENT = '{ context, repetition, parent, time, shape, shape_loop, data }';
    return ScenePropUtilities;
}());
export default ScenePropUtilities;
//# sourceMappingURL=ScenePropUtilities.js.map