import { ICancelablePromise } from 'src/Utilites';
import Emitter from '@services/events/Emitter';
import { IRenderEvents, IRenderSettings } from '@services/types/renedrer';
import Capturer from '@services/renderer/Capturer';
import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas';
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