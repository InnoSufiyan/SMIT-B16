// var mobileShop = ['samsung', 'iphone', 'oneplus', 'qmobile']

// var userDemand = prompt("Which brand phone you want to buy??")

// var mobileFound = false

// for (var i = 0; i < mobileShop.length; i++) {
//     if (userDemand === mobileShop[i]) {
//         alert("Yes you demanded brand is available")
//         mobileFound = true
//     }
// }

// if (mobileFound == false) {
//     alert("Ponka, nai mila")
// }




// if (userDemand == mobileShop[0]) {
//     alert("Here is your mobile phone")
// } else if (userDemand == mobileShop[1]) {
//     alert("Here is your mobile phone")
// } else if (userDemand == mobileShop[2]) {
//     alert("Here is your mobile phone")
// } else if (userDemand == mobileShop[3]) {
//     alert("Here is your mobile phone")
// } else {
//     alert("Sorry your brand is not available")
// }

// var resturantMenu = [
//     "biryani",
//     "korma",
//     "tikka",
//     "karahi",
//     "chinese",
//     "korma"
// ]

// var freeItems = [
//     "coldDrink", "Kheer", "Zarda"
// ]

// var userDemand = prompt("Haan bhaee kya khaogey??")

// var itemMila = false

// for (var i = 0; i < resturantMenu.length; i++) {


//     if (i == 1) {
//         continue
//     }
//     alert("main counter per aya hun" + " " + i)
//     if (userDemand == resturantMenu[i]) {

//         for (j = 0; j < freeItems.length; j++) {
//             alert('Food item found with free item of ' + freeItems[j])
//         }
//         itemMila = true
//         break;
//     }
// }

// if (itemMila == false) {
//     alert("Extremely sorry, aap ka wala menu hamarey pass nahin hai")
// }

// var a = ["sufiyan", "farhan", "kamran"]
// var b = ["html", "css", "javascript"]

// for(i = 0; i < a.length; i++) {
//     for(j = 0; j < b.length; j++) {
//         alert(a[i] + " " + b[j])
//     }
// }

var tableNumber = [1, 2, 3, 4, 5, 6, 7, 8]
var count = 10

// 1 x 1 = 1
// 1 x 2 = 2

for (i = 0; i < tableNumber.length; i++) {
    for (j = 1; j <= count; j++) {
        console.log(`${tableNumber[i]} X ${j} = ${tableNumber[i] * j}`)
    }
    console.log("==========================================")
}