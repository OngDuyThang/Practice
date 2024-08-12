class BuilderPattern {
    // IF NOT INSTANTIATE THROUGH CONSTRUCTOR => MUST HAVE INITIALIZE VALUE FIRST
    // OR OPTIONAL

    // public fullName?: string
    // public age?: number = 0
    // public address?: string
    // public id?: number
    // public email?: string
    // public phone?: string

    public constructor(
        // MORE DYNAMIC APPROACH
        public fullName?: string,
        public age?: number,
        public address?: string,
        public id?: number,
        public email?: string,
        public phone?: string
    ) {}

    public addName(name: string) {
        this.fullName = name
        return this
    }

    public addAge(age: number) {
        this.age = age
        return this
    }

    public addAddress(address: string) {
        this.address = address
        return this
    }

    public addId(id: number) {
        this.id = id
        return this
    }

    private _privateValue: string = 'private value'

    public get privateValue(): string {
        return this._privateValue
    }

    public set privateValue(value: string) {
        this._privateValue = value
    }
}

const val = new BuilderPattern()
    .addName('abc')
    .addAge(10)
    .addAddress('abc')
    .addId(10)

console.log(val)
console.log(val.privateValue)

export {}
