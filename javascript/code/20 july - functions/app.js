// Functions -->>>> mechanism -->>> invoke / call -->> execution implemented


// () ---->>> are called as parenthesis

// var name = 'sufiyan'

// function glass(flavour) {                    //in parameter , argument will be received
// 	console.log("my function")
// 	var abc = 2
// 	var xyz = 2
// 	alert(abc + xyz)
// 	console.log(flavor + abc + xyz)       'karahi' + 2 + 2 -->> 'karahi' + 2 -> karahi22
// }

// glass(name)        -->> invoke / call   --->> we can give any function argument

// function hello() {
//     return "sufiyan"
//     console.log("adasdad")
//     2 + 2
// }

// hello()


// var a = hello()
// var b = hello()
// var c = hello()



function calculateTotal(subTotal, tax) {
    return subTotal + tax
}

// console.log(calculateTotal)

var order1 = calculateTotal(15, 20)
var order2 = calculateTotal(25, 20)
var order3 = calculateTotal(35, 20)

// console.log(order1, order2, order3)


var userOrder1 = +prompt("kitney ka samaan khareeda ???")
var myShopTax = 500

alert(calculateTotal(userOrder1, myShopTax))











