class PrototypePattern {
    constructor() {}
}

const a = new PrototypePattern()
const b = Object.create(a, { something: { value: 'abcdef' } })
console.log(a)
console.log(b.something)

export {}