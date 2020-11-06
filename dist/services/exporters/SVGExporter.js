var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import DrawerSVG from "../drawers/drawer-svg/DrawerSVG";
var DEFAULT_SETTINGS = {
    size: 1080,
    quality: 1,
    time: 0,
    noBackground: true,
};
/**
 *
 * @category Services.Export/Import
 * @class SVGExporter
 */
var SVGExporter = /** @class */ (function () {
    function SVGExporter() {
    }
    SVGExporter.parse = function (drawer, settings) {
        settings = __assign(__assign({}, DEFAULT_SETTINGS), settings);
        var svg = this.parseAsSVG(drawer, settings);
        return svg.outerHTML;
    };
    SVGExporter.parseAsSVG = function (drawer, settings) {
        settings = __assign(__assign({}, DEFAULT_SETTINGS), settings);
        var scene = drawer.getScene();
        var drawerOptions = __assign(__assign({}, drawer.getOptions()), { time: settings.time, decimals: Math.floor(settings.quality * 4), noBackground: settings.noBackground });
        var container = document.createElement('div');
        var tmp = new DrawerSVG(scene, container, drawerOptions, drawer.getRatio(), drawer.getResolution());
        var tmpTimeline = tmp.getTimeline();
        tmpTimeline.setDurate(drawer.getTimeline().getDurate());
        tmpTimeline.setTime(drawerOptions.time || 0);
        tmp.draw();
        return container.firstChild;
    };
    return SVGExporter;
}());
export default SVGExporter;
//# sourceMappingURL=SVGExporter.js.map