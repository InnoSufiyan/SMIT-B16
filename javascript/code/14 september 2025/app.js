// // const a = "sufiyan"

// function imageChange() {
//     console.log("hello , image change function chal gaya")
//     document.getElementById('car').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvR6FKQPyza7oHfPHEutk4oqCkQZvSrUToKw&s"
// }
// function imageChange2() {
//     console.log("hello , image change 2 function chal gaya")
//     document.getElementById('car').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzf9X0RFl89OFXjqv-8jKLNV_O2_FP64XqDQ&s"
// }


// function imageShow() {
//     document.getElementById('car').style.display = "block"

// }

// function nameFoo() {
//     document.getElementById('nameInput').style.backgroundColor = "yellow"
// }
// function emailFoo() {
//     document.getElementById('emailInput').style.backgroundColor = "red"
// }
// function passwordFoo() {
//     document.getElementById('passwordInput').style.backgroundColor = "blue"
// }
// function nameFoo2() {
//     document.getElementById('nameInput').style.backgroundColor = "white"
// }
// function emailFoo2() {
//     document.getElementById('emailInput').style.backgroundColor = "white"
// }
// function passwordFoo2() {
//     document.getElementById('passwordInput').style.backgroundColor = "white"
// }

// function foo() {
//     console.log("foo")
// }
// function foo2() {
//     console.log("foo2")
// }

// palindrome

// madam
// mom
// dad

function isPalindrom(userInput) {
    var palindromeCheck = '';
    // var palindromeCheck = userInput.split('').reverse().join('')
    for(var i = userInput.length - 1; i >= 0; i--) {
        palindromeCheck += userInput[i]
    }

    return palindromeCheck === userInput
}

document.writeln(isPalindrom("sufiyan"))











