const emailLogin = document.querySelector('#email')
const passwordLogin = document.querySelector('#password')

document.querySelector('#loginBtn').addEventListener('click', function () {
    if (!emailLogin.value || !passwordLogin.value) return alert("write all of the fields")

    if (passwordLogin.value.length < 8) return alert("password is not correct")

    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || []

    const isExists = allUsers.find(function (userData) {
        return userData.email.toLowerCase() == emailLogin.value.toLowerCase()
    })

    console.log(isExists, "==>> isExists")

    if (!isExists) return alert("Please create your account first")

    if (isExists.password == passwordLogin.value) {
        alert("Congratulations, we are signing you up")
        localStorage.setItem("loggedInUser", JSON.stringify(isExists))
        window.location = 'dashboard.html'
    } else {
        alert("Incorrect Password")
    }
})