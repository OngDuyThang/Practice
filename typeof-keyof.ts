const MyObject = {
    A: 1,
    B: '',
    C: true
}

type MyType1 = typeof MyObject
type MyType2 = keyof typeof MyObject
type MyType3 = typeof MyObject[keyof typeof MyObject]
function func<T extends MyType2>(a: T) {}

type MyType = {
    A: number,
    B: string,
    C: never
}
type TypeAfterRemoveNever = MyType[keyof MyType]

enum MyEnum {
    A = 1,
    B = 2,
    C = 3
}

type MyType4 = typeof MyEnum
type MyType5 = keyof typeof MyEnum
type MyType6 = typeof MyEnum[keyof typeof MyEnum]

const val: MyType6 = 1

export {}