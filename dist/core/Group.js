import SceneChild from '@core/SceneChild';
import ShapeBase from '@core/shapes/ShapeBase';
import Scene from '@core/Scene';
/**
 * Group used for add multiple SceneChild with same props
 *
 * @class Group
 * @category Core
 * @extends {SceneChild}
 */
class Group extends SceneChild {
    /**
     * Creates an instance of Group
     *
     * @param {ShapeBaseSettings} [settings={}]
     * @memberof Group
     */
    constructor(settings = {}) {
        settings.type = 'Group';
        super(settings);
        this.children = [];
        ['id', 'name', 'order', 'type'].forEach((prop) => {
            if (prop in settings)
                delete settings[prop];
        });
        this.props = settings;
    }
    /**
     * Check group has static children
     *
     * @returns {boolean}
     * @memberof Group
     */
    isStatic() {
        const children = this.children;
        for (let i = 0, len = children.length; i < len; i++)
            if (!children[i].isStatic())
                return false;
        return true;
    }
    /**
     * Check group has static children indexed
     *
     * @returns {boolean}
     * @memberof Group
     */
    isStaticIndexed() {
        const children = this.children;
        for (let i = 0, len = children.length; i < len; i++)
            if (!children[i].isStaticIndexed())
                return false;
        return true;
    }
    add(item) {
        const rawItemProps = item.getProps();
        Object.keys(this.props).forEach((propKey) => {
            if (typeof rawItemProps[propKey] === 'undefined')
                item.setProp(propKey, this.props[propKey]);
        });
        item.order =
            typeof item.order !== 'undefined'
                ? item.order
                : this.children.length > 0
                    ? Math.max.apply(this, this.children.map(e => e.order || 0)) + 1
                    : 0;
        this.scene && Scene.propagateToChilden(item, this.scene);
        this.children.push(item);
        this.sortChildren();
    }
    /**
     * Sort children
     *
     * @memberof Group
     */
    sortChildren() {
        this.children.sort((a, b) => a.order - b.order);
        this.children = this.children.map((child, index) => {
            child.order = index;
            return child;
        });
        this.clearBuffer(true);
    }
    /**
     * Return shape children
     *
     * @returns {Array<SceneChild>}
     * @memberof Group
     */
    getChildren() {
        return this.children;
    }
    /**
     * Find scene child from id or name
     *
     * @param {number | string} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    find(id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        const children = this.getChildren();
        for (let i = 0, len = children.length; i < len; i++) {
            const result = children[i].find(id_or_name);
            if (result !== null)
                return result;
        }
        return null;
    }
    /**
     * Get item from group
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    get(index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    }
    /**
     * Remove item from group
     *
     * @param {number} index
     * @returns {(false | Array<SceneChild>)}
     * @memberof Group
     */
    remove(index) {
        if (index >= 0 && index < this.children.length) {
            const removed = this.children.splice(index, 1);
            this.clearBuffer(true);
            return removed;
        }
        return false;
    }
    /**
     * Remove from id
     *
     * @param {number} id
     * @memberof Scene
     */
    removeFromId(id) {
        for (let i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i].id == id) {
                this.children.splice(i, 1);
                return this.clearBuffer(true);
            }
        }
    }
    /**
     * Generate children buffers
     *
     * @param {number} indexing_id
     * @param {boolean} [bDirectSceneChild=false]
     * @param {ShapeBasePropArguments} [parent_prop_arguments]
     * @memberof Group
     */
    generate(indexing_id, bDirectSceneChild = false, parent_prop_arguments) {
        this.children.forEach(item => item.generate(indexing_id, bDirectSceneChild, parent_prop_arguments));
    }
    /**
     * Chear children buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof Group
     */
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.children.forEach(item => item.clearBuffer(bClearIndexed, false));
        if (this.scene && bPropagateToParents) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents /* true */);
        }
        // if (bPropagateToParents && this.scene)
        // {
        //     const parents = this.scene.getParentsOfSceneChild(this)
        //     parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, true, false)
        // }
        // if (bPropagateToChildren)
        // {
        //     this.children.forEach(sceneChild => sceneChild.clearBuffer(bClearIndexed, false, true))
        // }
    }
    /**
     * Set a single or multiple props
     *
     * @abstract
     * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
     * @param {*} [value]
     * @memberof SceneChild
     */
    setProp(key, value) {
        if (typeof key === 'object')
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
        else
            this.props[key] = value;
        // this.children.forEach(item => Group.propagateProp(item, key, value))
        this.children.forEach(item => item.setProp(key, value));
    }
    /**
     * Return length of buffer
     *
     * @param {ShapeBasePropArguments} prop_arguments
     * @returns {number}
     * @memberof Group
     */
    getBufferLength(prop_arguments) {
        return this.children.map(sceneChild => sceneChild.getBufferLength(prop_arguments)).reduce((p, c) => p + c, 0);
    }
    /**
     * return a single buffer binded from children
     *
     * @returns {Float32Array}
     * @memberof Group
     */
    getBuffer() {
        const buffers = this.children
            .map(item => item.getBuffer())
            .filter(b => b !== undefined);
        const size = buffers.reduce((curr_value, buffer) => curr_value + buffer.length, 0);
        if (size > 0) {
            const result = new Float32Array(size);
            result.set(buffers[0], 0);
            for (let i = 1, offset = 0, len = buffers.length; i < len; i++) {
                offset += buffers[i - 1].length;
                result.set(buffers[i], offset);
            }
            return result;
        }
        return ShapeBase.EMPTY_BUFFER;
    }
    /**
     * return a single buffer binded from children
     *
     * @returns {(Array<ShapeBaseStreamIndexing> | undefined)}
     * @memberof Group
     */
    getIndexedBuffer() {
        const indexed = this.children.map(item => item.getIndexedBuffer()).filter(b => b !== undefined);
        return [].concat.apply(null, indexed);
    }
    /**
     * Call strem on children
     *
     * @param {(stream_arguments: ShapeBaseStreamArguments) => void} callback
     * @memberof Group
     */
    stream(callback) {
        this.children.forEach(item => item.stream(callback));
    }
    /**
     * Index vertex buffer
     *
     * @private
     * @param {Array<ShapeBaseStreamIndexing>} buffer
     * @param {ShapeBaseStreamIndexing} [parent]
     * @memberof Group
     */
    index(buffer, parent) {
        for (let i = 0, len = this.children.length; i < len; i++)
            this.children[i].index(buffer, parent);
    }
    /**
     *
     *
     * @private
     * @static
     * @param {SceneChild} itemToPropagate
     * @param {(keyof ShapeBaseProps | ShapeBaseProps)} key
     * @param {*} value
     * @memberof Group
     */
    static propagateProp(itemToPropagate, key, value) {
        itemToPropagate.setProp(key, value);
    }
    /**
     * Remove duplicate props
     *
     * @private
     * @static
     * @param {Group} group
     * @param {SceneChild} dest
     * @returns {ShapeBaseProps}
     * @memberof Group
     */
    static removeIntersected(group, dest) {
        const groupProps = group.getProps();
        const destProps = dest.getProps();
        const groupPropsKeys = Object.keys(groupProps);
        const destPropsKeys = Object.keys(destProps);
        const result = {};
        groupPropsKeys.forEach((key) => {
            // destPropsKeys.indexOf(key) >= 0 && !isDef(destProps[key]) && (result[key] = groupProps[key] as any)
            destPropsKeys.indexOf(key) >= 0 && (result[key] = groupProps[key]);
        });
        return result;
    }
}
export default Group;
//# sourceMappingURL=Group.js.map