class Emitter {
    constructor() {
        this.callbacks = {};
    }
    attach(e, callback) {
        if (!(e in this.callbacks)) {
            this.callbacks[e] = [];
        }
        this.callbacks[e].push(callback);
    }
    detach(e, callback) {
        if (e in this.callbacks) {
            const index = this.callbacks[e].indexOf(callback);
            if (index >= 0) {
                this.callbacks[e].splice(index, 1);
            }
        }
    }
    dispatch(e, params) {
        if (e in this.callbacks) {
            for (let i = 0, len = this.callbacks[e].length; i < len; i++)
                if (this.callbacks[e][i](params) === false)
                    break;
        }
    }
}
export default Emitter;
//# sourceMappingURL=Emitter.js.map