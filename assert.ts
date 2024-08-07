// assert signature

// không cần return boolean như type predicate => return void hoặc undefined
// biến đổi val sang 1 type khác mà không cần check return boolean giống type predicate
function assertIsString(val: any): asserts val is string {
    if (typeof val !== "string") {
        throw new Error("Not a string!");
    }
}