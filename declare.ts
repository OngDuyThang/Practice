declare const val: string

declare function func(): void

declare class A {
    name: string
    id: number
    func: () => void
}

declare module 'my-module' {
    export function func(): void
}

declare global {
    interface Window {
        myCustomProperty: string;
    }

    interface PromiseConstructor {
        customProperty: string;
    }
}

let a: Window
a.myCustomProperty = 'hello'

Promise.customProperty = 'hello'

export {}