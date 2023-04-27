// while(condition) {}
// Challenge WHILE
let value = 0

while(value < 5) {
    value++
}

console.log(value)

// for(variable;condition;step) {}
// Challenge FOR
for(let xmasTree = ''; xmasTree != '#######'; xmasTree += '#') {
    console.log(xmasTree)
}

// switch(condition) {case x: code break}
// Chalenge SWITCH
let grade = 1.5

switch(Math.ceil(grade)) {
    case 10: grade = 'A+'; break
    case 9: grade = 'A'; break
    case 8: grade = 'B+'; break
    case 7: grade = 'B'; break
    case 6: grade = 'C+'; break
    case 5: grade = 'C'; break
    case 4: grade = 'D+'; break
    case 3: grade = 'D'; break
    case 2: grade = 'E+'; break
    case 1: grade = 'E'; break
    case 0: grade = "F"; break
    default: grade = "-'-"
}

console.log(grade)