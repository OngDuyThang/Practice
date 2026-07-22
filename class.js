class PrivateTest {
  #prop;
  #prop2 = 'def';
  constructor() {
    this.#prop = 'abc';
  }

  doSomething() {
    console.log(`#prop: ${this.#prop}, #prop2: ${this.#prop2}`, '\n');
  }
}

const val = new PrivateTest();
val.doSomething();
// val.#prop;

// child class does not have its own custom constructor
// so we don't have to define constructor and don't have to manually use super() for child class
// javascript will auto handle behind the scene: constructor(...args) { super(...args) }
class PrivateTest2 extends PrivateTest {}
const val2 = new PrivateTest2();
val2.doSomething();
// val2.#prop;
