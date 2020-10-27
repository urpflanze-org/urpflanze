import Drawer from "../drawers/Drawer";
import { IRenderSettings } from "../types/renderer";
/**
 *
 * @category Services.Export/Import
 * @class SVGExporter
 */
declare class SVGExporter {
    static parse(drawer: Drawer<any, any>, settings: IRenderSettings): string;
    static parseAsSVG(drawer: Drawer<any, any>, settings: IRenderSettings): SVGElement;
}
export default SVGExporter;
//# sourceMappingURL=SVGExporter.d.ts.map