class MyClass {
  constructor() {
    this.val = "abc";
  }

  method1() {
    console.log(this.val);
  }

  method2() {
    function func3() {
      console.log(this.val);
    }
    func3.bind(this)();
  }
}

const inst = new MyClass();
inst.method2();

// fetch().then((data1) => {
//   fetch().then((data2) => {
//     fetch().then((data3) => {
//       fetch().then((data4) => {
//         fetch().then((data5) => {

//         })
//       })
//     })
//   })
// })

// const data1 = await fetch()
// const data2 = await fetch('', {data1})
// const data3 = await fetch('', {data2})
// const data4 = await fetch('', {data3})
// const data5 = await fetch('', {data4})

function func(...rest) {
  // console.log(val);
  console.log(rest);
  console.log([...arguments]);
}

func("abc", 1, 2, 3);

function func2() {
  console.log([...arguments]);
}

func2(...{ a: 1, b: 2, c: 3 }); // INVALID
