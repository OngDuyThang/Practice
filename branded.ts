type Brand<T, B> = T & { __brand: B }

type UserId = Brand<string, 'UserId'>
type PostId = Brand<string, 'PostId'>

// EXAMPLE WITH TYPE PREDICATE SIGFNATURE
function getByUserId(val: UserId) {
    console.log(val)
}

function getByPostId(val: PostId) {
    console.log(val)
}

function transformToUserId(val: unknown): val is UserId {
    return (val as UserId).__brand === 'UserId'
    return true
}

function main() {
    const userId = '123456'
    if (transformToUserId(userId)) {
        getByUserId(userId)
        getByPostId(userId)
    } else {
        userId
    }
}
main()


// EXAMPLE WITH ASSERTION SIGFNATURE
function getByUserId2(val: UserId) {
    console.log(val)
}

function getByPostId2(val: PostId) {
    console.log(val)
}

function transformToUserId2(val: unknown): asserts val is UserId {
    return
    // return (val as UserId).__brand === 'UserId'
    // return true
}

function main2() {
    const userId = '123456'
    transformToUserId2(userId)

    userId
    getByUserId2(userId)
    getByPostId2(userId)
}
main2()