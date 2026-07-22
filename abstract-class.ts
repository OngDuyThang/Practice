// NOTES: can not use abstract on private properties/methods
// because abstract force child class to implement, while private prevent child class to access
abstract class A {
    protected static readonly val1: number = 1 // static property should ALWAYS placed outside constructor
    protected abstract readonly val2: number // either static or abstract, can not use them together

    constructor(
        public readonly val3: number
    ) {}

    protected abstract doSomething(): void
    doSomething2() {
        console.log('A')
    }
}
class B extends A {
    protected readonly val2 = 2
    doSomething() {
        console.log('B')
    }
    doSomething2() {
        console.log('B')
    }
    doSomething3() {
        console.log(B.val1)
    }
}
class C extends A {
    protected readonly val2 = 2
    public constructor(
        // inherit val3 from A, only use pass value like normal constructor here
        // if use encapsulation or readonly here it will create new duplicated val3
        val3: number,
        public readonly val4: number
    ) {
        super(val3)
    }
    doSomething() {
        console.log('C')
    }
}
class D extends A {
    protected readonly val2 = 2
    private constructor( // similar to class C, but demo private constructor
        val3: number,
        public readonly val4: number
    ) {
        super(val3)
    }
    doSomething() {
        console.log('D')
    }
}

new B()
new C(3, 4)
new D(3, 4)

export {}