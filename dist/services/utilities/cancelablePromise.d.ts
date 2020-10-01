export interface ICancelablePromise<T> {
    promise: Promise<T>;
    resolved: () => boolean;
    canceled: () => boolean;
    cancel: () => void;
}
export declare function cancelablePromise<T>(promise: Promise<T>): ICancelablePromise<T>;
//# sourceMappingURL=cancelablePromise.d.ts.map