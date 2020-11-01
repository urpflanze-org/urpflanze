import Scene from "../../../core/Scene";
import { IDrawerSVGEvents, IDrawerSVGOptions } from "../../types/drawer";
import Drawer from "../Drawer";
/**
 * Abstract drawer
 *
 * @category Services.Drawer
 * @class DrawerSVG
 * @extends {Drawer<IDrawerSVGOptions, IDrawerSVGEvents>}
 */
declare class DrawerSVG extends Drawer<IDrawerSVGOptions, IDrawerSVGEvents> {
    private container;
    private svgElement;
    constructor(scene: Scene | undefined, container: HTMLElement, drawerOptions?: IDrawerSVGOptions, ratio?: number | undefined, resolution?: number, duration?: number, framerate?: number);
    /**
     * Draw current scene
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    draw(): number;
    protected appendSVGFromPaths(paths: Array<SVGPathElement>, drawerOptions: IDrawerSVGOptions): void;
    static draw(scene: Scene, paths: Array<SVGPathElement>, options: IDrawerSVGOptions & {
        ghostIndex?: number;
    }): number;
}
export default DrawerSVG;
//# sourceMappingURL=DrawerSVG.d.ts.map