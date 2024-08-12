abstract class Person {
    public abstract name: string
    public abstract age: number

    abstract doEat(): void
    abstract doSleep(): void
}

class Student extends Person {
    public constructor(
        // private name: string => ERROR
        public name: string,
        public age: number
    ) {
        super()
    }

    public doEat() {
        console.log('student do eat\n')
    }

    public doLearn() {
        console.log('student do learn\n')
    }

    public doSleep() {
        console.log('student do sleep\n')
    }
}

class Teacher extends Person {
    public constructor(
        public name: string,
        public age: number
    ) {
        super()
    }

    public doEat() {
        console.log('teacher do eat\n')
    }

    public doTeach() {
        console.log('teacher do teach\n')
    }

    public doSleep() {
        console.log('teacher do sleep\n')
    }
}

class FacadePattern {
    public constructor(
        public student: Student = new Student('student name', 17),
        public teacher: Teacher = new Teacher('teacher name', 30)
    ) {}

    public dailyActivity() {
        this.student.doEat()
        this.student.doLearn()
        this.student.doSleep()

        this.teacher.doEat()
        this.teacher.doTeach()
        this.teacher.doSleep()
    }
}

const facade = new FacadePattern()
facade.dailyActivity()

export {}