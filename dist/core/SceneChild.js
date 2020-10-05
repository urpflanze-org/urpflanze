/**
 * Autoincrement sceneChild default id
 *
 * @internal
 * @ignore
 */
let __id = 0;
/**
 * The element to be added into a scene.
 * Preserve settings (props), drawing order, generate and return buffers.
 * The only implementations of this class are <a href="[base_url]/Group">Group</a> and <a href="[base_url]/ShapeBase">ShapeBase</a>
 *
 * @abstract
 * @category Core.Abstract
 * @order 2
 * @class SceneChild
 */
class SceneChild {
    /**
     * Creates an instance of SceneChild.
     * Base values ​​will be assigned in case they are not passed
     *
     * @param {ISceneChildSettings} settings
     * @memberof SceneChild
     */
    constructor(settings) {
        var _a;
        this.id = (_a = settings.id) !== null && _a !== void 0 ? _a : ++__id;
        this.type = settings.type || 'SceneChild';
        this.name = settings.name || this.type + '_' + this.id;
        this.data = settings.data || {};
        this.props = {};
    }
    /**
     * Find this or form or children.
     * Overridden by classes that extend it
     *
     * @param {string | number} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof SceneChild
     */
    find(id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        return null;
    }
    /**
     * Return the sceneChild properties
     *
     * @returns {ISceneChildProps}
     * @memberof SceneChild
     */
    getProps() {
        return this.props;
    }
    /**
     * Return a sceneChild prop or default value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [prop_arguments]
     * @param {*} [default_value]
     * @returns {*}
     * @memberof SceneChild
     */
    getProp(key, prop_arguments, default_value) {
        var _a;
        return (_a = this.props[key]) !== null && _a !== void 0 ? _a : default_value;
    }
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
     */
    setPropUnsafe(key, value) {
        if (typeof key == 'string')
            this.props[key] = value;
        else
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
    }
}
export default SceneChild;
//# sourceMappingURL=SceneChild.js.map