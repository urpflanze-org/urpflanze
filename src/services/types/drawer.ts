import { ISceneChildPropArguments } from '@core/types/scene-child'

/**
 * @category Services.Drawer
 */
export interface IDrawerOptions {
	time?: number
	noBackground?: boolean
	ghosts?: number
	ghostAlpha?: boolean
	ghostSkipTime?: number
	ghostSkipFunction?: (ghostIndex: number) => number
}

export interface IDrawerPropArguments extends ISceneChildPropArguments {
	// singleRepetitionBounding: IShapeBounding
}
export interface IDrawerCanvasPropArguments extends IDrawerPropArguments {
	canvasContext: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D
}

export type TDrawerCanvasProp<T> = T | { (propArguments: IDrawerCanvasPropArguments): T }
export type TDrawerProp<T> = T | { (propArguments: IDrawerPropArguments): T }

/**
 * @category Services.Drawer
 */
export interface IDrawerStreamProps {
	fill?: TDrawerCanvasProp<string | CanvasGradient | CanvasPattern>
	stroke?: TDrawerCanvasProp<string | CanvasGradient | CanvasPattern>
	lineWidth?: TDrawerCanvasProp<number>
}

/**
 * @category Services.Drawer
 */
export interface IDrawerCanvasStreamProps extends IDrawerStreamProps {
	lineDash?: TDrawerCanvasProp<[number, number]>
	lineDashOffset?: TDrawerCanvasProp<number>
	lineJoin?: TDrawerCanvasProp<'bevel' | 'round' | 'miter'>
	lineCap?: TDrawerCanvasProp<'butt' | 'round' | 'square'>
	miterLimit?: TDrawerCanvasProp<number>
	shadowBlur?: TDrawerCanvasProp<number>
	shadowColor?: TDrawerCanvasProp<string>
	shadowOffsetX?: TDrawerCanvasProp<string>
	shadowOffsetY?: TDrawerCanvasProp<string>
	composite?: TDrawerCanvasProp<TCanvasContexComposite>
	filter?: TDrawerCanvasProp<string>
}

/**
 * @category Services.Drawer
 */
export interface IDrawerSVGOptions extends IDrawerOptions {
	decimals?: number
}

/**
 * @category Services.Drawer
 */
export interface IDrawerCanvasOptions extends IDrawerOptions {
	clear?: boolean
	// scale?: number
	// translate?: Array<number>
	simmetricLines?: number
	// fixedLineWidth?: boolean
	backgroundImage?: CanvasImageSource
	backgroundImageFit?: 'cover' | 'contain'
}

/**
 * @category Services.Drawer
 */
export interface IDrawerCanvasEvents {
	'drawer-canvas:before_draw': {
		currentFrame: number
		currentTime: number
	}
	'drawer-canvas:buffer_loaded': void
	'drawer-canvas:buffer_flush': void
	'drawer-canvas:resize': void
}

/**
 * @category Services.Drawer
 */
export interface IDrawerSVGEvents {
	'drawer-svg:before_draw': {
		currentFrame: number
		currentTime: number
	}
}

/**
 * @category Services.Drawer
 */
export type TDrawerTransformation = 'none' | 'angle' | 'resolution-based' | 'resolution-scaled-based'

/**
 * @category Services.Drawer
 */
export type TDrawerValue = {
	type: 'drawer-transformation'
	value: any
}

type TCanvasContexComposite =
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

/**
 * @category Services.Drawer
 */
export interface ISceneChildDrawerData {
	highlighted: boolean
	visible: boolean
	disableGhost: boolean
	composite: TCanvasContexComposite
}
