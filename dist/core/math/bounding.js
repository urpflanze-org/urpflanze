/**
 * @internal
 * @ignore
 */
var Bounding = {
    clear: function (tmp_bounding) {
        tmp_bounding[0] = undefined;
        tmp_bounding[1] = undefined;
        tmp_bounding[2] = undefined;
        tmp_bounding[3] = undefined;
    },
    add: function (tmp_bounding, x, y) {
        if (typeof tmp_bounding[0] === 'undefined' || x < tmp_bounding[0])
            tmp_bounding[0] = x;
        if (typeof tmp_bounding[2] === 'undefined' || x > tmp_bounding[2])
            tmp_bounding[2] = x;
        if (typeof tmp_bounding[1] === 'undefined' || y < tmp_bounding[1])
            tmp_bounding[1] = y;
        if (typeof tmp_bounding[3] === 'undefined' || y > tmp_bounding[3])
            tmp_bounding[3] = y;
    },
    bind: function (bounding, tmp_bounding) {
        if (typeof tmp_bounding[0] !== 'undefined' &&
            typeof tmp_bounding[1] !== 'undefined' &&
            typeof tmp_bounding[2] !== 'undefined' &&
            typeof tmp_bounding[3] !== 'undefined') {
            bounding.x = tmp_bounding[0];
            bounding.y = tmp_bounding[1];
            bounding.width = tmp_bounding[2] - tmp_bounding[0];
            bounding.height = tmp_bounding[3] - tmp_bounding[1];
            bounding.cx = bounding.x + bounding.width / 2;
            bounding.cy = bounding.y + bounding.height / 2;
        }
    },
};
export default Bounding;
//# sourceMappingURL=bounding.js.map