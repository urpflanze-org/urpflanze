declare abstract class Emitter<EventTypes> {
    private callbacks;
    constructor();
    /**
     * Attach callback at event
     *
     * @param {keyof EventTypes} e
     * @param {(value: EventTypes[keyof EventTypes]) => any} callback
     * @memberof Emitter
     */
    attach(e: keyof EventTypes, callback: (value: EventTypes[keyof EventTypes]) => any): void;
    /**
     * Remove callbach listener at event
     *
     * @param {keyof EventTypes} e
     * @param {(value: EventTypes[keyof EventTypes]) => void} callback
     * @memberof Emitter
     */
    detach(e: keyof EventTypes, callback: (value?: EventTypes[keyof EventTypes]) => void): void;
    /**
     * Dispatch event
     *
     * @param {keyof EventTypes} e
     * @param {EventTypes[keyof EventTypes]} [params]
     * @memberof Emitter
     */
    dispatch(e: keyof EventTypes, params: EventTypes[keyof EventTypes]): void;
}
export default Emitter;
//# sourceMappingURL=Emitter.d.ts.map