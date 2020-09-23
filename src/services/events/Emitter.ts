abstract class Emitter<EventTypes> {
	private callbacks: { [e in keyof EventTypes]: Array<(args: EventTypes[keyof EventTypes]) => any> }

	constructor() {
		//@ts-ignore
		this.callbacks = {}
	}

	/**
	 * Attach callback at event
	 *
	 * @param {keyof EventTypes} e
	 * @param {(value: EventTypes[keyof EventTypes]) => any} callback
	 * @memberof Emitter
	 */
	public attach(e: keyof EventTypes, callback: (value: EventTypes[keyof EventTypes]) => any): void {
		if (!(e in this.callbacks)) {
			this.callbacks[e] = []
		}

		this.callbacks[e].push(callback)
	}

	/**
	 * Remove callbach listener at event
	 *
	 * @param {keyof EventTypes} e
	 * @param {(value: EventTypes[keyof EventTypes]) => void} callback
	 * @memberof Emitter
	 */
	public detach(e: keyof EventTypes, callback: (value?: EventTypes[keyof EventTypes]) => void): void {
		if (e in this.callbacks) {
			const index = this.callbacks[e].indexOf(callback)

			if (index >= 0) {
				this.callbacks[e].splice(index, 1)
			}
		}
	}

	/**
	 * Dispatch event
	 *
	 * @param {keyof EventTypes} e
	 * @param {EventTypes[keyof EventTypes]} [params]
	 * @memberof Emitter
	 */
	public dispatch(e: keyof EventTypes, params: EventTypes[keyof EventTypes]): void {
		if (e in this.callbacks) {
			for (let i = 0, len = this.callbacks[e].length; i < len; i++) if (this.callbacks[e][i](params) === false) break
		}
	}
}

export default Emitter
