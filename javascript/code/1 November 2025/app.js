console.log("===>> javascript is running")

const totalDices = []

function foo() {
    let randomNumber = Math.ceil(Math.random() * 6)
    console.log(randomNumber) //6

    totalDices.push(randomNumber)

    if (totalDices.length == 3 && randomNumber == 6) {
        return alert("Aap k 3 sixes aagaey aur bari khatam")
    }

    if (randomNumber == 6) {
        foo()
    }
}

foo()

console.log(totalDices)