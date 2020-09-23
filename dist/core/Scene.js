import { now, aOr, isDef } from "./Utilites";
import SceneChild from "./SceneChild";
import Group from "./Group";
import Shape from "./shapes/Shape";
import Vec2, { TArray } from "./math/Vec2";
class Scene {
    constructor(settings = {}) {
        this.start_time = 0;
        this.last_update_time = 0;
        this.current_time = 0;
        this.delta_time = 0;
        this.fps = 0;
        this.width = aOr(settings.width, 400);
        this.height = aOr(settings.height, 400);
        this.background = aOr(settings.background, '#fff');
        this.mainColor = aOr(settings.mainColor, '#000');
        this.children = [];
        this.center = Vec2.create(this.width / 2, this.height / 2);
    }
    resize(width, height = width) {
        this.width = width;
        this.height = height;
        this.center = Vec2.create(this.width / 2, this.height / 2);
        this.children.forEach(sceneChild => sceneChild.clearBuffer());
    }
    update(at_time) {
        if (at_time == undefined) {
            if (!this.start_time) {
                this.start_time = now();
            }
            const current_time = now();
            this.current_time = current_time - this.start_time;
        }
        else {
            this.current_time = at_time;
        }
        this.children.forEach((child) => child.generate(this.current_time, true));
    }
    clearAllBuffers() {
        Scene.walk((child) => child.clearBuffer(true, false), this);
    }
    draw(callback) {
        this.children.forEach(sceneChild => sceneChild.stream(callback));
    }
    getChildren() {
        return this.children;
    }
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
        item.clearBuffer();
        this.sortChildren();
    }
    sortChildren() {
        this.children.sort((a, b) => a.order - b.order);
        this.children = this.children.map((child, index) => {
            child.order = index;
            return child;
        });
    }
    isFirstLevelChild(sceneChild) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id == sceneChild.id)
                return true;
        const parents = this.getParentsOfSceneChild(sceneChild);
        return parents.length == 1 && parents[0] instanceof Group;
    }
    find(id_or_name) {
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
        index >= 0 && index < this.children.length && this.children.splice(index, 1);
    }
    clearChildren() {
        this.children = [];
    }
    removeFromId(id) {
        for (let i = 0, len = this.children.length; i < len; i++)
            if (this.children[i].id == id) {
                this.children.splice(i, 1);
                return;
            }
    }
    getParentsOfSceneChild(sceneChild) {
        const result = Scene.getParentsOfSceneChild(this, sceneChild);
        if (result) {
            result.splice(0, 1);
            return result;
        }
        return [];
    }
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