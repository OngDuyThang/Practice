abstract class Base {
    abstract a: number
    abstract b: string
}

class A extends Base {
    a: number
    b: string
    constructor() {
        super()
        this.a = 1
        this.b = 'A'
    }
}

class B extends Base {
    a: number
    b: string
    constructor() {
        super()
        this.a = 2
        this.b = 'B'
    }
}

class C {
    val: Base

    constructor(val: Base) {
        this.val = val
    }

    func() {
        console.log(this.val.a, this.val.b)
    }
}

const c = new C(new A())
c.func()