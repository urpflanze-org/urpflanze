/**
 * Repetition type enumerator.
 *
 * @category Core.Enums
 * @internal
 * @enum {number}
 */
export var ERepetitionType;
(function (ERepetitionType) {
    /**
     * Defines the type of repetition of the shape,
     * in a circular way starting from the center of the scene
     * @order 1
     */
    ERepetitionType[ERepetitionType["Ring"] = 1] = "Ring";
    /**
     * Defines the type of repetition of the shape,
     * on a nxm grid starting from the center of the scene
     * @order 2
     */
    ERepetitionType[ERepetitionType["Matrix"] = 2] = "Matrix";
    /**
     * Defines the type of shape generation
     * @order 3
     */
    ERepetitionType[ERepetitionType["Loop"] = 3] = "Loop";
})(ERepetitionType || (ERepetitionType = {}));
//# sourceMappingURL=scene-child.js.map