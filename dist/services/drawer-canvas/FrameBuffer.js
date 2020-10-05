/**
 *
 * @category Services.DrawerCavnas
 * @class FrameBuffer
 */
class FrameBuffer {
    constructor() {
        this.frames = {};
    }
    exist(frameNumber) {
        return frameNumber in this.frames;
    }
    get(frameNumber) {
        return this.exist(frameNumber) ? this.frames[frameNumber] : null;
    }
    count() {
        return Object.keys(this.frames).length;
    }
    push(frameNumber, context) {
        this.frames[frameNumber] = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    }
    flush() {
        this.frames = {};
    }
    getRenderedFrames() {
        return Object.keys(this.frames).map(e => +e);
    }
}
export default FrameBuffer;
//# sourceMappingURL=FrameBuffer.js.map