console.log("===>> javascript file is connected")

var fontSize = 16;

function decreaseFontSize() {
    if (fontSize > 8) {
        var allParas = document.getElementsByTagName("p")

        fontSize -= 2

        // allParas is an Array having different Paragraphs

        for (i = 0; i < allParas.length; i++) {
            allParas[i].style.fontSize = fontSize + "px"
        }
    }
}

function increaseFontSize() {
    console.log("Button clicked")
    if (fontSize < 30) {
        var allParas = document.getElementsByTagName("p")

        fontSize += 2;

        for (i = 0; i < allParas.length; i++) {
            allParas[i].style.fontSize = fontSize + "px"
        }
    }
}

function paraRed() {
    document.getElementById('para2').style.backgroundColor = "red"
    document.getElementById('para2').style.color = "white"
}

function ballBanJao() {
    document.getElementsByTagName('div')[0].style.borderRadius = "50%"
    document.getElementsByTagName('div')[0].style.transform = "translateX(100px)"

}

function foo() {
    alert("I am foo function")
}