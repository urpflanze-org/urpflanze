import SceneChild from '@core/SceneChild';
import Group from '@core/Group';
import Shape from '@core/shapes/Shape';
import Vec2 from '@core/math/Vec2';
/**
 * Container for all SceneChild.
 * The main purpose is to manage the drwaing order and update the buffers of the sceneChild present in it
 *
 *
 * @order 1
 * @category Core.Scene
 * @class Scene
 */
class Scene {
    /**
     * Creates an instance of Scene.
     * You can see the default values ​​in the property definitions
     *
     * @param {ISceneSettingsInterface} [settings={}]
     * @memberof Scene
     */
    constructor(settings = {}) {
        /**
         * Logical number, the render will take care
         * of defining the unit of measure
         *
         * @type {number}
         * @memberof Scene
         */
        this.width = 400;
        /**
         * Logical number, the render will take care
         * of defining the unit of measure
         *
         * @type {number}
         * @memberof Scene
         */
        this.height = 400;
        /**
         * Default background color (black)
         *
         * @type {string}
         * @memberof Scene
         */
        this.background = 'hsla(0, 0%, 0%, 1)';
        /**
         * Default ScenePrimitive stroke color (white)
         *
         * @type {string}
         * @memberof Scene
         */
        this.mainColor = 'hsla(0, 0%, 100%, 1)';
        /**
         * Current time
         *
         * @type {number}
         * @memberof Scene
         */
        this.current_time = 0;
        if (typeof settings.width !== 'undefined')
            this.width = settings.width;
        if (typeof settings.height !== 'undefined')
            this.height = settings.height;
        if (typeof settings.background !== 'undefined')
            this.background = settings.background;
        if (typeof settings.mainColor !== 'undefined')
            this.mainColor = settings.mainColor;
        this.children = [];
        this.center = Vec2.create(this.width / 2, this.height / 2);
    }
    /**
     * Resize the scene dimension
     *
     * @param {number} width
     * @param {number} [height=width]
     * @memberof Scene
     */
    resize(width, height = width) {
        this.width = width;
        this.height = height;
        this.center = Vec2.create(this.width / 2, this.height / 2);
        this.children.forEach(sceneChild => sceneChild.clearBuffer(true, false));
    }
    /**
     * Update all children, generate a streamable buffer for drawing
     *
     * @param {number} [at_time] time in ms
     * @memberof Scene
     */
    update(at_time) {
        this.current_time = at_time;
        this.children.forEach((child) => child.generate(this.current_time, true));
    }
    /**
     * Traverse the child buffer and use it with callback
     *
     * @param {TStreamCallback} callback
     * @memberof Scene
     */
    stream(callback) {
        this.children.forEach(sceneChild => sceneChild.stream(callback));
    }
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
    getChildren() {
        return this.children;
    }
    /**
     * Add SceneChild to Scene, pass `order` for drawing priorities
     *
     * @param {SceneChild} item
     * @param {number} [order]
     * @memberof Scene
     */
    add(item, order) {
        item.order =
            typeof order !== 'undefined'
                ? order
                : typeof item.order !== 'undefined'
                    ? item.order
                    : this.children.length > 0
                        ? Math.max.apply(this, this.children.map(e => e.order)) + 1
                        : 0;
        Scene.propagateToChilden(item, this);
        this.children.push(item);
        item.clearBuffer(true, false);
        this.sortChildren();
    }
    /**
     * Sort children by order
     *
     * @memberof Scene
     */
    sortChildren() {
        this.children.sort((a, b) => a.order - b.order);
        this.children = this.children.map((child, index) => {
            child.order = index;
            return child;
        });
    }
    /**
     * Find sceneChild from id or name in the whole scene
     *
     * @param {string | number} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    find(id_or_name) {
        const children = this.getChildren();
        for (let i = 0, len = children.length; i < len; i++) {
            const result = children[i].find(id_or_name);
            if (result !== null)
                return result;
        }
        return null;
    }
    /**
     * Get shape by index
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    get(index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    }
    /**
     * Remove a shape by index
     *
     * @param {number} index
     * @memberof Scene
     */
    remove(index) {
        index >= 0 && index < this.children.length && this.children.splice(index, 1);
    }
    /**
     * Removes all children
     *
     * @memberof Scene
     */
    removeChildren() {
        this.children = [];
    }
    /**
     * Remove sceneChild by id or name
     *
     * @param {number | number} id_or_name
     * @memberof Scene
     */
    removeFromId(id_or_name) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id === id_or_name || this.children[i].name === id_or_name) {
                this.children.splice(i, 1);
                return;
            }
    }
    /**
     * Return true if sceneChild is direct children
     *
     * @param {SceneChild} sceneChild
     * @returns {boolean}
     * @memberof Scene
     */
    isFirstLevelChild(sceneChild) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id == sceneChild.id)
                return true;
        const parents = this.getParentsOfSceneChild(sceneChild);
        return parents.length == 1 && parents[0] instanceof Group;
    }
    /**
     * Returns the list of sceneChild hierarchy starting from the scene
     *
     * @param {SceneChild} sceneChild
     * @returns {Array<SceneChild>}
     * @memberof Scene
     */
    getParentsOfSceneChild(sceneChild) {
        const result = Scene.getParentsOfSceneChild(this, sceneChild);
        if (result) {
            result.splice(0, 1);
            return result;
        }
        return [];
    }
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
    static getParentsOfSceneChild(current, sceneChild, parents = []) {
        let result;
        if (current instanceof SceneChild) {
            if (current.id == sceneChild.id)
                return parents;
            if (current instanceof Shape && current.shape) {
                const tmp_parents = parents.slice();
                tmp_parents.push(current);
                if ((result = Scene.getParentsOfSceneChild(current.shape, sceneChild, tmp_parents)))
                    return result;
            }
        }
        if (current instanceof Scene || current instanceof Group) {
            const children = current.getChildren();
            parents.push(current);
            for (let i = 0, len = children.length; i < len; i++) {
                const child = children[i];
                if ((result = Scene.getParentsOfSceneChild(child, sceneChild, parents)))
                    return result;
            }
            parents.pop();
        }
        return null;
    }
    /**
     * Walk through the scene
     *
     * @static
     * @param {SceneChild} callbackk
     * @param {(Scene | SceneChild)} current
     * @memberof Scene
     */
    static walk(callback, current) {
        if (current instanceof SceneChild) {
            if (callback(current) === false)
                return false;
            if (current instanceof Shape && current.shape)
                if (Scene.walk(callback, current.shape) === false)
                    return false;
        }
        if (current instanceof Scene || current instanceof Group) {
            const children = current.getChildren();
            for (let i = 0, len = children.length; i < len; i++) {
                const child = children[i];
                if (Scene.walk(callback, child) === false)
                    return false;
            }
        }
    }
    /**
     * Propagate scene to sceneChild (and children)
     *
     * @static
     * @param {SceneChild} sceneChild
     * @param {Scene} scene
     * @memberof Scene
     */
    static propagateToChilden(sceneChild, scene) {
        sceneChild.scene = scene;
        if (sceneChild instanceof Group) {
            sceneChild.children.forEach((item) => {
                Scene.propagateToChilden(item, scene);
            });
        }
        else if (sceneChild instanceof Shape && sceneChild.shape) {
            sceneChild.shape.scene = scene;
            Scene.propagateToChilden(sceneChild.shape, scene);
        }
    }
}
export default Scene;
//# sourceMappingURL=Scene.js.map