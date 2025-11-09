const colorArr = ["red", "pink", "blue", "yellow", "green", "purple", "black", "orange", "grey"]

// let idx = 0

// document.querySelector('span').innerText = colorArr[idx]
// document.body.style.backgroundColor = colorArr[idx]

var previousVal;


function changeColor() {
    let sharartiBacha;

    function randomize() {
        sharartiBacha = Math.floor(Math.random() * colorArr.length) // 7
                // 7           7
        if (sharartiBacha == previousVal) {
            randomize()
        }
    }

    randomize()

    console.log(sharartiBacha, "===>> sharartiBacha")

    document.querySelector('span').innerText = colorArr[sharartiBacha]
    document.body.style.backgroundColor = colorArr[sharartiBacha]

    previousVal = sharartiBacha
}