// PROXY
const target = {
  message: "Hello, world!",
};

const handler = {
  get: (obj, prop) => {
    return prop in obj ? obj[prop] : "Property does not exist";
  },
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // Output: Hello, world!
console.log(proxy.nonExistentProperty); // Output: Property does not exist

// REFLECT
const target2 = {
  message: "Hello, world!",
};

const handler2 = {
  set: (obj, prop, value) => {
    if (prop === "message" && typeof value !== "string") {
      console.log("Message must be a string");
      return;
    }
    return Reflect.set(obj, prop, value);
  },
};

const proxy2 = new Proxy(target2, handler2);
proxy2.message = "Hi!"; // Works
console.log(proxy2.message);

proxy2.message = 42; // Throws Error: Message must be a string
