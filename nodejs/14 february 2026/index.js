// const fs = require('fs')

// const myWelcomeText = fs.readFileSync('./welcome.txt', 'utf-8')

// console.log(myWelcomeText, "==> myWelcomeText")

// fs.writeFileSync('./welcome.txt', 'Allah Hafiz')

const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    console.log(req.url, "==>>> req")

    if(req.url == '/home') {
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.end('<img src="https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_2560%2Cc_limit/DSC_5903.jpg" />')
    } else if (req.url == '/about') {
        res.end('Aboutttttttttt Page')
    } else {
        res.end("Wrong page demanded")
    }


    // if (req.url.startsWith('/dahibaray')) {
    //     if (req.url.split('?')[1].split('=')[1] == 'true') {
    //         res.end("Yeh lo dost, aap k masalay waley dahi baray")
    //     } else {
    //         res.end("Yeh lo dost, aap k meethay waley dahi baray")
    //     }
    // } else if (req.url == "/cholay") {
    //     res.end("Yeh lo dost aap k cholay")
    // } else if (req.url == '/') {
    //     res.end('Kya khareedo gey???')
    // } else {
    //     res.end('Sorry dost, yeh available nahin hai')
    // }
})

server.listen(5000, '127.0.0.1', () => {
    console.log("==>>>> dukaan khul bhi gai hai")
})