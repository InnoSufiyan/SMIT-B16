console.log("==>> javascript is running")

fetch('http://localhost:5000/iftarmenu')
    .then((result) => {
        return result.json()
    })
    .then((result) => {
        console.log(result)
    })