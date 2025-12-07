console.log("==>> javascript is working")


try {
    // console.log(naseem)

    var num = 2

    throw {
        status: false,
        message: "we are testing, is liye hum ney 2 per error bhej diya"
    }
} catch (farhan) {
    console.log(farhan, "==>>>> yeh hai mera error")
}



try {
    const userName = prompt("Helloooo, ap kon hain??")
    if (userName == "Shoaib") {
        throw {
            status: true,
            message: "All Good"
        }
    }
    if (userName == "AhmedRaza") {
        throw {
            status: false,
            message: "Ahmed Raza dawat karwao"
        }
    }
    if (userName == "Jaffer") {
        throw {
            status: false,
            message: "Jaffer kiyun k tum late aaey"
        }
    }
    if (userName == "Hussain") {
        throw {
            status: false,
            message: "Hussain sorry, bas mera dil chah raha"
        }
    }
    console.log("==>> line number 11")
} catch (error) {
    console.log(error, "==>> koi error to aya hai")
    const headingError = document.createElement('h1')
    document.body.appendChild(headingError)
    headingError.textContent = error.message

    if (error.status == true) {
        headingError.style.backgroundColor = "yellow"
    } else {
        headingError.style.backgroundColor = "red"
    }

}

console.log("==>>>. lineee 66666")

const myInput = document.querySelector('input')


document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log("==>> submission horahi hai")

    console.log(document.querySelector('select').selectedIndex)

    if (document.querySelector('select').selectedIndex == 0) {
        alert("==>> wrong option selected")
    }

    if (myInput.value.indexOf(" ") >= 0) {
        alert("Email address cannot have space init")
    }

    const indexOfAtTheRate = myInput.value.indexOf("@")

    console.log(indexOfAtTheRate)

    if (indexOfAtTheRate <= 0 || myInput.value.split('@')[1].length < 4) {
        alert("incorrect email address")
    }



})