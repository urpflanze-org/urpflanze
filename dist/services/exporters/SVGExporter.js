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
var DEFAULT_SETTINGS = {
    size: 1080,
    quality: 1,
    time: 0,
    noBackground: true,
};
/**
 *
 * @category Services
 * @class SVGExporter
 */
var SVGExporter = /** @class */ (function () {
    function SVGExporter() {
    }
    SVGExporter.prototype.parse = function (drawer, settings) {
        settings = __assign(__assign({}, DEFAULT_SETTINGS), settings);
        var scene = drawer.getScene();
        var timeline = drawer.getTimeline();
        var decimals = Math.floor(settings.quality * 4);
        var all_parts = [];
        var drawOptions = __assign({}, drawer.getOptions());
        if (drawOptions.ghosts) {
            var time = timeline.getTime();
            var sequenceEndTime = timeline.getSequenceEndTime();
            for (var i = 1; i <= drawOptions.ghosts; i++) {
                var ghostTime = time -
                    (drawOptions.ghost_skip_function
                        ? drawOptions.ghost_skip_function(i)
                        : i * (drawOptions.ghost_skip_time || 30));
                drawOptions.clearCanvas = i == 1;
                drawOptions.ghost_index = i;
                drawOptions.time =
                    ghostTime < 0
                        ? ghostTime + sequenceEndTime
                        : ghostTime > sequenceEndTime
                            ? ghostTime % sequenceEndTime
                            : ghostTime;
                all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals));
            }
            drawOptions.clearCanvas = false;
            drawOptions.ghost_index = undefined;
            drawOptions.time = timeline.getTime();
            all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals));
        }
        else {
            if (!drawOptions.clearCanvas) {
                var sequence = timeline.getSequence();
                var needFrame = settings.time >= sequence.end ? sequence.frames : timeline.getFrameAtTime(settings.time);
                for (var i = 0; i <= needFrame; i++) {
                    timeline.setFrame(i);
                    drawOptions.time = timeline.getTime();
                    all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals));
                }
            }
            else {
                drawOptions.time = timeline.getTime();
                drawOptions.clearCanvas = drawOptions.clearCanvas || timeline.getCurrentFrame() <= 0;
                all_parts.push(SVGExporter.draw(scene, drawOptions, drawer.getResolution(), decimals));
            }
        }
        var result = [];
        result.push("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 " + scene.width.toFixed(decimals) + " " + scene.height.toFixed(decimals) + "\" width=\"" + scene.width.toFixed(decimals) + "\" height=\"" + scene.height.toFixed(decimals) + "\">");
        if (!settings.noBackground)
            result.push("\t<rect width=\"" + scene.width.toFixed(decimals) + "\" height=\"" + scene.height.toFixed(decimals) + "\" fill=\"" + scene.background + "\" />");
        result.push(all_parts.map(function (paths) { return "<g>" + paths.join('\t\t') + "</g>"; }).join('\t'));
        result.push("</svg>");
        return result.join('\n');
    };
    SVGExporter.draw = function (scene, options, resolution, decimals) {
        var _a, _b, _c;
        var scale = (_a = options.scale) !== null && _a !== void 0 ? _a : 1;
        var translate = (_b = options.translate) !== null && _b !== void 0 ? _b : [0, 0];
        var time = (_c = options.time) !== null && _c !== void 0 ? _c : 0;
        var bGhost = typeof options.ghosts !== 'undefined' &&
            options.ghosts > 0 &&
            typeof options.ghost_index !== 'undefined' &&
            options.ghost_index > 0;
        var ghostMultiplier = bGhost
            ? 1 - options.ghost_index / (options.ghosts + 0.5)
            : 1;
        var width = scene.width;
        var height = scene.height;
        var ratio_x = width > height ? 1 : height / width;
        var ratio_y = width > height ? width / height : 1;
        resolution = resolution || width;
        var final_scale = [(width / (resolution / ratio_x)) * scale, (height / (resolution / ratio_y)) * scale];
        var final_translate = [
            width / 2 - (scale > 1 ? (translate[0] * width) / (1 / ((scale - 1) / 2)) : 0),
            height / 2 - (scale > 1 ? (translate[1] * height) / (1 / ((scale - 1) / 2)) : 0),
        ];
        scene.current_time = time;
        scene.getChildren().forEach(function (sceneChild) {
            var _a, _b;
            if (!(((_a = sceneChild === null || sceneChild === void 0 ? void 0 : sceneChild.data) === null || _a === void 0 ? void 0 : _a.visible) === false || (bGhost && ((_b = sceneChild === null || sceneChild === void 0 ? void 0 : sceneChild.data) === null || _b === void 0 ? void 0 : _b.disableGhost) === true)))
                sceneChild.generate(time, true);
        });
        var Paths = [];
        scene.stream(function (_a) {
            var _b, _c;
            var lineWidth = _a.lineWidth, strokeColor = _a.strokeColor, fillColor = _a.fillColor, shape = _a.shape, buffer = _a.buffer, frame_length = _a.frame_length, frame_buffer_index = _a.frame_buffer_index;
            if (((_b = shape === null || shape === void 0 ? void 0 : shape.data) === null || _b === void 0 ? void 0 : _b.visible) == false || (bGhost && ((_c = shape === null || shape === void 0 ? void 0 : shape.data) === null || _c === void 0 ? void 0 : _c.disableGhost) == true))
                return;
            var temp = [];
            for (var i = 0; i < frame_length; i += 2) {
                var x = (buffer[frame_buffer_index + i] - width / 2) * final_scale[0] + final_translate[0];
                var y = (buffer[frame_buffer_index + i + 1] - height / 2) * final_scale[1] + final_translate[1];
                temp.push(x.toFixed(decimals) + ' ' + y.toFixed(decimals));
            }
            if (fillColor) {
                if (bGhost) {
                    var color = /\((.+),(.+),(.+),(.+)\)/g.exec(fillColor);
                    if (color) {
                        var _d = color, a = _d[1], b = _d[2], c = _d[3], o = _d[4];
                        var alpha = o ? parseFloat(o) : 1;
                        var ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
                        fillColor =
                            fillColor.indexOf('rgb') >= 0
                                ? "rgba(" + a + "," + b + "," + c + "," + ghostAlpha + ")"
                                : "hsla(" + a + "," + b + "," + c + "," + ghostAlpha + ")";
                    }
                }
            }
            if (strokeColor && lineWidth) {
                if (bGhost) {
                    var color = /\((.+),(.+),(.+),(.+)\)/g.exec(strokeColor);
                    if (color) {
                        var _e = color, a = _e[1], b = _e[2], c = _e[3], o = _e[4];
                        var alpha = o ? parseFloat(o) : 1;
                        var ghostAlpha = alpha <= 0 ? 0 : alpha * ghostMultiplier;
                        strokeColor =
                            strokeColor.indexOf('rgb') >= 0
                                ? "rgba(" + a + "," + b + "," + c + "," + ghostAlpha + ")"
                                : "hsla(" + a + "," + b + "," + c + "," + ghostAlpha + ")";
                    }
                    lineWidth *= ghostMultiplier;
                }
            }
            Paths.push("<path fill=\"" + (fillColor || 'none') + "\" " + (strokeColor ? "stroke=\"" + strokeColor + "\"" : '') + " " + (lineWidth ? "stroke-width=\"" + lineWidth + "\"" : '') + " " + ("d=\"M" + temp.join(' L') + " " + (shape && shape.isClosed() ? 'Z' : '') + "\" />"));
        });
        return Paths;
    };
    return SVGExporter;
}());
export default SVGExporter;
//# sourceMappingURL=SVGExporter.js.map