abstract class A {
    abstract doSomething(): void
    doSomething2() {
        console.log('A')
    }
}

class B extends A {
    doSomething() {
        console.log('B')
    }
    doSomething2() {
        console.log('B')
    }
}
class C extends A {
    doSomething() {
        console.log('C')
    }
}

function func(someClass: A) {
    someClass.doSomething2()
}

func(new B())