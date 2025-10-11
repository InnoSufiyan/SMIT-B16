// const arr = [1, 2, 3, 4, 5].map(function (item) {
//    return 0
// })

// console.log(arr)

// truthy values -> true , "a", 1, []
// falsy values -> false, "", 0, undefined, null,



// const resturantMenu = [
//     {name: "Biryani", price: 250},
//     {name: "Korma", price: 350},
//     {name: "Karahi", price: 450},
//     {name: "Tikka", price: 550},
//     {name: "Chinese", price: 650}
// ]

// const marziKItems = resturantMenu.filter(function(foodItem) {
//     if(foodItem.price > 400 && foodItem.price < 600) {
//         return 1
//     }
// }).map(function(foodItem) {
//     return foodItem.name + " with cold drink"
// })
// console.log(marziKItems, "==>> marzi k items")


// const resturantMenu = [
//     { name: "Biryani", price: 250 },
//     { name: "Korma", price: 350 },
//     { name: "Karahi", price: 450 },
//     { name: "Tikka", price: 550 },
//     { name: "Chinese", price: 650 },
//     { name: "Khichri", price: 1050 },
// ]

// const foodStartingWithK = resturantMenu.filter(function (food) {
//     if (food.name.startsWith('K')) {
//         return true
//     }
// }).map(function (foodItem) {
//     return `<h1 style="background-color: black; color: white">${foodItem.name} is of price ${foodItem.price}</h1>`
// })

// console.log(foodStartingWithK.join(''))

// document.body.innerHTML = foodStartingWithK.join('')

const stdArr = [
    {
        id: 1,
        name: "Ali Raza",
        score: 83,
        favouriteSubject: "kuchBhi"
    },
    {
        id: 2,
        name: "Hasan",
        score: 83,
        favouriteSubject: "Islamiat"
    },
    {
        id: 3,
        name: "Inayat",
        score: 90,
        favouriteSubject: "History"
    },
    {
        id: 4,
        name: "Hasaan Aijaz",
        score: 77,
        favouriteSubject: "Maths"
    },
    {
        id: 5,
        name: "Naseem Ahmed",
        score: 93,
        favouriteSubject: "K-Electric"
    }
]

// const updatedStudents = stdArr.map(function (std) {
//     // std.role = "Student" //dot notation
//     console.log(std)
//     // std['role'] = "Student" //bracket notation

//     return {
//         ...std,              //name, id, score, favouritesubject
//         role: "Student",
//         teacher: "Sufiyan",
//         campus: "Bahadurabad"
//     }
// })

// console.log(updatedStudents)

// const filteredStds = stdArr.filter(function (std) {
//     if (std.score > 85) return true
// })

// console.log(filteredStds)


var specificStdById = stdArr.find(function (std) {
    if (std.id == 5) {
        return true
    }
})

console.log(specificStdById)




