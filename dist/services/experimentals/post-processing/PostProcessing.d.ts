import DrawerCanvas from "../../drawer-canvas/DrawerCanvas";
import { IUniforms } from "./PostProcessingUtilities";
declare class PostProcessing {
    private canvas;
    private gl_context;
    private referer?;
    vertex: string;
    fragment: string;
    uniforms: IUniforms;
    noise: string;
    constructor(canvas?: HTMLCanvasElement);
    apply(drawer: DrawerCanvas): void;
    setSize(drawer: DrawerCanvas): void;
    init(drawer: DrawerCanvas): void;
}
export default PostProcessing;
