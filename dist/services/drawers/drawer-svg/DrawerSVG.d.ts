import Scene from "../../../core/Scene";
import { IDrawerSVGOptions } from "../../types/drawer-canvas";
import Drawer from "../Drawer";
declare class DrawerSVG extends Drawer<IDrawerSVGOptions, {}> {
    private container;
    constructor(scene: Scene | undefined, container: HTMLElement, drawerOptions?: IDrawerSVGOptions, ratio?: number | undefined, resolution?: number);
    /**
     * Draw current scene
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    draw(): number;
    protected appendSVGFromPaths(paths: Array<SVGPathElement>, drawerOptions: IDrawerSVGOptions): void;
    static draw(scene: Scene, paths: Array<SVGPathElement>, options: IDrawerSVGOptions & {
        ghost_index?: number;
    }, resolution?: number): number;
}
export default DrawerSVG;
//# sourceMappingURL=DrawerSVG.d.ts.map