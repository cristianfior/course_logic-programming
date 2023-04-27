// with param and return
function fnWithParamWithReturn(a, b) {
    return a + b
}
console.log(fnWithParamWithReturn(1, 2))

// with param, without return
function fnWithParamWithoutReturn(a, b) {
    console.log(a - b)
}
func2(3, 1)

// without param, with return
let a_return = 'no param'
function fnWithoutParamWithReturn() {
    return a_return
}
console.log(fnWithoutParamWithReturn())

// without param, without return
function fnWithoutParamWithoutReturn() {
    console.log(a_return)
}
fnWithoutParamWithoutReturn()



// Challenge FUNCTION without RETURN
let first_value = 3
let second_value = 2
let operation = '+'

function calculate(value1, operation, value2) {
    operation === '+' ? console.log(value1 + value2) : console.log(value1 - value2)
}

calculate(first_value, operation, second_value)


// Challenge FUNCTION with RETURN
function classSituation(grade) {
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
    return grade
}

console.log(`Grade: ${classSituation(9)}`)


// Challenge2 FUNCTION with RETURN
const grade1 = 7.8
const grade2 = 3.1
const grade3 = 6.7

function smallestGrade(v1, v2) {
    return v1 <= v2 ? v1 : v2
}

function gradeSum(g1, g2, g3) {
    return (g1 + g2 + g3) - smallestGrade(g1, smallestGrade(g2, g3))
}

function gradeAverage(g1, g2, g3) {
    return gradeSum(g1, g2, g3) / 2
}

function gradeStatus(g1, g2, g3) {
    let studentStatus = gradeAverage(g1, g2, g3)
    switch(Math.ceil(studentStatus)) {
        case 10: case 9: classtudentStatusSituation = 'Approved with honorship'; break
        case 8: case 7: case 6: studentStatus = 'Approved'; break
        case 5: case 4: case 3: studentStatus = 'Retake'; break
        case 2: case 1: case 0: studentStatus = "Disapproved"; break
        default: studentStatus = "You're fucked up!"
    }
    return studentStatus
}

console.log(`The student grade status is: ${gradeStatus(grade1, grade2, grade3)}`)