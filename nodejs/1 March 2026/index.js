const express = require('express')

const app = express()

app.use(express.json())

let users = []

app.get('/users', (req, res) => {
    res.json({
        status: true,
        message: "All Users Data",
        data: users
    })
})

app.get('/users/:username', (req, res) => {
    // console.log(req.params.username)
    const { username } = req.params
    res.json({
        status: true,
        message: "Single User Data",
        data: users.filter((user) => user.username == username)
    })
})

app.put('/users/:username', (req, res) => {
    const { username } = req.params

    users = users.map((user) => {
        if (user.username == username) {
            user = req.body
            return user
        }
        return user
    })

    res.json({
        status: true,
        message: "Update User Data Successfully"
    })
})

app.delete('/users/:username', (req, res) => {
    const { username } = req.params

    users = users.filter((user) => {
        return user.username != username
    })

    res.json({
        status: true,
        message: "Deleted User Data Successfully"
    })
})

app.post('/users', (req, res) => {
    console.log("==>> post ki request hit huwi")
    const data = req.body
    console.log("==>>> data mila mujhey aur ab push karwaounga")
    users.push(data)
    console.log("==>> data pushed, now responding")
    res.json({
        status: true,
        message: "User added successfullyF"
    })
})

app.listen(5000, () => {
    console.log('Server is running')
})