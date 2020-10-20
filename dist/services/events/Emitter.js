/**
 *
 * @category Services
 * @abstract
 * @class Emitter
 * @template EventTypes
 */
var Emitter = /** @class */ (function () {
    function Emitter() {
        //@ts-ignore
        this.callbacks = {};
    }
    /**
     * Attach callback at event
     *
     * @param {keyof EventTypes} e
     * @param {(value: EventTypes[keyof EventTypes]) => any} callback
     * @memberof Emitter
     */
    Emitter.prototype.attach = function (e, callback) {
        if (!(e in this.callbacks)) {
            this.callbacks[e] = [];
        }
        this.callbacks[e].push(callback);
    };
    /**
     * Remove callbach listener at event
     *
     * @param {keyof EventTypes} e
     * @param {(value: EventTypes[keyof EventTypes]) => void} callback
     * @memberof Emitter
     */
    Emitter.prototype.detach = function (e, callback) {
        if (e in this.callbacks) {
            var index = this.callbacks[e].indexOf(callback);
            if (index >= 0) {
                this.callbacks[e].splice(index, 1);
            }
        }
    };
    /**
     * Dispatch event
     *
     * @param {keyof EventTypes} e
     * @param {EventTypes[keyof EventTypes]} [params]
     * @memberof Emitter
     */
    Emitter.prototype.dispatch = function (e, params) {
        if (e in this.callbacks) {
            for (var i = 0, len = this.callbacks[e].length; i < len; i++)
                if (this.callbacks[e][i](params) === false)
                    break;
        }
    };
    return Emitter;
}());
export default Emitter;
//# sourceMappingURL=Emitter.js.map