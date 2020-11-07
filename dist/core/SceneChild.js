/**
 * Autoincrement sceneChild default id
 *
 * @internal
 * @ignore
 */
var __id = 0;
/**
 * The element to be added into a scene.
 * Preserve props, drawing order, generate and return buffers.
 * The only implementations of this class are <a href="[base_url]/Group">Group</a> and <a href="[base_url]/ShapeBase">ShapeBase</a>
 *
 * @abstract
 * @category Core.Abstract
 * @order 2
 * @class SceneChild
 */
var SceneChild = /** @class */ (function () {
    /**
     * Creates an instance of SceneChild.
     * Base values will be assigned in case they are not passed
     *
     * @param {ISceneChildSettings} settings
     */
    function SceneChild(settings) {
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
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     */
    SceneChild.prototype.find = function (idOrName) {
        if (this.id === idOrName || this.name === idOrName)
            return this;
        return null;
    };
    /**
     * Return the sceneChild properties
     *
     * @returns {ISceneChildProps}
     */
    SceneChild.prototype.getProps = function () {
        return this.props;
    };
    /**
     * Return a sceneChild prop or default value
     *
     * @param {keyof ISceneChildProps} key
     * @param {ISceneChildPropArguments} [propArguments]
     * @param {*} [defaultValue]
     * @returns {*}
     */
    SceneChild.prototype.getProp = function (key, propArguments, defaultValue) {
        var _a;
        return ((_a = this.props[key]) !== null && _a !== void 0 ? _a : defaultValue);
    };
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     */
    SceneChild.prototype.setPropUnsafe = function (key, value) {
        var _this = this;
        if (typeof key == 'string')
            this.props[key] = value;
        else
            Object.keys(key).forEach(function (k) {
                return (_this.props[k] = key[k]);
            });
    };
    return SceneChild;
}());
export default SceneChild;
//# sourceMappingURL=SceneChild.js.map