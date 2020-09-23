import SceneChild from "./SceneChild";
import ShapeBase from "./shapes/ShapeBase";
import Scene from "./Scene";
class Group extends SceneChild {
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
    isStatic() {
        const children = this.children;
        for (let i = 0, len = children.length; i < len; i++)
            if (!children[i].isStatic())
                return false;
        return true;
    }
    isStaticIndexed() {
        const children = this.children;
        for (let i = 0, len = children.length; i < len; i++)
            if (!children[i].isStaticIndexed())
                return false;
        return true;
    }
    add(item) {
        item.setProp(this.props);
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
    sortChildren() {
        this.children.sort((a, b) => a.order - b.order);
        this.children = this.children.map((child, index) => {
            child.order = index;
            return child;
        });
        this.clearBuffer(true);
    }
    getChildren() {
        return this.children;
    }
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
    get(index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    }
    remove(index) {
        if (index >= 0 && index < this.children.length) {
            const removed = this.children.splice(index, 1);
            this.clearBuffer(true);
            return removed;
        }
        return false;
    }
    removeFromId(id) {
        for (let i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i].id == id) {
                this.children.splice(i, 1);
                return this.clearBuffer(true);
            }
        }
    }
    generate(indexing_id, bDirectSceneChild = false, parent_prop_arguments) {
        this.children.forEach(item => item.generate(indexing_id, bDirectSceneChild, parent_prop_arguments));
    }
    clearBuffer(bClearIndexed = false, bPropagateToParents = true) {
        this.children.forEach(item => item.clearBuffer(bClearIndexed, false));
        if (this.scene && bPropagateToParents) {
            const parents = this.scene.getParentsOfSceneChild(this);
            parents.length > 0 && parents[parents.length - 1].clearBuffer(bClearIndexed, bPropagateToParents);
        }
    }
    setProp(key, value) {
        if (typeof key === 'object')
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
        else
            this.props[key] = value;
        this.children.forEach(item => item.setProp(key, value));
    }
    getBufferLength(prop_arguments) {
        return this.children.map(sceneChild => sceneChild.getBufferLength(prop_arguments)).reduce((p, c) => p + c, 0);
    }
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
    getIndexedBuffer() {
        const indexed = this.children.map(item => item.getIndexedBuffer()).filter(b => b !== undefined);
        return [].concat.apply(null, indexed);
    }
    stream(callback) {
        this.children.forEach(item => item.stream(callback));
    }
    index(buffer, parent) {
        for (let i = 0, len = this.children.length; i < len; i++)
            this.children[i].index(buffer, parent);
    }
    static propagateProp(itemToPropagate, key, value) {
        itemToPropagate.setProp(key, value);
    }
    static removeIntersected(group, dest) {
        const groupProps = group.getProps();
        const destProps = dest.getProps();
        const groupPropsKeys = Object.keys(groupProps);
        const destPropsKeys = Object.keys(destProps);
        const result = {};
        groupPropsKeys.forEach((key) => {
            destPropsKeys.indexOf(key) >= 0 && (result[key] = groupProps[key]);
        });
        return result;
    }
}
export default Group;
//# sourceMappingURL=Group.js.map