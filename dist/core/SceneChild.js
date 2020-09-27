let __id = 0;
class SceneChild {
    constructor(settings) {
        var _a;
        this.id = (_a = settings.id) !== null && _a !== void 0 ? _a : ++__id;
        this.type = settings.type || 'SceneChild';
        this.name = settings.name || this.type + '_' + this.id;
        this.data = settings.data || {};
        this.props = {};
    }
    find(id_or_name) {
        if (this.id === id_or_name || this.name === id_or_name)
            return this;
        return null;
    }
    getProps() {
        return this.props;
    }
    getProp(key, prop_arguments, default_value) {
        var _a;
        return (_a = this.props[key]) !== null && _a !== void 0 ? _a : default_value;
    }
    setPropUnsafe(key, value) {
        if (typeof key == 'string')
            this.props[key] = value;
        else
            Object.keys(key).forEach((k) => (this.props[k] = key[k]));
    }
}
export default SceneChild;
//# sourceMappingURL=SceneChild.js.map