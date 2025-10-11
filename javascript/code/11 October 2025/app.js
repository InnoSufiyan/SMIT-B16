// console.log("==>> javascript is running")

// const arr = [
//     { name: "biryani", price: 200 },
//     { name: "korma", price: 150 },
//     { name: "karahi", price: 260 },
//     { name: "tikka", price: 170 },
//     { name: "chinese", price: 99 },
//     { name: "kabab", price: 500 },
// ]
// //1st     2nd         610  +   260     
// const total = arr.reduce(function (totalOfAllCalculation, elem, idxNum, arr) {
//     console.log(arr)
//     console.log(totalOfAllCalculation)   //acc
//     return totalOfAllCalculation - elem.price
//     // return "Farhan"
// }, -5000)


const stdsArr = [
    {
        id: 1,
        name: "a",
        score: 80,
        fvrtSbj: 'English'
    },
    {
        id: 2,
        name: "b",
        score: 70,
    },
    {
        id: 3,
        name: "c",
        score: 99,
        fvrtSbj: 'Maths'
    },
    {
        id: 4,
        name: "d",
        score: 90,
        fvrtSbj: 'English'
    },
    {
        id: 5,
        name: "e",
        score: 70,
        fvrtSbj: 'Maths'
    }
]

const survey = stdsArr.reduce(function (acc, std, i, arr) {
    console.log(acc[std.fvrtSbj])
    acc[std.fvrtSbj] = (acc[std.fvrtSbj] || 0) + 1
    return acc
}, {})        //0

console.log(survey)

// ||
// {
//     english:1,
//     history: 1,
//     match: 3
// }















// const totalScore = stdsArr.reduce(function (acc, crntStd, idxNum, arr) {
//     return acc + crntStd.score
// }, 0)

// console.log(totalScore, "===>> totalScore")

// const averageScore = totalScore / stdsArr.length

// console.log(averageScore, "=>> averageScore")








// Create a function, to whom we will give any number and it will return as the number in wordings  -->> max range 999999


foo(99)      //Ninty Nine

foo(7757)  // seven thousand seven hundred and fifty seven

foo(1) // one

foo(102397) // one lac two thousand three hundred and ninty seven















