let students = ["Tarun", "Ajay", "Yasir", "Shrey", "Rohit", "Rahul", "Yash"]
// console.log(students.length)
// console.log(students[0])
// students.push("Shrey")
// students.pop()
// students.unshift("Shrey")
// students.shift()

// let sliceArray = students.slice(1,4)
// let spliceArray = students.splice(1,4, "Falana", "Dhimkana")

// console.log(sliceArray)
// console.log(spliceArray)
// console.log(students)


// for(let i = 0; i<students.length; i++){
//     console.log(students[i])
// }

// for...in
// for(i in students){
//     console.log(students[i])
// }


let randomArray = [3, 4, 5, 6, 9, 10, 11, 13, 16, 18]
// Map : Iterates through each and every elements and performs the given operation on it
let mappedArray = randomArray.map((value) => {
    // console.log(value * 2)
    return value * 2
})
// console.log(mappedArray)
let filterArray = randomArray.filter((value) => {
    // if(value % 2 == 0) console.log(value)
    return value % 2 == 0
})
// console.log(filterArray)


let arr = [1,2,3,4,5]
let reducedValue = arr.reduce((acc, curr) => {
    return acc * curr
}, 0)
// console.log(reducedValue)

// acc - 0, 1, 3, 6, 10, 15
// curr - 1, 2, 3, 4, 5

let chainedValue = randomArray.map((value) => {
    return value * 3
}).filter((value) => {
    return value % 2 == 0
}).reduce((acc, curr) => {
    return acc + curr
}, 0)

// console.log(chainedValue)

// 9. Find long words

let animals = ["Dog", "Cat", "Girrafe", "Elephant", "Panda", "Anaconda"]

let bigAnimal = animals.filter((value) => {
    return value.length > 5
})
console.log(bigAnimal)