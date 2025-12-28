console.log("==>> javascript working")

const pia = {
    airline: "PIA",
    planes: 300,
    buyPlane() {
        this.planes++
        console.log(this.planes)
    }
}

document.querySelector('button').addEventListener('click', function() {
    console.log(this.parentElement.parentElement.parentElement)
})