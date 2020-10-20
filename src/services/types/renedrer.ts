export type TRenderImageType = 'image/png' | 'image/jpeg'
export type TRenderType = TRenderImageType | 'image/svg+xml'

/**
 * @category Services.Renderer
 */
export interface IRenderSettings {
	size: number
	quality: number // 0 - 1
	type: TRenderType
	time: number
	noBackground: boolean
}

/**
 * @category Services.Renderer
 */
export interface IRenderStart {
	estimated_time: number
	total_frames: number
	total_parts: number
	forPart: number
}

/**
 * @category Services.Renderer
 */
export interface IRenderFrame {
	frame: number
	part: number
	forPart: number
	total_frames: number
	total_parts: number
	render_time: number
}

/**
 * @category Services.Renderer
 */
export interface IRenderEvents {
	'renderer:start': IRenderStart
	'renderer:render-frame': IRenderFrame
}
