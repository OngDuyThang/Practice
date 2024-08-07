var val = 'abc'

function func() {
    if (true) {
        var val2 = 'def' 
        var val2 = 'def' 
    }
    console.log(val2)
}

func()
console.log(val2)
