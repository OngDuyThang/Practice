function AddNewPropertyDecorator(newVal: string) {
    function decorator<T extends new (...args: any[]) => ({})>(target: T) {
        return class extends target {
            public newVal: string
            constructor(...args: any[]) {
                super(...args)
                this.newVal = newVal
            }
        }
    }
    return decorator
}

@AddNewPropertyDecorator('new property')
class Person {
    public static readonly id = 1
    public constructor(
        public name: string,
        public age: number
    ) {}
}

const person = new Person('person name', 17)
console.log(person)

export {}

// @SomeDecorator ==> INVALID USE
// function doSomething() {
//     console.log('do something')
// } 