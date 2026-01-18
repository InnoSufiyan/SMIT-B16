console.log("==>> javascript is running")

// const hackathonResult = new Promise((resolve, reject) => {
//     const aNumber = Math.random()
//     console.log(aNumber, "==>> aNumber")
//     console.log("==========>> in pending state")
//     setTimeout(function () {
//         if (aNumber > 0.5) {
//             resolve("==>> janiiiiiiiiiiiiiiii")
//         } else {
//             reject("==>>> ahmed")
//         }
//     }, 3000)
// })

// hackathonResult.then(res => console.log(res)).catch(err => console.log(err))


const test = new Promise((resolve, reject) => {
    reject("Janiiiiiiiiiiiii")
});

// console.log(test, "==>> pending")

// test.then((result) => {
//     console.log(result)
//     return new Promise((resolve, reject) => {
//         resolve("Shoaib Janiiiiiiiii")
//     })
// }).then((result) => {
//     console.log(result, "===>>> result")
// })

// IIFE -> Immediately Invoke Function Expression

(async () => {
    try {
        const res = await test

        console.log(res, "===>> res")
    } catch (error) {
        console.log(error, "==>>> error")
    }
})()

// document.querySelector('h1').addEventListener('click', () => {
//     console.log("==>> kaam karo")
// })