import { ICancelablePromise } from "../../Utilites";
import Emitter from "../events/Emitter";
import { IRenderEvents, IRenderSettings } from "../types/renedrer";
import Capturer from "./Capturer";
import DrawerCanvas from "../drawer-canvas/DrawerCanvas";
/**
 *
 * @category Services.Renderer
 * @class Renderer
 * @extends {Emitter<IRenderEvents>}
 */
declare class Renderer extends Emitter<IRenderEvents> {
    capturer: Capturer;
    renderPromise: ICancelablePromise<Uint8Array> | ICancelablePromise<Array<Blob>>;
    started: boolean;
    constructor();
    renderImage(drawer: DrawerCanvas, settings: IRenderSettings): Promise<Uint8Array>;
    private prepareRenderAnimation;
    stop(): void;
    renderAnimation(drawer: DrawerCanvas, settings: IRenderSettings): Promise<Array<Blob>>;
    private renderAnimationPart;
}
export default Renderer;
//# sourceMappingURL=Renderer.d.ts.map