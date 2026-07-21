// To bypass JavaScript and TypeScript's structural single-inheritance limitation, 
// use functional mixins (factory functions) to chain multiple class behaviors dynamically. 
// This pattern relies on a generic constructor type to accept a base class and return a newly extended class containing your shared features

// 1. Define a generic constructor type that accepts any class
type Constructor<T = {}> = new (...args: any[]) => T;

// 2. Create the first mixin function
function Jumpable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        jump() {
            return "Jumping high!";
        }
    };
}

// 3. Create the second mixin function
function Flyable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        fly() {
            return "Flying fast!";
        }
    };
}

// 4. Combine them with a basic standard parent class
class Character {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// 5. Compose the class to bypass the single-inheritance limit
class Superhero extends Flyable(Jumpable(Character)) {
    useSuperpowers() {
        return `${this.name} is ${this.jump()} and ${this.fly()}`;
    }
}

// Usage
const hero = new Superhero("Clark");
console.log(hero.useSuperpowers());
// Output: "Clark is Jumping high! and Flying fast!"

export {}