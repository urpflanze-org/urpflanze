var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { now } from "../../../Utilites";
import Drawer from "../Drawer";
var DrawerSVG = /** @class */ (function (_super) {
    __extends(DrawerSVG, _super);
    function DrawerSVG(scene, container, drawerOptions, ratio, resolution) {
        if (drawerOptions === void 0) { drawerOptions = {}; }
        if (ratio === void 0) { ratio = undefined; }
        if (resolution === void 0) { resolution = 0; }
        var _a, _b, _c, _d;
        var _this = _super.call(this, scene, ratio, resolution) || this;
        _this.container = container;
        _this.drawerOptions = {
            time: (_a = drawerOptions.time) !== null && _a !== void 0 ? _a : 0,
            clear: (_b = drawerOptions.clear) !== null && _b !== void 0 ? _b : true,
            decimals: drawerOptions.decimals || 2,
            noBackground: (_c = drawerOptions.noBackground) !== null && _c !== void 0 ? _c : false,
            ghosts: drawerOptions.ghosts || 0,
            ghost_skip_time: (_d = drawerOptions.ghost_skip_time) !== null && _d !== void 0 ? _d : 30,
            ghost_skip_function: drawerOptions.ghost_skip_function,
        };
        return _this;
    }
    /**
     * Draw current scene
     *
     * @returns {number}
     * @memberof DrawerCanvas
     */
    DrawerSVG.prototype.draw = function () {
        var _this = this;
        var draw_time = 0;
        var timeline = this.timeline;
        var drawAtTime = timeline.getTime();
        var drawerOptions = __assign(__assign({}, this.drawerOptions), { ghost_index: undefined, clear: this.drawerOptions.clear || timeline.getCurrentFrame() <= 0, time: drawAtTime });
        var paths = [];
        if (drawerOptions.ghosts) {
            Drawer.eachGhosts(drawerOptions, timeline, function (ghostDrawerOptions) {
                draw_time += DrawerSVG.draw(_this.scene, paths, ghostDrawerOptions, _this.resolution);
            });
        }
        draw_time += DrawerSVG.draw(this.scene, paths, drawerOptions, this.resolution);
        this.appendSVGFromPaths(paths, drawerOptions);
        return draw_time;
    };
    DrawerSVG.prototype.appendSVGFromPaths = function (paths, drawerOptions) {
        if (this.scene && this.container) {
            while (this.container.lastChild)
                this.container.removeChild(this.container.lastChild);
            var svg_1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg_1.setAttribute('width', this.scene.width + '');
            svg_1.setAttribute('height', this.scene.height + '');
            svg_1.setAttribute('viewBox', "0 0 " + this.scene.width + " " + this.scene.height);
            var comm = document.createComment('Created with Urpflanze.js');
            svg_1.appendChild(comm);
            if (!drawerOptions.noBackground) {
                var background = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                background.setAttribute('width', this.scene.width + '');
                background.setAttribute('height', this.scene.height + '');
                background.setAttribute('fill', this.scene.background);
                svg_1.appendChild(background);
            }
            paths.forEach(function (path) { return svg_1.appendChild(path); });
            this.container.appendChild(svg_1);
        }
    };
    DrawerSVG.draw = function (scene, paths, options, resolution) {
        var _a;
        var start_time = now();
        var time = (_a = options.time) !== null && _a !== void 0 ? _a : 0;
        var decimals = options.decimals;
        var bGhost = typeof options.ghosts !== 'undefined' &&
            options.ghosts > 0 &&
            typeof options.ghost_index !== 'undefined' &&
            options.ghost_index > 0;
        var ghostMultiplier = bGhost
            ? 1 - options.ghost_index / (options.ghosts + 0.5)
            : 0;
        var width = scene.width;
        var height = scene.height;
        resolution = resolution || width;
        var logFillColorWarn = false;
        var logStrokeColorWarn = false;
        scene.current_time = time;
        scene.getChildren().forEach(function (sceneChild) {
            if (!sceneChild.data ||
                !(sceneChild.data.visible === false) ||
                !(bGhost && sceneChild.data.disableGhost === true)) {
                sceneChild.generate(time, true);
                sceneChild.stream(function (streamCallback) {
                    var tempPath = [];
                    for (var i = 0; i < streamCallback.frame_length; i += 2) {
                        tempPath.push(streamCallback.buffer[streamCallback.frame_buffer_index + i].toFixed(decimals) +
                            ' ' +
                            streamCallback.buffer[streamCallback.frame_buffer_index + i + 1].toFixed(decimals));
                    }
                    if (streamCallback.fillColor) {
                        if (bGhost) {
                            var color = Drawer.ghostifyColor(streamCallback.fillColor, ghostMultiplier);
                            if (color) {
                                streamCallback.fillColor = color;
                            }
                            else if (!logFillColorWarn) {
                                console.warn("[Urpflanze:DrawerCanvas] Unable ghost fill color '" + streamCallback.fillColor + "', \n                            please enter a rgba or hsla color");
                                logFillColorWarn = true;
                            }
                        }
                    }
                    if (streamCallback.strokeColor) {
                        if (bGhost) {
                            var color = Drawer.ghostifyColor(streamCallback.strokeColor, ghostMultiplier);
                            if (color) {
                                streamCallback.strokeColor = color;
                            }
                            else if (!logStrokeColorWarn) {
                                console.warn("[Urpflanze:DrawerCanvas] Unable ghost stroke color '" + streamCallback.strokeColor + "', \n                            please enter a rgba or hsla color");
                                logStrokeColorWarn = true;
                            }
                            streamCallback.lineWidth *= ghostMultiplier;
                        }
                    }
                    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', "M" + tempPath.join(' L') + " " + (streamCallback.shape.isClosed() ? 'Z' : ''));
                    path.setAttribute('fill', streamCallback.fillColor || 'none');
                    if (streamCallback.strokeColor) {
                        path.setAttribute('stroke', streamCallback.strokeColor);
                        path.setAttribute('stroke-width', (streamCallback.lineWidth || 1) + '');
                    }
                    paths.push(path);
                });
            }
        });
        var end_time = now();
        return end_time - start_time;
    };
    return DrawerSVG;
}(Drawer));
export default DrawerSVG;
//# sourceMappingURL=DrawerSVG.js.map