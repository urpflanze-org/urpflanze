/**
 * internal autoincrement id
 *
 * @ignore
 */
let __id = 0;
/**
 * Item to added into scene
 *
 * @abstract
 * @class SceneChild
 */
class SceneChild {
    /**
     * Creates an instance of SceneChild.
     *
     * @param {SceneChildInterface} settings
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
     * Find this or shape children
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
     * Item props
     *
     * @returns {ShapeBaseProps}
     * @memberof SceneChild
     */
    getProps() {
        return this.props;
    }
    /**
     * Return a prop
     *
     * @param {keyof ShapeBaseProps} key
     * @param {ShapeBasePropArguments} [prop_arguments]
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
     * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
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