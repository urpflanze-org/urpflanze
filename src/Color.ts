/**
 *
 * @internal
 * @ignore
 * @interface IColor
 */
export interface IColor {
	type: 'rgb' | 'hsl'
	a: number
	b: number
	c: number
	alpha: number
}

/**
 *
 * @internal
 * @ignore
 * @interface IConvertedColor
 */
export interface IConvertedColor {
	r: number
	g: number
	b: number
	h: number
	s: number
	l: number
	alpha: number
}

/**
 * Convert color to IConvertedColor
 * Supported format: 'hsla?' 'rgba?' 'hex{3,8}' number (0xFFFFFF[FF])
 *
 * @internal
 * @ignore
 * @param {(string | number)} color
 * @returns {(IConvertedColor | undefined)}
 */
export function parseColorAndConvert(color: string | number): IConvertedColor | undefined {
	const parsed = parseColor(color)

	if (parsed) {
		if (parsed.type === 'hsl') {
			const [r, g, b] = hslToRgb(parsed.a, parsed.b, parsed.c)
			return {
				r,
				g,
				b,
				h: parsed.a,
				s: parsed.b,
				l: parsed.c,
				alpha: parsed.alpha,
			}
		} else {
			const [h, s, l] = rgbToHsl(parsed.a, parsed.b, parsed.c)
			return {
				h,
				s,
				l,
				r: parsed.a,
				g: parsed.b,
				b: parsed.c,
				alpha: parsed.alpha,
			}
		}
	}
}

/**
 * Convert color to IColor
 * Supported format: 'hsla?' 'rgba?' 'hex{3,8}' number (0xFFFFFF[FF])
 *
 * @internal
 * @ignore
 * @param {(string | number)} color
 * @returns {(IColor | undefined)}
 */
export function parseColor(color: string | number): IColor | undefined {
	if (typeof color === 'number') {
		if (color > 0xffffff) {
			return {
				type: 'rgb',
				a: (color >> 24) & 255,
				b: (color >> 16) & 255,
				c: (color >> 8) & 255,
				alpha: (color & 255) / 255,
			}
		} else {
			return { type: 'rgb', a: (color >> 16) & 255, b: (color >> 8) & 255, c: color & 255, alpha: 1 }
		}
	}

	color = color.replace(/\s/g, '')

	let match = /^#([0-9a-f]{3,8})$/i.exec(color)

	if (match) {
		const hex = match[1]
		if (hex.length === 3) {
			return {
				type: 'rgb',
				a: parseInt(hex[0] + hex[0], 16),
				b: parseInt(hex[1] + hex[1], 16),
				c: parseInt(hex[2] + hex[2], 16),
				alpha: 1,
			}
		} else {
			return {
				type: 'rgb',
				a: parseInt(hex[0] + hex[1], 16),
				b: parseInt(hex[2] + hex[3], 16),
				c: parseInt(hex[4] + hex[5], 16),
				alpha: hex.length > 6 ? parseInt(hex.substring(6), 16) / 255 : 1,
			}
		}
	}

	match = /^((hsl|rgb)a?)\((\d+),(\d+)%?,(\d+)%?,?(.+)?\)$/i.exec(color)

	if (match) {
		const [, , type, a, b, c, alpha]: Array<string> = match as RegExpExecArray

		return {
			type: type as 'rgb' | 'hsl',
			a: +a,
			b: +b,
			c: +c,
			alpha: alpha ? +alpha : 1,
		}
	}
}

/**
 * Convert hsl color to rgb
 *
 * @internal
 * @ignore
 * @param {number} h
 * @param {number} s
 * @param {number} l
 * @returns {[number, number, number]}
 */
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
	h /= 360
	s /= 100
	l /= 100

	let r, g, b

	if (s == 0) {
		r = g = b = l // achromatic
	} else {
		const hue2rgb = (p: number, q: number, t: number) => {
			t += t < 0 ? 1 : t > 1 ? -1 : 0
			if (t < 1 / 6) return p + (q - p) * 6 * t
			if (t < 1 / 2) return q
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
			return p
		}

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s
		const p = 2 * l - q
		r = hue2rgb(p, q, h + 1 / 3)
		g = hue2rgb(p, q, h)
		b = hue2rgb(p, q, h - 1 / 3)
	}
	return [(0.5 + r * 255) << 0, (0.5 + g * 255) << 0, (0.5 + b * 255) << 0]
}

/**
 * Convert rbg to hsl
 *
 * @internal
 * @ignore
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {[number, number, number]} (0-360, 0-100, 0-100)
 */
export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
	r /= 255
	g /= 255
	b /= 255
	const max = Math.max(r, g, b),
		min = Math.min(r, g, b)

	let h, s
	const l = (max + min) / 2

	if (max == min) {
		h = s = 0 // achromatic
	} else {
		const d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0)
				break
			case g:
				h = (b - r) / d + 2
				break
			case b:
				h = (r - g) / d + 4
				break
		}
		h = (h as number) / 6
	}

	return [(0.5 + h * 360) << 0, (0.5 + s * 100) << 0, (0.5 + l * 100) << 0]
}
