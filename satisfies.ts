type A = { something: number }
type B = A | string

const val1 = 'abcdef' satisfies B
const val2 = { something: 2 } satisfies B

type Picture = string | {
    width: number,
    height: number,
    title: string,
    url: string
}

interface User {
    name: string,
    email: string,
    picture: Picture
}

const user = {
    name: 'some name',
    email: 'some email',
    picture: {
        width: 100,
        height: 100,
        title: 'some title',
        url: 'some url'
    }
} satisfies User

export {}