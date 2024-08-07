interface myInterface_1 {
    id: number,
    func(): string
}

interface myInterface_2 extends myInterface_1 {
    name: string
}

const test: myInterface_2 = {
    id: 1,
    func() { return "foo" },
    name: "foo",
}

console.log(test)

export { }