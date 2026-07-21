class A {
    func1() {
        function temp() {
            console.log('Traditional function have this, but the this does not have bind value yet', this)
        }
        temp()
    }
    func2() {
        const temp = () => {
            console.log('Arrow function does not have this, so it capture the nearest this from upper scope', this)
        }
        temp()
    }
    func3() {
        function temp() {
            console.log('Traditional function have this, but the this does not have bind value yet, so must use function.bind() to assign the value for the this', this)
        }
        temp.bind(this)()
    }
}
const a = new A()
a.func1()
a.func2()
a.func3()