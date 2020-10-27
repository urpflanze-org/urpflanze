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
import Scene from "../../core/Scene";
import Timeline from "../timeline/Timeline";
import SceneUtilities from "../scene-utilities/SceneUtilities";
import Emitter from "../events/Emitter";
/**
 * Abstract Drawer
 *
 * @category Services.Drawer
 * @abstract
 * @class Drawer
 * @extends {Emitter<IDrawerEvents>}
 * @template IADrawerOptions
 * @template IDrawerEvents
 */
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer(scene, ratio, resolution, duration, framerate) {
        if (scene === void 0) { scene = undefined; }
        if (ratio === void 0) { ratio = undefined; }
        if (resolution === void 0) { resolution = 0; }
        var _this = _super.call(this) || this;
        _this.timeline = new Timeline(duration, framerate);
        _this.resolution = resolution || (scene && scene.width ? scene.width : 0);
        _this.ratio = ratio || (scene && scene.width && scene.height ? scene.width / scene.height : 1);
        if (scene) {
            var width = _this.ratio >= 1 ? scene.width : scene.width * _this.ratio;
            var height = _this.ratio >= 1 ? scene.height / _this.ratio : scene.height;
            scene.resize(width, height);
            _this.setScene(scene);
        }
        _this.draw_id = null;
        _this.redraw_id = null;
        _this.animation_id = null;
        _this.draw = _this.draw.bind(_this);
        _this.animate = _this.animate.bind(_this);
        _this.startAnimation = _this.startAnimation.bind(_this);
        return _this;
    }
    /**
     * Set scene
     *
     * @param {Scene} scene
     */
    Drawer.prototype.setScene = function (scene) {
        this.scene = scene;
        if (!this.resolution && this.scene.width)
            this.resolution = this.scene.width;
    };
    /**
     * Return scene
     *
     * @return {*}  {Scene}
     */
    Drawer.prototype.getScene = function () {
        return this.scene;
    };
    /**
     * Return timeline
     *
     * @return {*}  {Timeline}
     */
    Drawer.prototype.getTimeline = function () {
        return this.timeline;
    };
    /**
     * Resize scene and canvas
     *
     * @param {number} width
     * @param {number} height
     * @param {number} [ratio]
     */
    Drawer.prototype.resize = function (width, height, ratio, resolution) {
        var _this = this;
        ratio = ratio || this.ratio || width / height;
        var size = Math.max(width, height);
        width = ratio >= 1 ? size : size * ratio;
        height = ratio >= 1 ? size / ratio : size;
        this.ratio = ratio;
        if (this.scene)
            this.scene.resize(width, height);
        if (resolution && resolution !== this.resolution && this.scene) {
            this.resolution = resolution;
            Scene.walk(function (sceneChild) {
                var props = sceneChild.data.props;
                Object.keys(props).forEach(function (name) {
                    SceneUtilities.setProp(sceneChild, name, props[name], _this);
                });
            }, this.scene);
        }
    };
    /**
     * Resize by ratio
     *
     */
    Drawer.prototype.setRatio = function (ratio) {
        this.resize(this.scene.width, this.scene.height, ratio);
    };
    /**
     * Return drawer ratio
     */
    Drawer.prototype.getRatio = function () {
        return this.ratio;
    };
    /**
     * Get resolution
     */
    Drawer.prototype.getResolution = function () {
        return this.resolution;
    };
    /**
     * Get resolution of drawer
     */
    Drawer.prototype.setResolution = function (resolution) {
        this.resize(this.scene.width, this.scene.height, this.ratio, resolution);
    };
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     */
    Drawer.prototype.getValueFromResolution = function (value) {
        return (value * this.resolution) / 200;
    };
    /**
     * Get scene value scaled based on resolution
     *
     * @param {number} value
     */
    Drawer.prototype.getValueFromResolutionScaled = function (value) {
        return (value * 200) / this.resolution;
    };
    /**
     * Set draw option
     *
     * @template K
     * @param {(K | IADrawerOptions)} name
     */
    Drawer.prototype.setOption = function (name, value) {
        if (typeof name == 'object') {
            var keys = Object.keys(name);
            for (var i = 0, len = keys.length; i < len; i++) {
                this.drawerOptions[keys[i]] = name[keys[i]];
            }
        }
        else {
            this.drawerOptions[name] = value;
        }
    };
    /**
     * Return option valie or default
     *
     * @template K
     * @param {K} name
     * @param {IADrawerOptions[K]} default_value
     */
    Drawer.prototype.getOption = function (name, default_value) {
        var _a;
        return (_a = this.drawerOptions[name]) !== null && _a !== void 0 ? _a : default_value;
    };
    /**
     * Return all options
     */
    Drawer.prototype.getOptions = function () {
        return this.drawerOptions;
    };
    /**
     * Internal tick animation
     */
    Drawer.prototype.animate = function (timestamp) {
        if (this.timeline.bSequenceStarted()) {
            this.animation_id = requestAnimationFrame(this.animate);
            if (this.timeline.tick(timestamp))
                this.draw();
        }
    };
    /**
     * Start animation drawing
     */
    Drawer.prototype.startAnimation = function () {
        this.stopAnimation();
        this.timeline.start();
        this.animation_id = requestAnimationFrame(this.animate);
    };
    /**
     * Stop animation drawing
     */
    Drawer.prototype.stopAnimation = function () {
        this.timeline.stop();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    };
    /**
     * Pause animation drawing
     */
    Drawer.prototype.pauseAnimation = function () {
        this.timeline.pause();
        if (this.animation_id)
            cancelAnimationFrame(this.animation_id);
    };
    /**
     * Play animation drawing
     */
    Drawer.prototype.playAnimation = function () {
        this.timeline.start();
        requestAnimationFrame(this.animate);
    };
    /**
     * Redraw
     *
     * @returns {void}
     * @memberof DrawerCanvas
     */
    Drawer.prototype.redraw = function () {
        if (!this.timeline.bSequenceStarted()) {
            this.draw_id && cancelAnimationFrame(this.draw_id);
            if (typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0)
                this.timeline.stop();
            this.draw_id = requestAnimationFrame(this.draw);
        }
        else if (typeof this.drawerOptions.ghosts === undefined || this.drawerOptions.ghosts === 0) {
            this.stopAnimation();
            this.redraw_id && cancelAnimationFrame(this.redraw_id);
            this.redraw_id = requestAnimationFrame(this.startAnimation);
        }
    };
    /**
     * Each ghosts index and create drawerOptions to pass at the draw method
     *
     * @static
     * @template T
     * @param {T} drawerOptions
     * @param {Timeline} timeline
     * @param {((ghostDrawerOptions: T & { ghost_index?: number }) => any)} ghostCallback
     */
    Drawer.eachGhosts = function (drawerOptions, timeline, ghostCallback) {
        if (drawerOptions.ghosts) {
            var ghostDrawerOptions = __assign({}, drawerOptions);
            var drawAtTime = timeline.getTime();
            var sequenceDurate = timeline.getDurate();
            for (var i = 1; i <= drawerOptions.ghosts; i++) {
                var ghostTime = drawAtTime -
                    (drawerOptions.ghost_skip_function
                        ? drawerOptions.ghost_skip_function(i)
                        : i * drawerOptions.ghost_skip_time);
                ghostDrawerOptions.ghost_index = i;
                ghostDrawerOptions.time = (ghostTime + sequenceDurate) % sequenceDurate;
                ghostCallback(ghostDrawerOptions);
            }
        }
    };
    /**
     * Create color based on ghostMultiplier
     *
     * @static
     * @param {string} color
     * @param {number} ghostMultiplier
     * @return {*}  {(string | undefined)}
     */
    Drawer.ghostifyColor = function (color, ghostMultiplier) {
        var match = /\((.+),(.+),(.+),(.+)?\)/g.exec(color);
        if (match) {
            var _a = match, a = _a[1], b = _a[2], c = _a[3], o = _a[4];
            var alpha = o ? parseFloat(o) : 1;
            var ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
            return color.indexOf('rgb') >= 0 ? "rgba(" + a + "," + b + "," + c + "," + ghostAlpha + ")" : "hsla(" + a + "," + b + "," + c + "," + ghostAlpha + ")";
        }
    };
    return Drawer;
}(Emitter));
export default Drawer;
//# sourceMappingURL=Drawer.js.map