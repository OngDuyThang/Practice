// type predicate signature

// nếu điều kiện đúng => val sẽ bị biến đổi type sang string (compile time)
function isString(val: any): val is string {
    return typeof val === "string";
}

function example(foo: any) {
    if (isString(foo)) {
        console.log(typeof foo);
        console.log(foo.length);
    }
}
example("hello world");