// const a = { name: "a" };
// const b = Object.create(a);
// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(b));

function Func() {}
Func.prototype = { name: "ábc" };
console.log(new Func());
console.log(Object.getPrototypeOf(new Func()));
