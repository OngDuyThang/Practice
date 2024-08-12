// 2 ways to create prototype of an object
// 1. Object.create
// 2. Prototype of constructor function

// create an object which has a prototype is a parameter
const a = { name: "a" };
const b = Object.create(a);
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(b));

// create prototype for a constructor function
// instances built from that constructor will have that prototype
function MyConstructor() {}

MyConstructor.prototype = { name: "abc" };
Object.assign(MyConstructor.prototype, { id: "def" });
Object.assign(MyConstructor.prototype, { doSomething() {} });

console.log(new MyConstructor());
console.log(Object.getPrototypeOf(new MyConstructor()));
console.log(new MyConstructor().name, new MyConstructor().id);

// CREATE DUPLICATE METHOD doSomething FOR EACH INSTANCE
// function Person(name) {
//   this.fullname = name;
//   this.doSomething = function () {
//     console.log("person do something");
//   };
// }

// const person = new Person("person name");
// person.doSomething();
function Person(name) {
  this.fullname = name;
}

Person.prototype.doSomething = function () {
  console.log("person do something");
};

const person = new Person("person name");
person.doSomething();

function Student(name) {
  Person.call(this, name); // super()
}

Student.prototype = Object.create(Person.prototype, {
  constructor: {
    value: Student,
    enumerable: false,
    writable: true,
    configurable: true,
  },
  // __proto__
});

Object.assign(Student.prototype, {
  learn() {
    console.log("student do learn");
  },
  doSomething() {
    console.log("person do something from student");
  },
});

function Teacher(name) {
  Person.call(this, name); // super()
}

Object.assign(Teacher.prototype, {
  teach() {
    console.log("teacher do teach");
  },
});

const student = new Student("student name");
const teacher = new Teacher("teacher name");

student.learn();
student.doSomething();
teacher.teach();
