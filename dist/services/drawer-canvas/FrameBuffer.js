/**
 *
 * @category Services.DrawerCavnas
 * @class FrameBuffer
 */
var FrameBuffer = /** @class */ (function () {
    function FrameBuffer() {
        this.frames = {};
    }
    FrameBuffer.prototype.exist = function (frameNumber) {
        return frameNumber in this.frames;
    };
    FrameBuffer.prototype.get = function (frameNumber) {
        return this.exist(frameNumber) ? this.frames[frameNumber] : null;
    };
    FrameBuffer.prototype.count = function () {
        return Object.keys(this.frames).length;
    };
    FrameBuffer.prototype.push = function (frameNumber, context) {
        this.frames[frameNumber] = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    };
    FrameBuffer.prototype.flush = function () {
        this.frames = {};
    };
    FrameBuffer.prototype.getRenderedFrames = function () {
        return Object.keys(this.frames).map(function (e) { return +e; });
    };
    return FrameBuffer;
}());
export default FrameBuffer;
//# sourceMappingURL=FrameBuffer.js.map