import { now } from "../../Utilites";
/**
 *
 * @category Services.Renderer
 * @class Capturer
 */
var Capturer = /** @class */ (function () {
    function Capturer(settings) {
        if (settings === void 0) { settings = {}; }
        this.type = settings.type || 'image/jpeg';
        this.encoder = this.type === 'image/png' ? 'png' : 'jpeg';
        this.extension = this.encoder === 'jpeg' ? '.jpg' : '.png';
        this.quality = settings && settings.quality ? settings.quality : 1;
        this.started = false;
        this.promises = [];
        this.chunks = [];
    }
    Capturer.prototype.setSettings = function (settings) {
        this.type = settings.type || 'image/jpeg';
        this.encoder = this.type === 'image/png' ? 'png' : 'jpeg';
        this.extension = this.encoder === 'jpeg' ? '.jpg' : '.png';
        this.quality = settings && settings.quality ? settings.quality : 1;
    };
    Capturer.prototype.start = function (total_frames) {
        this.chunks = new Array(total_frames);
        this.promises = new Array(total_frames);
        this.started = true;
    };
    Capturer.prototype.stop = function () {
        this.chunks = [];
        this.promises = [];
        this.started = false;
    };
    Capturer.prototype.capture = function (canvas, framenumber) {
        if (this.started) {
            var type_1 = this.type;
            var quality_1 = this.quality;
            var chunks_1 = this.chunks;
            var promise = new Promise(function (resolve, reject) {
                Capturer.render(canvas, type_1, quality_1)
                    .then(function (blob) {
                    chunks_1[framenumber] = blob;
                    resolve(framenumber);
                })
                    .catch(function (e) { return reject([framenumber, e]); });
            });
            this.promises[framenumber] = promise;
            return promise;
        }
        return Promise.reject();
    };
    Capturer.prototype.save = function () {
        var _this = this;
        if (this.started) {
            return new Promise(function (resolve, reject) {
                Promise.all(_this.promises).then(function () {
                    resolve(_this.chunks);
                }, function (reason) {
                    reject(reason);
                });
            });
        }
        return Promise.reject('not started');
    };
    Capturer.getRenderTime = function (canvas, type, quality) {
        var startTime = now();
        return Capturer.render(canvas, type, quality).then(function () { return now() - startTime; });
    };
    Capturer.getBlob = function (canvas, type, quality) {
        return new Promise(function (resolve, reject) {
            if (canvas instanceof OffscreenCanvas)
                return canvas.convertToBlob({ type: type, quality: quality }).then(resolve).catch(reject);
            else if (canvas instanceof HTMLCanvasElement)
                return canvas.toBlob(function (blob) { return (blob ? resolve(blob) : reject()); }, type, quality);
        });
    };
    Capturer.render = function (canvas, type, quality) {
        return new Promise(function (resolve, reject) {
            var blobPromise = Capturer.getBlob(canvas, type, quality);
            blobPromise
                .then(function (blob) {
                var fileReader = new FileReader();
                fileReader.addEventListener('load', function () {
                    fileReader.result && fileReader.result instanceof ArrayBuffer
                        ? resolve(new Uint8Array(fileReader.result))
                        : reject();
                }, { passive: true });
                fileReader.readAsArrayBuffer(blob);
            })
                .catch(function (e) { return reject(e); });
        });
    };
    return Capturer;
}());
export default Capturer;
//# sourceMappingURL=Capturer.js.map