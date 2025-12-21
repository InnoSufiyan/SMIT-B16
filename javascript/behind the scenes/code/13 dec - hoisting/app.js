// var name = "Naseem"

// function foo() {
//     console.log(this.name)
//     return "Salaam"
// }

// foo()

// const obj = {
//     name: "ahmed raza",
//     func: foo()
// }

// console.log(obj.func(), "==>> obj")

const stu1 = {
    name: "talha",
    father: "mohsin"
}

const stu2 = {
    ...stu1,
    name: "ahmed"
}

console.log(stu2, "===>> stu2")

// const stu2 = Object.assign({campus: "bahadurabad"}, stu1)

// // stu2.name = "ahmed"

// console.log(stu2)

