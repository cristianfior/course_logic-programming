let grades = [7.5, 6.7, 9.1]

// forof to access values
for(let grade of grades) {
    console.log(grade)
}

// forin to access index
for(let index in grades) {
    console.log(index)
}

// foreach needs a param
function fnForEachElement(element, index, array) {
    console.log(`element: ${element}, index: ${index}, array: ${array}`)
}
grades.forEach(fnForEachElement)

grades.forEach(function(element, index, array) {
    console.log(array)
})


// Challenge
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = values.length - 2; i >= 0; i -= 2) {
    console.log(values[i])
}

