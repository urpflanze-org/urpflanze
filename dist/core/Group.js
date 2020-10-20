var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Scene from "./Scene";
import SceneChild from "./SceneChild";
import ShapeBase from "./shapes/ShapeBase";
import ShapePrimitive from "./shapes/ShapePrimitive";
/**
 * A SceneChild container, propagates properties to children
 *
 * @order 3
 * @category Core.Scene
 * @extends {SceneChild}
 * @example
 * ```javascript
 * // Group example
 *
 * const rect = new Urpflanze.Rect({
 * 	distance: 100 // <- if a property is set the group will not overwrite it
 * })
 * const group = new Urpflanze.Group({
 * 	repetitions: 3,
 * 	distance: 200
 * })
 *
 * group.add(rect)
 * group.add(new Urpflanze.Triangle())
 * ```
 * @class Group
 */
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    /**
     * Creates an instance of Group
     *
     * @param {ISceneChildSettings} [settings={}]
     * @memberof Group
     */
    function Group(settings) {
        if (settings === void 0) { settings = {}; }
        var _this = this;
        settings.type = 'Group';
        _this = _super.call(this, settings) || this;
        _this.children = [];
        ['id', 'name', 'data', 'order', 'type'].forEach(function (prop) {
            if (prop in settings)
                delete settings[prop];
        });
        _this.props = settings;
        return _this;
    }
    /**
     * Check group has static children
     *
     * @returns {boolean}
     * @memberof Group
     */
    Group.prototype.isStatic = function () {
        var children = this.children;
        for (var i = 0, len = children.length; i < len; i++)
            if (!children[i].isStatic())
                return false;
        return true;
    };
    /**
     * Check group has static children indexed
     *
     * @returns {boolean}
     * @memberof Group
     */
    Group.prototype.isStaticIndexed = function () {
        var children = this.children;
        for (var i = 0, len = children.length; i < len; i++)
            if (!children[i].isStaticIndexed())
                return false;
        return true;
    };
    /**
     * Add iitem to Group
     *
     * @param {SceneChild} item
     * @memberof Group
     */
    Group.prototype.add = function (item) {
        var _this = this;
        var rawItemProps = item.getProps();
        Object.keys(this.props).forEach(function (propKey) {
            if (typeof rawItemProps[propKey] === 'undefined')
                item.setProp(propKey, _this.props[propKey]);
        });
        item.order =
            typeof item.order !== 'undefined'
                ? item.order
                : this.children.length > 0
                    ? Math.max.apply(this, this.children.map(function (e) { return e.order || 0; })) + 1
                    : 0;
        this.scene && Scene.propagateToChilden(item, this.scene);
        this.children.push(item);
        this.sortChildren();
    };
    /**
     * Sort children
     *
     * @memberof Group
     */
    Group.prototype.sortChildren = function () {
        this.children.sort(function (a, b) { return a.order - b.order; });
        this.children = this.children.map(function (child, index) {
            child.order = index;
            return child;
        });
        this.clearBuffer(true);
    };
    /**
     * Return shape children
     *
     * @returns {Array<SceneChild>}
     * @memberof Group
     */
    Group.prototype.getChildren = function () {
        return this.children;
    };
    /**
     * Find scene child from id or name
     *
     * @param {number | string} id_or_name
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    Group.prototype.find = function (id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        var children = this.getChildren();
        for (var i = 0, len = children.length; i < len; i++) {
            var result = children[i].find(id_or_name);
            if (result !== null)
                return result;
        }
        return null;
    };
    /**
     * Get item from group
     *
     * @param {number} index
     * @returns {(SceneChild | null)}
     * @memberof Group
     */
    Group.prototype.get = function (index) {
        return index >= 0 && index < this.children.length ? this.children[index] : null;
    };
    /**
     * Remove item from group
     *
     * @param {number} index
     * @returns {(false | Array<SceneChild>)}
     * @memberof Group
     */
    Group.prototype.remove = function (index) {
        if (index >= 0 && index < this.children.length) {
            var removed = this.children.splice(index, 1);
            this.clearBuffer(true);
            return removed;
        }
        return false;
    };
    /**
     * Remove from id
     *
     * @param {number} id
     * @memberof Scene
     */
    Group.prototype.removeFromId = function (id) {
        for (var i = 0, len = this.children.length; i < len; i++) {
            if (this.children[i].id == id) {
                this.children.splice(i, 1);
                return this.clearBuffer(true);
            }
        }
    };
    /**
     * Generate children buffers
     *
     * @param {number} indexing_id
     * @param {boolean} [bDirectSceneChild=false]
     * @param {ISceneChildPropArguments} [parent_prop_arguments]
     * @memberof Group
     */
    Group.prototype.generate = function (indexing_id, bDirectSceneChild, parent_prop_arguments) {
        if (bDirectSceneChild === void 0) { bDirectSceneChild = false; }
        this.children.forEach(function (item) { return item.generate(indexing_id, bDirectSceneChild, parent_prop_arguments); });
    };
    Group.prototype.getBounding = function (bDirectSceneChild) {
        var boundings = [];
        var bounding = __assign({}, ShapePrimitive.EMPTY_BOUNDING);
        if (this.children.length > 0) {
            this.children.forEach(function (item) { return boundings.push(item.getBounding(bDirectSceneChild)); });
            for (var i = 0, len = this.children.length; i < len; i++) {
                bounding.x = bounding.x > boundings[i].x ? boundings[i].x : bounding.x;
                bounding.y = bounding.y > boundings[i].y ? boundings[i].y : bounding.y;
                bounding.width = bounding.width < boundings[i].width ? boundings[i].width : bounding.width;
                bounding.height = bounding.height < boundings[i].height ? boundings[i].height : bounding.height;
            }
            bounding.cx = bounding.x + bounding.width / 2;
            bounding.cy = bounding.y + bounding.height / 2;
        }
        return bounding;
    };
    /**
     * Chear children buffer
     *
     * @param {boolean} [bClearIndexed=false]
     * @param {boolean} [bPropagateToParents=false]
     * @memberof Group
     */
    Group.prototype.clearBuffer = function (bClearIndexed, bPropagateToParents) {
        if (bClearIndexed === void 0) { bClearIndexed = false; }
        if (bPropagateToParents === void 0) { bPropagateToParents = true; }
        this.children.forEach(function (item) { return item.clearBuffer(bClearIndexed, false); });
        if (this.scene && bPropagateToParents) {
            var parents = this.scene.getParentsOfSceneChild(this);
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
    };
    /**
     * Set a single or multiple props
     *
     * @abstract
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof SceneChild
     */
    Group.prototype.setProp = function (key, value) {
        var _this = this;
        if (typeof key === 'object')
            Object.keys(key).forEach(function (k) { return (_this.props[k] = key[k]); });
        else
            this.props[key] = value;
        this.children.forEach(function (item) { return item.setProp(key, value); });
    };
    /**
     * Set a single or multiple props
     *
     * @param {(keyof ISceneChildProps | ISceneChildProps)} key
     * @param {*} [value]
     * @memberof ShapeBase
     */
    Group.prototype.setPropUnsafe = function (key, value) {
        _super.prototype.setPropUnsafe.call(this, key, value);
        this.children.forEach(function (item) { return item.setPropUnsafe(key, value); });
    };
    /**
     * Return length of buffer
     *
     * @param {ISceneChildPropArguments} prop_arguments
     * @returns {number}
     * @memberof Group
     */
    Group.prototype.getBufferLength = function (prop_arguments) {
        return this.children.map(function (sceneChild) { return sceneChild.getBufferLength(prop_arguments); }).reduce(function (p, c) { return p + c; }, 0);
    };
    /**
     * return a single buffer binded from children
     *
     * @returns {Float32Array}
     * @memberof Group
     */
    Group.prototype.getBuffer = function () {
        var buffers = this.children
            .map(function (item) { return item.getBuffer(); })
            .filter(function (b) { return b !== undefined; });
        var size = buffers.reduce(function (curr_value, buffer) { return curr_value + buffer.length; }, 0);
        if (size > 0) {
            var result = new Float32Array(size);
            result.set(buffers[0], 0);
            for (var i = 1, offset = 0, len = buffers.length; i < len; i++) {
                offset += buffers[i - 1].length;
                result.set(buffers[i], offset);
            }
            return result;
        }
        return ShapeBase.EMPTY_BUFFER;
    };
    /**
     * return a single buffer binded from children
     *
     * @returns {(Array<IBufferIndex> | undefined)}
     * @memberof Group
     */
    Group.prototype.getIndexedBuffer = function () {
        var indexed = this.children.map(function (item) { return item.getIndexedBuffer(); }).filter(function (b) { return b !== undefined; });
        return [].concat.apply([], indexed);
    };
    /**
     * Call strem on children
     *
     * @param {TStreamCallback} callback
     * @memberof Group
     */
    Group.prototype.stream = function (callback) {
        this.children.forEach(function (item) { return item.stream(callback); });
    };
    return Group;
}(SceneChild));
export default Group;
//# sourceMappingURL=Group.js.map