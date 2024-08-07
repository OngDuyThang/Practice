const observer = {
    next(data) {
        console.log(data)
    },
    error() {},
    complete() {
        console.log('ok done')
    },
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
                observer.next(`ok after ${miliseconds} miliseconds`)
                observer.complete()
            }, miliseconds)

            return new Subscription(() => {
                clearTimeout(id)
            })
        }

        return new Observable(closure)
    }

    static interval(miliseconds) {
        function closure(observer) {
            const id = setInterval(() => {
                observer.next(`ok for each ${miliseconds} miliseconds`)
            }, miliseconds)

            return new Subscription(() => {
                clearInterval(id)
            })
        }

        return new Observable(closure)
    }
}

const subscription = Observable.interval(3000).subscribe(observer)
console.log(subscription)











// function Observable(func) {
//     this.subscribe = func
// }

// Observable.timeout = function (miliseconds) {
//     function closure(callback) {
//         setTimeout(() => {
//             callback(`ok after ${miliseconds} miliseconds`)
//         }, miliseconds)
//     }
//     return new Observable(closure)
// }

// const observable = Observable.timeout(3000)
// observable.subscribe((data) => { console.log(data) })