import SceneChild from "./SceneChild";
import Group from "./Group";
import Shape from "./shapes/Shape";
/**
 * Container for all SceneChild.
 * The main purpose is to manage the drawing order and update the child buffers
 *
 * @order 1
 * @category Core.Scene
 * @class Scene
 */
var Scene = /** @class */ (function () {
    /**
     * Creates an instance of Scene.
     * You can see the default values in the property definitions
     */
    function Scene(settings) {
        if (settings === void 0) { settings = {}; }
        /**
         * Logical number, the drawer will take care of defining the unit of measure
         */
        this.width = 400;
        /**
         * Logical number, the drawer will take care of defining the unit of measure
         */
        this.height = 400;
        /**
         * Default background color (black)
         */
        this.background = 'hsla(0, 0%, 0%, 1)';
        /**
         * Default ScenePrimitive stroke color (white)
         */
        this.color = 'hsla(0, 0%, 100%, 1)';
        /**
         * Current time
         */
        this.currentTime = 0;
        if (typeof settings.width !== 'undefined')
            this.width = settings.width;
        if (typeof settings.height !== 'undefined')
            this.height = settings.height;
        if (typeof settings.background !== 'undefined')
            this.background = settings.background;
        if (typeof settings.color !== 'undefined')
            this.color = settings.color;
        this.children = [];
        this.center = [this.width / 2, this.height / 2];
    }
    /**
     * Resize the scene size
     *
     * @param {number} width
     * @param {number} [height=width]
     * @memberof Scene
     */
    Scene.prototype.resize = function (width, height) {
        if (height === void 0) { height = width; }
        this.width = width;
        this.height = height;
        this.center = [this.width / 2, this.height / 2];
        this.children.forEach(function (sceneChild) { return sceneChild.clearBuffer(true, false); });
    };
    /**
     * Update all children, generate a streamable buffer for drawing
     *
     * @param {number} [atTime] time in ms
     * @memberof Scene
     */
    Scene.prototype.update = function (atTime) {
        var _this = this;
        this.currentTime = atTime;
        this.children.forEach(function (child) { return child.generate(_this.currentTime, true); });
    };
    /**
     * Traverse the child buffer and use it with callback
     *
     * @param {TStreamCallback} callback
     * @memberof Scene
     */
    Scene.prototype.stream = function (callback) {
        this.children.forEach(function (sceneChild) { return sceneChild.stream(callback); });
    };
    /*
     |--------------------------------------------------------------------------
     |  SceneChild
     |--------------------------------------------------------------------------
     */
    /**
     * Return a list of children
     *
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    Scene.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Add SceneChild to Scene, pass `order` as last parameter for drawing priorities
     *
     * @param {Array<SceneChild>} items
     * @param {number} [order]
     * @memberof Scene
     */
    Scene.prototype.add = function () {
        var items = []; /**, order: number */
        for (var _i = 0 /**, order: number */; _i < arguments.length /**, order: number */; _i++ /**, order: number */) {
            items[_i] = arguments[_i]; /**, order: number */
        }
        var order = typeof items[items.length - 1] === 'number' ? items[items.length - 1] : undefined;
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            item.order =
                typeof order !== 'undefined'
                    ? order + i
                    : typeof item.order !== 'undefined'
                        ? item.order
                        : this.children.length > 0
                            ? Math.max.apply(this, this.children.map(function (e) { return e.order; })) + 1
                            : 0;
            Scene.propagateToChilden(item, this);
            this.children.push(item);
            item.clearBuffer(true, false);
        }
        this.sortChildren();
    };
    /**
     * Sort children by order
     *
     * @memberof Scene
     */
    Scene.prototype.sortChildren = function () {
        this.children.sort(function (a, b) { return a.order - b.order; });
        this.children = this.children.map(function (child, index) {
            child.order = index;
            return child;
        });
    };
    /**
     * Find sceneChild from id or name in the whole scene
     *
     * @param {string | number} idOrName
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    Scene.prototype.find = function (idOrName) {
        var children = this.getChildren();
        for (var i = 0, len = children.length; i < len; i++) {
            var result = children[i].find(idOrName);
            if (result !== null)
                return result;
        }
        return null;
    };
    /**
     * Get shape by index
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    Scene.prototype.get = function (index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    };
    /**
     * Remove a shape by index
     *
     * @param {number} index
     * @memberof Scene
     */
    Scene.prototype.remove = function (index) {
        index >= 0 && index < this.children.length && this.children.splice(index, 1);
    };
    /**
     * Removes all children
     *
     * @memberof Scene
     */
    Scene.prototype.removeChildren = function () {
        this.children = [];
    };
    /**
     * Remove sceneChild by id or name
     *
     * @param {number | number} idOrName
     * @memberof Scene
     */
    Scene.prototype.removeFromId = function (idOrName) {
        for (var i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id === idOrName || this.children[i].name === idOrName) {
                this.children.splice(i, 1);
                return;
            }
    };
    /**
     * Return true if sceneChild is direct children
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof Scene
     */
    Scene.prototype.isFirstLevelChild = function (sceneChild) {
        for (var i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id == sceneChild.id)
                return true;
        var parents = this.getParentsOfSceneChild(sceneChild);
        return parents.length == 1 && parents[0] instanceof Group;
    };
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    Scene.prototype.getParentsOfSceneChild = function (sceneChild) {
        var result = Scene.getParentsOfSceneChild(this, sceneChild);
        if (result) {
            result.splice(0, 1);
            return result;
        }
        return [];
    };
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @static
     * @param {(Scene | SceneChild)} current
     * @param {SceneChild} sceneChild
     * @param {(Array<SceneChild | Scene>)} [parents=[]]
     * @returns {(Array<SceneChild | Scene> | null)}
     * @memberof Scene
     */
    Scene.getParentsOfSceneChild = function (current, sceneChild, parents) {
        if (parents === void 0) { parents = []; }
        var result;
        if (current instanceof SceneChild) {
            if (current.id == sceneChild.id)
                return parents;
            if (current instanceof Shape && current.shape) {
                var tmpParents = parents.slice();
                tmpParents.push(current);
                if ((result = Scene.getParentsOfSceneChild(current.shape, sceneChild, tmpParents)))
                    return result;
            }
        }
        if (current instanceof Scene || current instanceof Group) {
            var children = current.getChildren();
            parents.push(current);
            for (var i = 0, len = children.length; i < len; i++) {
                var child = children[i];
                if ((result = Scene.getParentsOfSceneChild(child, sceneChild, parents)))
                    return result;
            }
            parents.pop();
        }
        return null;
    };
    /**
     * Walk through the scene
     *
     * @static
     * @param {SceneChild} callbackk
     * @param {(Scene | SceneChild)} current
     * @memberof Scene
     */
    Scene.walk = function (callback, current) {
        if (current instanceof SceneChild) {
            if (callback(current) === false)
                return false;
            if (current instanceof Shape && current.shape)
                if (Scene.walk(callback, current.shape) === false)
                    return false;
        }
        if (current instanceof Scene || current instanceof Group) {
            var children = current.getChildren();
            for (var i = 0, len = children.length; i < len; i++) {
                var child = children[i];
                if (Scene.walk(callback, child) === false)
                    return false;
            }
        }
    };
    /**
     * Propagate scene to sceneChild (and children)
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {Scene} scene
     * @memberof Scene
     */
    Scene.propagateToChilden = function (sceneChild, scene) {
        sceneChild.scene = scene;
        if (sceneChild instanceof Group) {
            sceneChild.getChildren().forEach(function (item) {
                Scene.propagateToChilden(item, scene);
            });
        }
        else if (sceneChild instanceof Shape && sceneChild.shape) {
            sceneChild.shape.scene = scene;
            Scene.propagateToChilden(sceneChild.shape, scene);
        }
    };
    return Scene;
}());
export default Scene;
//# sourceMappingURL=Scene.js.map