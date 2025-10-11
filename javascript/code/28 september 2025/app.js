console.log("=>> javascript running")

// // function foo() {     //callback
// //     console.log("==>> foo chal gaya")
// // }

// // function foo2(num1) { //higher order function
// //     // console.log("===>> ", num1())

// //     function ahmedRaza(sufiyan) { //num1
// //         sufiyan()
// //     }

// //     ahmedRaza(num1)
// // }

// // foo2(foo)   

// function foo() {
//     console.log("Salaam")
//     return "sufiyan"
// }

// function foo2(cb) {
//     console.log("AllAH Hafiz")
//     const myValue = cb()
//     console.log(myValue, "Value aagai")
// }

// foo2(foo)

// function foo(naam) {
//     return naam.toUpperCase()
// }


// function foo2(name, callBack) {
//     console.log(`${callBack(name)}, " this is my name"`)
// }

// foo2("sufiyan", foo)
// // foo2("jaffar")

function makeLettersCorrect(firstName, lastName) {
    return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + " " + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()
}

function welcomePage(firstName, lastName, cb) {
    console.log(`Hi, Mr ${cb(firstName, lastName)} Welcome to our HiringMine`)
}

welcomePage("aHmeD", "rAzA", makeLettersCorrect)