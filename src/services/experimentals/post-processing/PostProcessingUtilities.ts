export function initShaderProgram(
	gl: WebGLRenderingContext,
	vertex_shader: string,
	fragment_shader: string
): WebGLProgram | null {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertex_shader)
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragment_shader)

	// Create the shader program

	const shaderProgram = gl.createProgram()

	if (shaderProgram && vertexShader && fragmentShader) {
		gl.attachShader(shaderProgram, vertexShader)
		gl.attachShader(shaderProgram, fragmentShader)
		gl.linkProgram(shaderProgram)
		if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram))
			return null
		}
	}
	return shaderProgram
}

export function loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
	const shader = gl.createShader(type)

	if (shader) {
		gl.shaderSource(shader, source)

		gl.compileShader(shader)

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader), source)
			gl.deleteShader(shader)
			return null
		}
	}

	return shader
}

interface IBuffer {
	position: WebGLBuffer
	textureCoord: WebGLBuffer
	indices: WebGLBuffer
}

export function initBuffers(gl: WebGLRenderingContext): IBuffer | null {
	const position = gl.createBuffer()

	if (position) {
		gl.bindBuffer(gl.ARRAY_BUFFER, position)

		// TODO: width / heigh segments
		const positions = [-1.0, 1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, -1.0, 0.0]

		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)

		const textureCoord = gl.createBuffer()

		if (textureCoord) {
			gl.bindBuffer(gl.ARRAY_BUFFER, textureCoord)

			const textureCoordinates = [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0]

			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW)

			const indices = gl.createBuffer()

			if (indices) {
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices)

				const indicesArray = [2, 1, 0, 2, 3, 1]

				gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indicesArray), gl.STATIC_DRAW)

				return {
					position,
					textureCoord,
					indices,
				}
			}
		}
	}

	return null
}

export interface IProgramInfo {
	program: WebGLProgram
	attribLocations: {
		vertexPosition: number
		textureCoord: number
	}
	uniformLocations: {
		projectionMatrix: WebGLUniformLocation | null
		modelViewMatrix: WebGLUniformLocation | null
		uDrawer: WebGLUniformLocation | null
	}
}

export function loadTexture(gl: WebGLRenderingContext, image_src: ImageData | string): WebGLTexture | null {
	const texture = gl.createTexture()

	if (texture) {
		gl.bindTexture(gl.TEXTURE_2D, texture)

		const level = 0
		const internalFormat = gl.RGBA
		const width = 1
		const height = 1
		const border = 0
		const srcFormat = gl.RGBA
		const srcType = gl.UNSIGNED_BYTE
		const pixel = new Uint8Array([0, 0, 0, 0])

		gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, pixel)

		if (typeof image_src === 'string') {
			const image = new Image()
			image.onload = () => bindTexture(gl, texture, image, level, internalFormat, srcFormat, srcType)
			image.src = image_src
		} else {
			bindTexture(gl, texture, image_src, level, internalFormat, srcFormat, srcType)
		}
	}
	return texture
}

function bindTexture(
	gl: WebGLRenderingContext,
	texture: WebGLTexture,
	image: ImageData | HTMLImageElement,
	level: number,
	internalFormat: number,
	srcFormat: number,
	srcType: number
) {
	gl.bindTexture(gl.TEXTURE_2D, texture)
	gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image)

	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D)
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
	}
}

function isPowerOf2(value: number) {
	return (value & (value - 1)) == 0
}

export interface IUniforms {
	[key: string]: {
		value: any
		type: 'float' | 'integer' | 'vec2' | 'vec3' | 'vec4' | 'sampler2d'
	}
}

export function drawScene(
	gl: WebGLRenderingContext,
	programInfo: IProgramInfo,
	buffers: IBuffer,
	texture: WebGLTexture,
	uniforms: IUniforms
) {
	gl.clearColor(0.0, 0.0, 0.0, 0.0)
	gl.clearDepth(1.0)
	gl.enable(gl.DEPTH_TEST)
	gl.depthFunc(gl.LEQUAL)

	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

	const fieldOfView = (45 * Math.PI) / 180
	const aspect = gl.canvas.width / gl.canvas.height
	const zNear = 0.1
	const zFar = 100.0
	// const projectionMatrix = mat4.create()
	const projectionMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

	// mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar)

	// const modelViewMatrix = mat4.create()
	const modelViewMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

	// mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, -10.0, -10.0])

	{
		const numComponents = 3
		const type = gl.FLOAT
		const normalize = false
		const stride = 0
		const offset = 0
		gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position)
		gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset)
		gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition)
	}

	{
		const numComponents = 2
		const type = gl.FLOAT
		const normalize = false
		const stride = 0
		const offset = 0
		gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord)
		gl.vertexAttribPointer(programInfo.attribLocations.textureCoord, numComponents, type, normalize, stride, offset)
		gl.enableVertexAttribArray(programInfo.attribLocations.textureCoord)
	}

	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices)

	gl.useProgram(programInfo.program)

	gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix)
	gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix)

	gl.activeTexture(gl.TEXTURE0)

	gl.bindTexture(gl.TEXTURE_2D, texture)

	gl.uniform1i(programInfo.uniformLocations.uDrawer, 0)

	{
		const uniformsKeys = Object.keys(uniforms)
		for (let i = 0, len = uniformsKeys.length; i < len; i++) {
			const uniformKey = uniformsKeys[i]
			const uniform = uniforms[uniformKey]
			const location = gl.getUniformLocation(programInfo.program, uniformKey)

			if (location) {
				switch (uniform.type) {
					case 'float': {
						gl.uniform1f(location, uniform.value)
						break
					}
					case 'vec2': {
						gl.uniform2f(location, uniform.value[0], uniform.value[1])
						break
					}
				}
			}
		}
	}

	{
		const vertexCount = 6
		const type = gl.UNSIGNED_SHORT
		const offset = 0
		gl.drawElements(gl.TRIANGLES, vertexCount, type, offset)
		// gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount)
	}
}
