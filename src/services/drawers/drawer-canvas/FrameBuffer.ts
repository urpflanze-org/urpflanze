/**
 *
 * @category Services.Drawer
 * @class FrameBuffer
 */
class FrameBuffer {
	private frames: { [frameNumber: number]: ImageData } = {}

	public exist(frameNumber: number): boolean {
		return typeof this.frames[frameNumber] !== 'undefined'
	}

	public get(frameNumber: number): ImageData | null {
		return this.exist(frameNumber) ? this.frames[frameNumber] : null
	}

	public count(): number {
		return Object.keys(this.frames).length
	}

	public push(frameNumber: number, context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D): void {
		this.frames[frameNumber] = context.getImageData(0, 0, context.canvas.width, context.canvas.height)
	}

	public flush(): void {
		this.frames = {}
	}

	public getRenderedFrames(): Array<number> {
		return Object.keys(this.frames).map(e => +e)
	}
}

export default FrameBuffer
