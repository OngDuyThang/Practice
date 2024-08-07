Promise.timeout = (miliseconds) => {
    return new Promise(res => {
        setTimeout(() => {
            res('ok')
        }, miliseconds)
    })
}

Promise.timeout(1000).then((data) => { console.log(data) })