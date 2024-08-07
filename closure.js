function wrapper() {
    let count = 0 // private variable
    return () => {
        count += 1
        console.log(count)
    }
}

const run = wrapper()
run()
run()
run()
run()
run()