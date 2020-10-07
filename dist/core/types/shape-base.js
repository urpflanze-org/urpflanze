/**
 *
 *
 * @category Core.Enums
 */
export var EShapePrimitiveAdaptMode;
(function (EShapePrimitiveAdaptMode) {
    /**
     * The buffer is not changed
     * @order 1
     */
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["None"] = 0] = "None";
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1]
     * @order 2
     */
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Scale"] = 2] = "Scale";
    /**
     * The buffer is scaled in a range between [-1, -1] and [1,1] and is centered
     * @order 3
     */
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Center"] = 4] = "Center";
    /**
     * The buffer is adapted centrally and expanded in a range between [-1, -1] and [1,1]
     * @order 4
     */
    EShapePrimitiveAdaptMode[EShapePrimitiveAdaptMode["Fill"] = 8] = "Fill";
})(EShapePrimitiveAdaptMode || (EShapePrimitiveAdaptMode = {}));
//# sourceMappingURL=shape-base.js.map