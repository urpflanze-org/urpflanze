declare abstract class Emitter<EventTypes> {
    private callbacks;
    constructor();
    attach(e: keyof EventTypes, callback: (value: EventTypes[keyof EventTypes]) => any): void;
    detach(e: keyof EventTypes, callback: (value?: EventTypes[keyof EventTypes]) => void): void;
    dispatch(e: keyof EventTypes, params: EventTypes[keyof EventTypes]): void;
}
export default Emitter;
