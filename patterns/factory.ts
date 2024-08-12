abstract class Person {
    public abstract name: string
    public abstract age: number

    public abstract doSomething(): void
}

class Student extends Person {
    public constructor(
        // private name: string => ERROR
        public name: string,
        public age: number
    ) {
        super()
    }

    public doSomething() {
        console.log('student do learn')
    }
}

class Teacher extends Person {
    public constructor(
        public name: string,
        public age: number
    ) {
        super()
    }

    public doSomething() {
        console.log('teacher do teach')
    }
}

class FactoryPattern {
    static createPerson(name: string, age: number) {
        if (age < 18) {
            return new Student(name, age)
        } else {
            return new Teacher(name, age)
        }
    }
}

const person1 = FactoryPattern.createPerson('person name', 17)
person1.doSomething()

const person2 = FactoryPattern.createPerson('person name', 20)
person2.doSomething()


export {}