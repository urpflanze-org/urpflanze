import { toDegrees, toRadians } from "../../core/Utilites";
import SceneChildPropsData, { ISceneChildPropData, TSceneChildPropsDataKeys, } from "./SceneChildPropsData";
class ScenePropUtilities {
    static bValueLoop(value) {
        return (typeof value === 'object' &&
            'start' in value &&
            'end' in value &&
            'inc' in value &&
            'vertex' in value &&
            value.vertex.raw &&
            value.vertex.raw.length > 0);
    }
    static bValueVertexCallback(value) {
        return value && value.raw && value.raw.length > 0;
    }
    static composeVertexCallback(value) {
        if (value && value.raw) {
            const vertexCallback = new Function('vertex', ScenePropUtilities.RAW_ARGUMENTS, 'vertex_index', 'vertex_lenght', `return ${value.raw}`);
            return vertexCallback;
        }
    }
    static composeLoop(loop) {
        const vertex = loop.vertex.raw
            ? new Function('index', ScenePropUtilities.RAW_ARGUMENTS, `return ${loop.vertex.raw}`)
            : undefined;
        return {
            start: loop.start,
            end: loop.end,
            inc: loop.inc,
            vertex,
        };
    }
    static bValueAnimation(value) {
        return (typeof value === 'object' &&
            value.type &&
            (value.type === 'simple' || value.type === 'raw'));
    }
    static bPropTransformable(name, value) {
        const sceneChildProp = SceneChildPropsData[name];
        return (sceneChildProp &&
            sceneChildProp.transformation !== 'none' &&
            typeof value !== 'undefined' &&
            typeof value !== 'function' &&
            !ScenePropUtilities.bValueAnimation(value));
    }
    static getTransformedValue(drawer, name, value) {
        const sceneChildProp = SceneChildPropsData[name];
        if (ScenePropUtilities.bPropTransformable(name, value)) {
            let transformedValueFunction;
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
    }
    static getTransformedValueInverse(drawer, name, value) {
        const sceneChildProp = SceneChildPropsData[name];
        if (ScenePropUtilities.bPropTransformable(name, value)) {
            let transformedValueFunction;
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
    }
}
ScenePropUtilities.RAW_ARGUMENTS = '{ context, repetition, time, shape, shape_loop, data }';
ScenePropUtilities.RAW_ARGUMENTS_WIT_PARENT = '{ context, repetition, parent, time, shape, shape_loop, data }';
export default ScenePropUtilities;
//# sourceMappingURL=ScenePropUtilities.js.map