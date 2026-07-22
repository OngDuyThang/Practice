const original = {
    name: 'this is original',
    obj: {
        key: 'this is from original'
    }
}

// ================SHALLOW COPY======================

// spread operator
const spread = { ...original }
spread.obj.key = 'this is from spread operator'

console.log(original, '\n')
original.obj.key = 'this is from original'

// Object.assign
const assign = Object.assign({}, original)
assign.obj.key = 'this is from Object.assign'

console.log(original, '\n')
original.obj.key = 'this is from original'

// ================DEEP COPY======================

// JSON parse string
const parse = JSON.parse(JSON.stringify(original))
parse.obj.key = 'this is from JSON.parse'
console.log(original, '\n')

// structure clone
const structure = structuredClone(original)
structure.obj.key = 'this is from structuredClone'
console.log(original, '\n')

// ================PROTOTYPE INHERIT======================

// Object.create
const create = Object.create(original)
console.log(create.__proto__, '\n')
create.obj.key = 'this is from Object.create'

console.log(original, '\n')
original.obj.key = 'this is from original'
