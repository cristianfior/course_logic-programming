// if(condition), if condition true the code will be executed, if condition false the code will not be executed
// Challenge IF
let grade = 9.8

if(grade >= 9 && grade <= 10)
    grade = 'A'
if(grade >= 7 && grade <= 8.9)
    grade = 'B'
if(grade >= 5 && grade <= 6.9)
    grade = 'C'
if(grade >= 4.5 && grade <= 4.9)
    grade = 'D'
if(grade < 4.5)
    grade = 'F'

console.log(grade)

// if(condition) else
// Challenge IF ELSE
const a = 10
const b = 28
const operation = '+'
let result

if(operation === '+') {
    result = a + b
} else if(operation === '-') {
    result = a - b
} else if(operation === '*') {
    result = a * b
} else if(operation === '/') {
    result = a / b
} else if(operation === '%') {
    result = a % b
} else {
    result = "-'-"
}

console.log(result)