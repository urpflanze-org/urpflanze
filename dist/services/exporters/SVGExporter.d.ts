import Scene from '@core/Scene';
import DrawerCanvas from '@services/drawer-canvas/DrawerCanvas';
import { DrawOptions } from '@services/types/drawer-canvas';
import { IRenderSettings } from '@services/types/renedrer';
declare class SVGExporter {
    parse(drawer: DrawerCanvas, settings: IRenderSettings): string;
    static draw(scene: Scene, options: DrawOptions, resolution: number, decimals: number): Array<string>;
}
export default SVGExporter;
//# sourceMappingURL=SVGExporter.d.ts.map