/**
 * @category Services.DrawerCanvas
 */
export interface IDrawOptions {
	time?: number
	scale?: number
	translate?: Array<number>
	simmetricLine?: number
	clearCanvas?: boolean
	noBackground?: boolean
	ghosts?: number
	ghost_skip_time?: number
	ghost_skip_function?: (ghost_index: number) => number
	ghost_index?: number
	fixedLineWidth?: boolean
	backgroundImage?: CanvasImageSource
}

/**
 * @category Services.DrawerCanvas
 */
export interface IDrawerCanvasEvents {
	'drawer-canvas:before_draw': {
		current_frame: number
		current_time: number
	}
	'drawer-canvas:buffer_loaded': void
	'drawer-canvas:buffer_flush': void
	'drawer-canvas:resize': void
}

/**
 * @category Services.DrawerCanvas
 */
export type TDrawerTransformation = 'none' | 'angle' | 'resolution-based' | 'resolution-scaled-based'

/**
 * @category Services.DrawerCanvas
 */
export type TDrawerValue = {
	type: 'drawer-transformation'
	value: any
}

/**
 * @category Services.DrawerCanvas
 */
export interface ISceneChildDrawerData {
	highlighted: boolean
	visible: boolean
	disableGhost: boolean
	composite:
		| 'source-over'
		| 'source-in'
		| 'source-out'
		| 'source-atop'
		| 'destination-over'
		| 'destination-in'
		| 'destination-out'
		| 'destination-atop'
		| 'lighter'
		| 'copy'
		| 'xor'
		| 'multiply'
		| 'screen'
		| 'overlay'
		| 'darken'
		| 'lighten'
		| 'color-dodge'
		| 'color-burn'
		| 'hard-light'
		| 'soft-light'
		| 'difference'
		| 'exclusion'
		| 'hue'
		| 'saturation'
		| 'color'
		| 'luminosity'
}
