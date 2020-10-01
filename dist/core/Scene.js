import Utilities from 'src/Utilites';
import SceneChild from '@core/SceneChild';
import Group from '@core/Group';
import Shape from './shapes/Shape';
import Vec2 from './math/Vec2';
/**
 * Scene
 *
 * @class Scene
 */
class Scene {
    /**
     * Creates an instance of Scene.
     *
     * @param {SceneSettingsInterface} [settings={}]
     * @memberof Scene
     */
    constructor(settings = {}) {
        /**
         * Update start time
         *
         * @private
         * @type {number}
         * @memberof Scene
         */
        this.start_time = 0;
        /**
         * Current time
         *
         * @type {number}
         * @memberof Scene
         */
        this.current_time = 0;
        this.width = settings.width || 400;
        this.height = settings.height || 400;
        this.background = settings.background || 'hsla(0, 0%, 0%, 1)';
        this.mainColor = settings.mainColor || 'hsla(0, 0%, 100%, 1)';
        this.children = [];
        this.center = Vec2.create(this.width / 2, this.height / 2);
    }
    /**
     * Resize scene
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
     * Update scene an children
     *
     * @param {number} [at_time] time in ms
     * @memberof Scene
     */
    update(at_time) {
        if (typeof at_time === 'undefined') {
            if (!this.start_time) {
                this.start_time = Utilities.now();
            }
            const current_time = Utilities.now();
            this.current_time = current_time - this.start_time;
        }
        else {
            this.current_time = at_time;
        }
        this.children.forEach((child) => child.generate(this.current_time, true));
    }
    /**
     * Clear all scene items buffer
     *
     * @memberof Scene
     */
    clearAllBuffers() {
        Scene.walk((child) => child.clearBuffer(true, false), this);
    }
    /**
     * Stream children for draw (called after update)
     *
     * @param {(stream_arguments: ShapeBaseStreamArguments) => boolean | void} callback
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
     * Add shpe to scene
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
                        ? Math.max.apply(this, this.children.map(e => { var _a; return (_a = e.order) !== null && _a !== void 0 ? _a : 0; })) + 1
                        : 0;
        Scene.propagateToChilden(item, this);
        this.children.push(item);
        item.clearBuffer(true, false);
        this.sortChildren();
    }
    /**
     * Sort children
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
     * Find scene child from id
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
     * Get shape from index
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Scene
     */
    get(index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    }
    /**
     * Remove a shape
     *
     * @param {number} index
     * @memberof Scene
     */
    remove(index) {
        index >= 0 && index < this.children.length && this.children.splice(index, 1);
    }
    /**
     * Remove all children
     *
     * @memberof Scene
     */
    clearChildren() {
        this.children = [];
    }
    /**
     * Remove from id
     *
     * @param {number} id
     * @memberof Scene
     */
    removeFromId(id) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id == id) {
                this.children.splice(i, 1);
                return;
            }
    }
    /**
     * Return a list of parents of sceneChild
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
     * Return a list of parents of sceneChild
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
     * Walk through scene
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
     * Propagate scene to child
     *
     * @static
     * @param {SceneChild} child
     * @param {Scene} scene
     * @memberof Scene
     */
    static propagateToChilden(child, scene) {
        child.scene = scene;
        if (child instanceof Group) {
            child.children.forEach((item) => {
                Scene.propagateToChilden(item, scene);
            });
        }
        else if (child instanceof Shape && child.shape) {
            child.shape.scene = scene;
            Scene.propagateToChilden(child.shape, scene);
        }
    }
}
export default Scene;
//# sourceMappingURL=Scene.js.map