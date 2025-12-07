console.log("===>> javascript is working fine")


function profileDataLoad() {

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    if (!loggedInUser) {
        window.location = 'login.html'
    }


    document.querySelector('#welcomeNote').textContent = `Hi, Welcome Mr ${loggedInUser.firstName} ${loggedInUser.lastName}`

    document.querySelector('.card-title').textContent = `${loggedInUser.firstName} ${loggedInUser.lastName}`

    document.querySelector('.card-text').textContent = loggedInUser.description || 'No description added'

    document.querySelector('#one').textContent = loggedInUser.email
    document.querySelector('#two').textContent = loggedInUser.userName

    document.querySelector('img').src = loggedInUser.profilePicture || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`

    var userNameInput = document.querySelector('#userNameInput')
    var firstNameInput = document.querySelector('#firstNameInput')
    var lastNameInput = document.querySelector('#lastNameInput')
    var emailInput = document.querySelector('#emailInput')
    var profilePicInput = document.querySelector('#profilePicInput')
    var descriptionInput = document.querySelector('#descriptionInput')

    userNameInput.value = loggedInUser.userName || ''
    firstNameInput.value = loggedInUser.firstName || ''
    lastNameInput.value = loggedInUser.lastName || ''
    emailInput.value = loggedInUser.email || ''
    profilePicInput.value = loggedInUser.profilePicture || ''
    descriptionInput.value = loggedInUser.description || ''
}

profileDataLoad()

function logoutHandler() {
    localStorage.removeItem('loggedInUser')

    window.location = 'login.html'
}

function updateProfileHandler() {
    const userDetails = {
        userName: userNameInput.value,
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        profilePicture: profilePicInput.value,
        description: descriptionInput.value
    }

    console.log(userDetails, "==> userDetails")

    localStorage.setItem('loggedInUser', JSON.stringify(userDetails))

    const allUsers = JSON.parse(localStorage.getItem('allUsers'))

    const isExists = allUsers.find(function (userData) {
        return userData.email === userDetails.email
    })

    console.log(isExists)

    isExists.userName = userNameInput.value
    isExists.firstName = firstNameInput.value
    isExists.lastName = lastNameInput.value
    isExists.email = emailInput.value
    isExists.profilePicture = profilePicInput.value
    isExists.description = descriptionInput.value


    localStorage.setItem('allUsers', JSON.stringify(allUsers))

    profileDataLoad()
}