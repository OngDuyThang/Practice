const func = <T>(value: T) => {
    console.log(typeof value)
}

const a: number[] = [1, 2, 3]
const b: string[] = ['a', 'b']
func(a)
func(b)

const input = document.querySelector<HTMLInputElement>('.input')
input?.value

export { }