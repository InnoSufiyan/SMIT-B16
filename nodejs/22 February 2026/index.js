const express = require('express')
var cors = require('cors')
const morgan = require('morgan')
// const dotenv = require('dotenv').config
const dotenv = require('dotenv')

// dotenv()
// dotenv.config({
//     path: 'testing.env'
// })

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use(morgan('tiny'))

// app.use((req, res, next) => {
//     console.log("Mera pehla middleware chala")
//     req.requestTime = new Date()
//     // next()
// })
// app.use((req, res, next) => {
//     console.log("Mera pehla middleware chala2")
//     next()
// })

app.get('/furqan', (req, res) => {
    res.status(400).send("Kuch bhi")
})

app.get('/users', (req, res, next) => {
    res.json(
        {
            status: true,
            data: [
                { name: "Talha Mohsin" },
                { name: "Ahmed Mohsin" }
            ],
            time: req.requestTime
        }
    )
})
app.post('/users', (req, res) => {
    res.json({
        status: true,
        message: "User added successfully"
    })
})
app.put('/users', (req, res) => {
    res.json({
        status: true,
        message: "User updated successfully"
    })
})
app.patch('/users', (req, res) => {
    res.json({
        status: true,
        message: "User field updated successfully"
    })
})
app.delete('/users', (req, res) => {
    res.json({
        status: true,
        message: "User deleted successfully"
    })
})

console.log(process.env.HASSAN)

app.listen(process.env.PORT, () => {
    console.log('Server is running on the port of ' + process.env.PORT)
})