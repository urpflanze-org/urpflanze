export declare function initShaderProgram(gl: WebGLRenderingContext, vertex_shader: string, fragment_shader: string): WebGLProgram | null;
export declare function loadShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null;
interface IBuffer {
    position: WebGLBuffer;
    textureCoord: WebGLBuffer;
    indices: WebGLBuffer;
}
export declare function initBuffers(gl: WebGLRenderingContext): IBuffer | null;
export interface IProgramInfo {
    program: WebGLProgram;
    attribLocations: {
        vertexPosition: number;
        textureCoord: number;
    };
    uniformLocations: {
        projectionMatrix: WebGLUniformLocation | null;
        modelViewMatrix: WebGLUniformLocation | null;
        uDrawer: WebGLUniformLocation | null;
    };
}
export declare function loadTexture(gl: WebGLRenderingContext, image_src: ImageData | string): WebGLTexture | null;
export interface IUniforms {
    [key: string]: {
        value: any;
        type: 'float' | 'integer' | 'vec2' | 'vec3' | 'vec4' | 'sampler2d';
    };
}
export declare function drawScene(gl: WebGLRenderingContext, programInfo: IProgramInfo, buffers: IBuffer, texture: WebGLTexture, uniforms: IUniforms): void;
export {};
