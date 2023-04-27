// attribute a function to a var/let/const
let x
let y = 2
const sum = function(v1 = 1, v2 = 1) {
    return v1 + v2
}
console.log(sum(x, y))

// function as a param
function execute(fn, n1, n2) {
    if(typeof fn === 'function') {
        console.log(fn(n1, n2))
    }
}

function subtract(va1, va2) {
    return va1 - va2
}

execute(subtract()) // will not execute, because the function is already invoked
execute(subtract, 3, 2)

// function as a return
function returnAFunction() {
    function fnAsReturn() {
        return "OHAYO!"
    }

    return fnAsReturn
}

console.log(returnAFunction()) // will not call the function, cause we dont invoked it
console.log(returnAFunction()()) // this will work
let a_function = returnAFunction()
console.log(a_function()) // will work too

// anonymous function as return
function returnAFunction2() {
    return function () {
        return function() {
            return "in pizza we believe!"
        }
    }
}

console.log(returnAFunction2())
console.log(returnAFunction2()())
console.log(returnAFunction2()()())

// currying
function add(a) {
    return function (b) {
        return a + b
    }
}

console.log(add(1)(2))

const add10 = add(10)
console.log(add10(5))