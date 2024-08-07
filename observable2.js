const observer = {
    next(data) { console.log(data) },
    error() {},
    complete() {}
}

class Subscription {
    unsubscribe

    constructor(func) {
        this.unsubscribe = func
    }
}

class Observable {
    _subscribe

    constructor(func) {
        this._subscribe = func
    }

    subscribe(next, error, complete) {
        let observer

        if (typeof next === 'function') {
            observer = {
                next,
                error: error || (() => {}),
                complete: complete || (() => {})
            }
        } else {
            observer = next
        }

        return this._subscribe(observer)
    }

    static timeout(miliseconds) {
        function closure(observer) {
            const id = setTimeout(() => {
                observer.next('ok after' + miliseconds)
            }, miliseconds)

            return new Subscription(() => {
                clearTimeout(id)
            })
        }

        return new Observable(closure)
    }
}

Observable.timeout(3000).subscribe(observer).unsubscribe()

// closure => subscribe(() => {.....}, () => {}, () => {}) => new Subscription => unsubscribe()