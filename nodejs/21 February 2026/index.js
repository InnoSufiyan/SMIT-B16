const express = require('express')

const app = express()

// app.get('/', (req, res) => {
//     console.log("Koi aya hai")
//     res.send("Welcome to our HomePage")
// })

// app.get('/about', (req, res) => {
//     console.log("koi about main aya hai")
//     res.send("Welcome to our About Page")
// })


app.get('/dahibaray', (req, res) => {
    if (true) {
        res.send("Yeh lo dost dahi baray")
    } else {

    }
})
app.get('/cholay', (req, res) => {
    res.send("Yeh lo dost cholay")
})
app.get('/panipuri', (req, res) => {
    res.send("Yeh lo dost pani puri")
})

// app.get('/choley/bagermasala')

// app.get('tezaab', () => {})


app.listen(5000, () => {
    console.log("Jee haan hamari website open hogai hai")
})