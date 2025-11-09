console.log("==>> javascript is running")

const submitBtn = document.querySelector('button')

const inputValues = document.querySelectorAll('input')

submitBtn.addEventListener('click', function () {
    console.log("==> jee haan submit per click huwa")
    const signupData = {}
    inputValues.forEach(function (input) {
        console.log(input.value)
        console.log(input.placeholder)
        signupData[input.placeholder] = input.value
    })
    localStorage.setItem('userDetails', JSON.stringify(signupData))
    renderOnLoad()
})

function renderOnLoad() {
    const username = localStorage.getItem('userDetails')
    const userNameJSON = JSON.parse(username)
    console.log(userNameJSON, "==>> userNameJSON")
    const heading = document.querySelector('h1')
    heading.textContent = `Hi, Mr ${userNameJSON.firstName} ${userNameJSON.lastName}, your username is ${userNameJSON.username} and your email is ${userNameJSON.email}`
}

renderOnLoad()