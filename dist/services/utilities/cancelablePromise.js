export function cancelablePromise(promise) {
    let resolved = false;
    let canceled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
        promise
            .then(val => {
            resolved = true;
            canceled ? reject('canceled') : resolve(val);
        })
            .catch(error => {
            resolved = true;
            canceled ? reject('canceled') : reject(error);
        });
    });
    return {
        promise: wrappedPromise,
        resolved: () => resolved,
        canceled: () => canceled,
        cancel: () => { canceled = true; }
    };
}
//# sourceMappingURL=cancelablePromise.js.map