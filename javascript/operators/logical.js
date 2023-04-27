/*
&& : and
| condition1 | condition2 | result |
| ---------- | ---------- | ------ |
|      T     |     T      |    T   |
|      T     |     F      |    F   |
|      F     |     T      |    F   |
|      F     |     F      |    F   |
---
|| : or
| condition1 | condition2 | result |
| ---------- | ---------- | ------ |
|      T     |     T      |    T   |
|      T     |     F      |    T   |
|      F     |     T      |    T   |
|      F     |     F      |    F   |
---
!= : xor, exclusive or
| condition1 | condition2 | result |
| ---------- | ---------- | ------ |
|      T     |     T      |    F   |
|      T     |     F      |    T   |
|      F     |     T      |    T   |
|      F     |     F      |    F   |
*/

// Challenge: 2 true expessions (arithmetics/relationals/logical) and 2 false expessions (arithmetics/relationals/logical)
//true
let firstTrue = 1 + 1 && 1 > 0
let secondTrue = "7" !== 7 || "7" == 7 

console.log(firstTrue)
console.log(secondTrue)
// false
let firstFalse = 1 >= 7 && "1" === 1
let secondFalse = 3 % 2 == 0 || 0 / 1 > 1

console.log(firstFalse)
console.log(secondFalse)