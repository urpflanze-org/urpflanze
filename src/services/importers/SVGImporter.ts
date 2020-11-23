import { fromTransformAttribute, fromDefinition, compose, toSVG } from 'transformation-matrix'
import * as Snap from 'snapsvg-cjs'
import simplify from 'simplify-js'

import { IProject, ISVGParsed, ISVGParsedPath } from '@services/types/exporters-importers'
import JSONImporter from '@services/importers/JSONImporter'

import DrawerCanvas from '@services/drawers/drawer-canvas/DrawerCanvas'

import ShapePrimitive from '@core/shapes/ShapePrimitive'
import ShapeBuffer from '@core/shapes/ShapeBuffer'
import Scene from '@core/Scene'

interface ISVGElementConversion {
	rect: (rect: SVGRectElement) => string
	ellipse: (ellipse: SVGEllipseElement | SVGCircleElement) => string
	circle: (circle: SVGCircleElement) => string
	line: (line: SVGLineElement) => string
	polyline: (polyline: SVGPolylineElement) => string
	polygon: (polygon: SVGPolygonElement) => string
	path: (path: SVGPathElement) => string
}

/**
 *
 * @category Services.Export/Import
 * @class JSONImporter
 */
class SVGImporter {
	/**
	 * Match string is SVG
	 * @static
	 */
	static readonly SVG_REGEX = /^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/i

	/**
	 * Match commments
	 *
	 * @static
	 */
	static readonly COMMENT_REGEX = /<!--([\s\S]*?)-->/g

	/**
	 * Check passed input is valid SVG string
	 *
	 * @static
	 * @param {string} input
	 * @returns {boolean}
	 */
	static isSVG(input: string): boolean {
		return SVGImporter.SVG_REGEX.test(input.replace(SVGImporter.COMMENT_REGEX, ''))
	}

	/**
	 * Convert string to SVGElement
	 *
	 * @static
	 * @param {string} input
	 * @returns {(SVGElement | null)}
	 */
	static stringToSVG(input: string): SVGElement | null {
		if (!SVGImporter.isSVG(input)) {
			console.warn('[Urpflanze:SVGImport] | Input is not valid SVG string', input)
			return null
		}

		if (typeof DOMParser === 'undefined') {
			console.warn('[Urpflanze:SVGImport] DOMParser not defined')
			return null
		}

		const parser: DOMParser = new DOMParser()
		const document: Document = parser.parseFromString(input, 'image/svg+xml')
		return document.querySelector('svg')
	}

	/**
	 * Convert SVG string into DrawerCanvas
	 *
	 * @static
	 * @param {string} input
	 * @returns {(DrawerCanvas | null)}
	 */
	static parse(input: string): DrawerCanvas | null {
		const svg = SVGImporter.stringToSVG(input)
		if (svg === null) {
			console.warn('[Urpflanze:SVGImport] | Cannot convet string to SVG', input)
		}

		const parsed = SVGImporter.SVGStringToBuffers(input)
		if (parsed === null) {
			console.warn('[Urpflanze:SVGImport] | Cannot convet string DrawerCanvas', input)
			return null
		}

		const emptyProject: IProject = JSONImporter.createEmptyProject()
		const scene = new Scene({
			color: emptyProject.color,
			background: emptyProject.background,
			width: parsed.viewBox[2] - parsed.viewBox[0],
			height: parsed.viewBox[3] - parsed.viewBox[1],
		})

		parsed.buffers.forEach(buffer => {
			scene.add(
				new ShapeBuffer({
					shape: buffer.buffer,
					bClosed: buffer.closed,
				})
			)
		})

		return new DrawerCanvas(scene, undefined)
	}

	/**
	 * Convert SVG string to buffers
	 *
	 * @static
	 * @param {string} input
	 * @param {number} [simplify=0.001]
	 * @returns {(ISVGParsed | null)}
	 */
	static SVGStringToBuffers(input: string, simplify = 0.001): ISVGParsed | null {
		const svg: SVGElement | null = SVGImporter.stringToSVG(input)

		if (svg === null) {
			console.error('[Urpflanze:SVGImport] | Cannot convert string to svg', input)
			return null
		}

		const fill = svg.getAttribute('fill')
		const stroke = svg.getAttribute('stroke')
		const lineWidth = svg.getAttribute('line-width')

		const viewBox: [number, number, number, number] = SVGImporter.getViewbox(svg)

		const groups = svg.querySelectorAll('g')
		groups.forEach(SVGImporter.propagateGroupTransformAndStyleToChildren)

		// Get all primitive elements
		const elements: Array<SVGElement> = Array.from(
			svg.querySelectorAll('rect, circle, ellipse, line, polyline, polygon, path')
		)

		// Convert elements to path
		const paths: Array<SVGPathElement> = ([] as Array<SVGPathElement>).concat(
			...elements.map(e => SVGImporter.elementToPath(e as SVGElement))
		)
		// Convert paths to buffe of points based on viewBox
		const expMatch = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1])
			.toExponential(1)
			.match(/e(\+?[0-9]+)/)
		const exp = Math.min(10 ** Math.max(expMatch ? +expMatch[1] : 0, 0), 1000)
		const steps = 10 / (1000 / exp)

		let buffers: Array<Float32Array> = paths.map(path => SVGImporter.pathToBuffer(path, steps, viewBox))

		// Simplify buffers
		buffers = buffers.map(buffer => SVGImporter.simpliyBuffer(buffer, simplify))

		const result: Array<ISVGParsedPath> = []
		for (let i = 0; i < buffers.length; i++) {
			const templineWidth = paths[i].getAttribute('stroke-width')
			let strokeWidth

			if (templineWidth) {
				strokeWidth =
					templineWidth.indexOf('%') >= 0
						? SVGImporter.fromPercentage(
								parseFloat(templineWidth),
								Math.sqrt((viewBox[2] - viewBox[0]) * (viewBox[3] - viewBox[1]))
						  )
						: parseFloat(templineWidth)
			}

			result.push({
				buffer: buffers[i],
				closed: SVGImporter.pathIsClosed(paths[i]),
				fill: SVGImporter.getColor('fill', paths[i]) || (fill ? fill : undefined),
				stroke: SVGImporter.getColor('stroke', paths[i]) || (stroke ? stroke : undefined),
				lineWidth: strokeWidth ? strokeWidth : lineWidth ? parseFloat(lineWidth) : undefined,
			})
		}

		elements.forEach((e: SVGElement) => e.remove())

		return { viewBox, buffers: result }
	}

	private static getColor(name: 'fill' | 'stroke', path: SVGPathElement): string | undefined {
		const value = path.getAttribute(name)

		if (value) {
			if (value === 'none') return `hsla(0, 0%, 0%, 0)`
			return value
		}
	}

	/**
	 * Return SVG viewBox
	 * If it is not present, calculate it based on elements
	 *
	 * @static
	 * @param {SVGElement} svg
	 * @returns {[number, number, number, number]}
	 */
	static getViewbox(svg: SVGElement): [number, number, number, number] {
		// Check viexBox is setted
		const viewBox = svg.getAttribute('viewBox')
		if (viewBox) {
			return viewBox.split(' ').map(e => parseFloat(e)) as [number, number, number, number]
		}

		// Check width and height if viewBox is not setted
		const width = svg.getAttribute('width')
		const height = svg.getAttribute('height')
		if (width && height) {
			return [0, 0, parseFloat(width), parseFloat(height)]
		}

		// Calculate dimension by elements
		svg = svg.cloneNode(true) as SVGElement

		const elements: Array<SVGElement> = Array.from(
			svg.querySelectorAll('rect, circle, ellipse, line, polyline, polygon, path')
		)

		const paths: Array<SVGPathElement> = ([] as Array<SVGPathElement>).concat.apply(
			[],
			elements.map(e => SVGImporter.elementToPath(e as SVGElement))
		)
		if (paths.length > 0) {
			let width = 0,
				height = 0

			for (let i = 0, len = paths.length; i < len; i++) {
				const box = ShapePrimitive.getBounding(SVGImporter.pathToBuffer(paths[i], 1))
				box.width += box.x
				box.height += box.y
				if (box.width > width) width = box.width
				if (box.height > height) height = box.height
			}

			return [0, 0, width, height]
		}

		return [-1, -1, 1, 1]
	}

	/**
	 * Check path is closed
	 *
	 * @static
	 * @param {SVGPathElement} path
	 * @returns {boolean}
	 */
	static pathIsClosed(path: SVGPathElement): boolean {
		return path.getAttribute('d')?.trim().substr(-1).toLowerCase() === 'z'
	}

	/**
	 * Optimize number of points
	 *
	 * @static
	 * @param {Float32Array} buffer
	 * @param {number} [simplifyLevel=0.01]
	 * @returns {Float32Array}
	 */
	static simpliyBuffer(buffer: Float32Array, simplifyLevel = 0.01): Float32Array {
		const simplifiedBuffer: Array<{ x: number; y: number }> = []

		for (let i = 0, len = buffer.length; i < len; i += 2) simplifiedBuffer.push({ x: buffer[i], y: buffer[i + 1] })

		const points = simplify(simplifiedBuffer, simplifyLevel, true)
		points.forEach((point, index) => {
			buffer[index * 2] = point.x
			buffer[index * 2 + 1] = point.y
		})

		return buffer.subarray(0, points.length * 2)
	}

	/**
	 * Convert path to buffer between [-1, 1]
	 *
	 * @static
	 * @param {SVGPathElement} path
	 * @param {number} [steps=0.01]
	 * @param {*} [viewBox=[-1, -1, 1, 1]]
	 * @returns {Float32Array}
	 */
	static pathToBuffer(path: SVGPathElement, steps = 0.01, viewBox = [-1, -1, 1, 1]): Float32Array {
		const width = viewBox[2] - viewBox[0]
		const height = viewBox[3] - viewBox[1]

		const rw = width > height ? 1 : width / height
		const rh = width > height ? height / width : 1

		// Apply transform matrix to path
		const transform = path.getAttribute('transform') || ''
		let matrix
		if (transform.length > 0) {
			const transformMatrix = compose(fromDefinition(fromTransformAttribute(transform)))

			matrix = new Snap.Matrix(
				transformMatrix.a,
				transformMatrix.b,
				transformMatrix.c,
				transformMatrix.d,
				transformMatrix.e,
				transformMatrix.f
			)
		}
		const pathString = Snap.path.map(path.getAttribute('d') || '', matrix)
		const path_length = Math.floor(Snap.path.getTotalLength(pathString))
		const buffer_length = Math.floor(path_length / steps) * 2

		// Generate buffer
		const buffer = new Float32Array(buffer_length)
		for (let i = 0, j = 0; i < path_length; i += steps, j += 2) {
			const { x, y } = Snap.path.getPointAtLength(pathString, i) as { x: number; y: number }
			buffer[j] = rw * (x / width) * 2 - 1
			buffer[j + 1] = rh * (y / height) * 2 - 1

			if (rw < 1) buffer[j] += 1 - rw
			if (rh < 1) buffer[j + 1] += 1 - rh
		}

		return buffer
	}

	/**
	 * Propagate transform for apply to point in path
	 *
	 * @private
	 * @static
	 * @param {SVGGElement} g
	 */
	private static propagateGroupTransformAndStyleToChildren(g: SVGGElement): void {
		const gTransform = g.getAttribute('transform')

		if (gTransform && gTransform.length > 0) {
			const gMatrix = compose(fromDefinition(fromTransformAttribute(gTransform)))
			const children = g.children

			Array.from(children).forEach(child => {
				let transform = child.getAttribute('transform')
				if (transform && transform.length > 0) {
					const matrix = compose(fromDefinition(fromTransformAttribute(transform)))
					const finalMatrix = compose(matrix, gMatrix)
					transform = toSVG(finalMatrix)
				}

				child.setAttribute('transform', gTransform)
			})
		}

		const attrs = ['fill', 'stroke', 'stroke-width']

		attrs.forEach(attr => {
			const value = g.getAttribute(attr)
			if (value) {
				Array.from(g.children).forEach(child => {
					if (child.getAttribute(attr) === null) {
						child.setAttribute(attr, value)
					}
				})
			}
		})
	}

	/**
	 * Convert SVG Element to Path
	 *
	 * @static
	 * @param {SVGElement} element
	 * @returns {Array<SVGPathElement>}
	 */
	static elementToPath(element: SVGElement): Array<SVGPathElement> {
		const transform = element.getAttribute('transform') || ''
		const fill = element.getAttribute('fill')
		const stroke = element.getAttribute('stroke')
		const lineWidth = element.getAttribute('lineWidth')

		if (element.nodeName == 'path') {
			// Separate multiple path
			const d: string | null = element.getAttribute('d') || ''

			const result = Snap.path
				.toAbsolute(d)
				.map((e: Array<any>) => `${e.shift()}${e.join(',')}`)
				.join(' ')
				.split('M')
				.filter((e: string) => e.length > 0)
				.map((e: string) => 'M' + e)

			return result.map((d: string) => {
				const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
				path.setAttribute('d', d)
				path.setAttribute('transform', transform)
				fill && path.setAttribute('fill', fill)
				stroke && path.setAttribute('stroke', stroke)
				lineWidth && path.setAttribute('lineWidth', lineWidth)
				return path
			})
		}

		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		const nodeName = element.nodeName
		if (['rect', 'ellipse', 'circle', 'line', 'polyline', 'polygon'].includes(nodeName)) {
			path.setAttribute('d', SVGImporter.CONVERSION[nodeName as keyof ISVGElementConversion](element as any))
			path.setAttribute('transform', transform)
			fill && path.setAttribute('fill', fill)
			stroke && path.setAttribute('stroke', stroke)
			lineWidth && path.setAttribute('lineWidth', lineWidth)
			return [path]
		} else {
			console.warn(`[Urpflanze:SVGImport] | Cannot convert ${nodeName} to path`)
			return []
		}
	}

	/**
	 * Get percentage to number
	 *
	 * @private
	 * @static
	 * @param {(number | string)} val
	 * @param {number} base
	 * @returns {number}
	 */
	private static fromPercentage(val: number | string, base: number): number {
		return /%$/.test(val + '') ? (parseFloat((val + '').replace('%', '')) * 100) / base : +val
	}

	/**
	 * Separate multiple array
	 *
	 * @private
	 * @static
	 * @param {(Array<string | number>)} arr
	 * @param {number} [size=2]
	 * @returns {(Array<Array<string | number>>)}
	 */
	private static chunk(arr: Array<string | number>, size = 2): Array<Array<string | number>> {
		const results: Array<Array<string | number>> = []

		while (arr.length > 0) results.push(arr.splice(0, size))

		return results
	}

	/**
	 * Convert Elements to path
	 *
	 * @private
	 * @static
	 * @type {ISVGElementConversion}
	 */
	private static CONVERSION: ISVGElementConversion = {
		rect: (rect: SVGRectElement): string => {
			const width: number = parseFloat(rect.getAttribute('width') || '0')
			const height: number = parseFloat(rect.getAttribute('height') || '0')
			const x: number = parseFloat(rect.getAttribute('x') || '0')
			const y: number = parseFloat(rect.getAttribute('y') || '0')
			let rx: number | string = rect.getAttribute('rx') || 'auto'
			let ry: number | string = rect.getAttribute('ry') || 'auto'

			if (rx === 'auto' && ry === 'auto') rx = ry = 0
			else if (rx !== 'auto' && ry === 'auto') rx = ry = SVGImporter.fromPercentage(rx, width)
			else if (ry !== 'auto' && rx === 'auto') ry = rx = SVGImporter.fromPercentage(ry, height)
			else {
				rx = SVGImporter.fromPercentage(rx, width)
				ry = SVGImporter.fromPercentage(ry, height)
			}

			if (rx > width / 2) rx = width / 2
			if (ry > height / 2) ry = height / 2

			const hasCurves = rx > 0 && ry > 0

			return [
				`M${x + rx} ${y}`,
				`H${x + width - rx}`,
				...(hasCurves ? [`A${rx} ${ry} 0 0 1 ${x + width} ${y + ry}`] : []),
				`V${y + height - ry}`,
				...(hasCurves ? [`A${rx} ${ry} 0 0 1 ${x + width - rx} ${y + height}`] : []),
				`H${x + rx}`,
				...(hasCurves ? [`A${rx} ${ry} 0 0 1 ${x} ${y + height - ry}`] : []),
				`V${y + ry}`,
				...(hasCurves ? [`A${rx} ${ry} 0 0 1 ${x + rx} ${y}`] : []),
				'Z',
			].join(' ')
		},

		ellipse: (ellipse: SVGEllipseElement | SVGCircleElement): string => {
			const cx = parseFloat(ellipse.getAttribute('cx') || '0')
			const cy = parseFloat(ellipse.getAttribute('cy') || '0')

			const rx = parseFloat(ellipse.getAttribute('rx') ?? ellipse.getAttribute('r') ?? '0')
			const ry = parseFloat(ellipse.getAttribute('ry') ?? ellipse.getAttribute('r') ?? '0')

			return [
				`M${cx + rx} ${cy}`,
				`A${rx} ${ry} 0 0 1 ${cx} ${cy + ry}`,
				`A${rx} ${ry} 0 0 1 ${cx - rx} ${cy}`,
				`A${rx} ${ry} 0 0 1 ${cx + rx} ${cy}`,
				'Z',
			].join(' ')
		},

		circle: (circle: SVGCircleElement): string => SVGImporter.CONVERSION.ellipse(circle),

		line: (line: SVGLineElement): string =>
			`M${line.getAttribute('x1') || '0'} ${line.getAttribute('y1') || '0'} L${line.getAttribute('x2') || '0'} ${
				line.getAttribute('y2') || '0'
			}`,

		polyline: (polyline: SVGPolylineElement): string => {
			const points = polyline.getAttribute('points') || ''
			const pointsArray = points
				.trim()
				.replace(/  +/g, ' ')
				.split(' ')
				.reduce(
					(arr: Array<string>, point: string) => [...arr, ...(point.includes(',') ? point.split(',') : [point])],
					[]
				)
			const pairs = SVGImporter.chunk(pointsArray, 2)

			return pairs.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x} ${y}`).join(' ')
		},

		polygon: (polygon: SVGPolygonElement): string => SVGImporter.CONVERSION.polyline(polygon) + ' Z',

		path: (path: SVGPathElement): string => path.getAttribute('d') + '',
	}
}

export default SVGImporter
