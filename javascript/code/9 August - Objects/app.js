const car = {
    make: "Suzuki",
    year: 2016,
    model: "XLI",
    colors: ["Red", "Blue", "Green"],
    hybrid: false,
    drive: function () {
        console.log("Gaari chal rahi hai")
    },
    stop: function () {
        console.log("Gaari ruk rahi hai")
    }
}

console.log(car.make)
// console.log(car['colors'][2])
console.log(car.colors[0])
car.drive()
car.stop()