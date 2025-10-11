console.log("JavaScript is running")

// const students = [
//     {
//         name: "Ahmed Raza",
//         campus: "Bahadurabad",
//         course: "Web n app"
//     },
//     {
//         name: "Abdul Basit",
//         campus: "Zaitoon Ashraf",
//         course: "Web n app"
//     },
//     {
//         name: "Muhammad Junaid",
//         campus: "Numaish",
//         course: "Web n app"
//     }
// ]

// const bahadurabadWaleyStudents = students.filter(function (std) {
//     std.campus === "Bahadurabad"
// })

// var kuchBhi = students.forEach(function (std) {
//     console.log(std.name.toUpperCase(), "===>> std")
//     console.log(std.name.toUpperCase().length, "===>> length")
//     return std.name.toUpperCase()
// })

// var kuchBhi = students.map(function (std) {
//     console.log(std, "==>>> std")
//     return `<h1 style="background-color: black; color: white">${std.name}</h1>`
// })

// // console.log(kuchBhi.join())

// document.body.innerHTML = kuchBhi.join('')


// const resturantMenu = [
//     { name: "Biryani", price: 250 },
//     { name: "Korma", price: 350 },
//     { name: "Tikka", price: 450 },
//     { name: "Chinese", price: 450 }
// ]

// repeatative elements removed
// bring repeatative elements
const arr = ["salman", "ahmed", "salman", "ahmed", "sufiyan", "ahmed"]

const uniqueNames = {}

arr.forEach(function (name, i) {

    if (uniqueNames.hasOwnProperty(name)) {
        console.log("==>> property available hai")
        uniqueNames[name] += 1
    } else {
        uniqueNames[name] = 1
        console.log("==>> property available nai hai")
    }



    // console.log(uniqueNames, "==>> uniqueNames")
    // if (uniqueNames.includes(name)) {
    //     uniqueNames[i].count += 1
    // } else {
    //     uniqueNames.push({
    //         name: name,
    //         count: 0
    //     })
    // }
})







