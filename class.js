class PrivateTest {
  #prop;
  #prop2;
  constructor() {
    this.#prop = "abc";
  }

  doSomething() {
    console.log(this.#prop);
  }
}

const val = new PrivateTest();
val.doSomething();
val.#prop;

class PrivateTest2 extends PrivateTest {}

const val2 = new PrivateTest2();
val2.#prop;
