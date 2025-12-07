var userName = document.querySelector('#userName')
var firstName = document.querySelector('#firstName')
var lastName = document.querySelector('#lastName')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var cPassword = document.querySelector('#cPassword')


document.querySelector('#signupBtn').addEventListener('click', function () {

    var allUsers = JSON.parse(localStorage.getItem('allUsers')) || []

    if (!userName.value || !firstName.value || !lastName.value || !email.value || !password.value || !cPassword.value) {
        return alert("all fields are required")
    }

    if (password.value != cPassword.value) return alert("password and confirm password should match")

    // password != cPassword && alert("password and confirm password should match")

    if (password.value.length < 8) return alert("Minimum length of password should be 8 characters long")

    const userNameAlreadyExists = allUsers.find(function (userData) {
        console.log("==>>asdads")
        return userData.userName.toLowerCase() == userName.value.toLowerCase()
    })

    
    const emailAlreadyExists = allUsers.find(function (userData) {
        return userData.email.toLowerCase() == email.value.toLowerCase()
    })

    if (userNameAlreadyExists) return alert("User Name already taken, try another")
    if (emailAlreadyExists) return alert("Email Address already exists, try to login")

    const userDetails = {
        userName: userName.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }

    console.log(userDetails, "==>> userDetails")

    allUsers.push(userDetails)

    localStorage.setItem('allUsers', JSON.stringify(allUsers))

    window.location = 'login.html'
})