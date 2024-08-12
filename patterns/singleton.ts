class SingletonPattern {
    private static instance: SingletonPattern

    private constructor() {}

    static getInstance() {
        if (!SingletonPattern.instance) {
            SingletonPattern.instance = new SingletonPattern()
            return SingletonPattern.instance
        }

        return SingletonPattern.instance
    }
}

const val = SingletonPattern.getInstance()
console.log(val)


export {}