interface A {
    name: string
    id: number
    func: () => void
}

interface B extends A {
    func: () => number
}

const test: B = { name: '', id: 1, func: () => 2 }

export { }