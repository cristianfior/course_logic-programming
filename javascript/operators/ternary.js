/*
condition ? expression if condition true : expression if condition false
*/

// Challenge
const a = 8
const b = 2
const operation = '+'
const result = operation === '+' ? a + b : operation === '-' ? a - b : operation === '*' ? a * b : operation === '/' ? a / b : "-'-"

console.log(result)