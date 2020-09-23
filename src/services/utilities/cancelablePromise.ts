export interface ICancelablePromise<T> {
    promise: Promise<T>
    resolved: () => boolean
    canceled: () => boolean
    cancel: () => void    
}

export function cancelablePromise<T>(promise: Promise<T>): ICancelablePromise<T>
{
    let resolved = false
    let canceled = false

    const wrappedPromise = new Promise<T>((resolve, reject) => {
        promise
            .then(val => {
               resolved = true
               canceled ? reject('canceled') : resolve(val)
            })
            .catch(error => {
               resolved = true
               canceled ? reject('canceled') : reject(error) 
            })
    });

    return {
        promise: wrappedPromise,
        resolved: () => resolved,
        canceled: () => canceled,
        cancel: () => { canceled = true }
    }
}
