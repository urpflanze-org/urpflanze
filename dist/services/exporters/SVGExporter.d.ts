import Scene from "../../core/Scene";
import DrawerCanvas from "../drawers/drawer-canvas/DrawerCanvas";
import { IDrawOptions } from "../types/drawer-canvas";
import { IRenderSettings } from "../types/renedrer";
/**
 *
 * @category Services
 * @class SVGExporter
 */
declare class SVGExporter {
    parse(drawer: DrawerCanvas, settings: IRenderSettings): string;
    static draw(scene: Scene, options: IDrawOptions, resolution: number, decimals: number): Array<string>;
}
export default SVGExporter;
//# sourceMappingURL=SVGExporter.d.ts.map