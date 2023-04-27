// without function
const day1 = 1
const month1 = 1
const year1 = 2001
const day2 = 2
const month2 = 2
const year2 = 2002

console.log(`Day: ${day1}`)
console.log(`Month: ${month1}`)
console.log(`Year: ${year1}`)
console.log(`Day: ${day2}`)
console.log(`Month: ${month2}`)
console.log(`Year: ${year2}\n`)



// with function
function showDate(day, month, year) {
    console.log(`Date: ${day}/${month}/${year}`)
}
showDate(day1, month1, year1)
showDate(day2, month2, year2)