console.log("==>> javascript is working")

document.querySelector('button').addEventListener('click', getLocation)

document.querySelector('#gotoBtn').addEventListener('click', fetchNeighbouringCountries)

const myCountryCard = document.querySelector("#myCountry")
const myCountryImage = document.querySelector("#myCountryImage")
const cardTitle = document.querySelector(".card-title")
const cardText = document.querySelector(".card-text")

let bordersCountries


function getLocation() {
    navigator.geolocation.getCurrentPosition(function (success) {
        // console.log(success, "==>>> success")
        const { coords } = success
        const { latitude, longitude } = coords
        console.log(latitude, longitude)

        countryNameFoo(latitude, longitude)
    }, function (error) {
        console.log(error, "==>> error")
    })
}

// function countryNameFoo(lat, long) {
//     fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=802447184335778970346x7085`).then(function (countryDetail) {
//         return countryDetail.json()
//     }).then(function (countryDetail) {
//         console.log(countryDetail)
//         const { country } = countryDetail

//         countryDetailsFoo(country)
//     })
// }

// async await
async function countryNameFoo(lat, long) {
    try {
        const countryApi = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json&auth=802447184335778970346x7085`)

        const countryJSON = await countryApi.json()

        const { country } = countryJSON

        countryDetailsFoo(country)


    } catch (error) {

    }
}

// legacy then and catch
// function countryDetailsFoo(countryName) {
//     fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(function (result) {
//         return result.json()
//     }).then(function (result) {
//         console.log(result, "==>> result")
//     })
// }

// async await
async function countryDetailsFoo(countryName) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)

        const resJson = await res.json()

        console.log(resJson, "====>>> mera pyara response")

        myCountryCard.style.display = "block"

        renderCountry(resJson[0])
    } catch (error) {
        console.log(error, '==>> hamara error')
    }
}

function renderCountry(countryAllDetails) {
    const { flags, name, borders } = countryAllDetails
    const { png } = flags
    const { common, official
    } = name

    bordersCountries = borders

    myCountryImage.src = png
    cardTitle.textContent = common
    cardText.textContent = official
}

async function fetchNeighbouringCountries() {
    console.log(bordersCountries.join('---------'))

    try {

        const promisesArray = [
            fetch(`https://restcountries.com/v3.1/name/${bordersCountries[0]}`),
            fetch(`https://restcountries.com/v3.1/name/${bordersCountries[1]}`),
            fetch(`https://restcountries.com/v3.1/name/${bordersCountries[2]}`),
            fetch(`https://restcountries.com/v3.1/name/${bordersCountries[3]}`)
        ]

        // Promises ka array as an Argument jaeyga
        Promise.all(promisesArray)
            .then(res => {
                res.forEach((response) => {
                    if (response.ok) {
                        console.log(response)
                    } else {
                        throw Error(`ek error aya hai ${response.url}`)
                    }
                })
            })
            // .then(res => console.log(res, "===>>> res"))
            .catch(err => console.log(err, "==>> err"))
            .finally(() => {
                console.log('Banda wapsi dubai jaaeyga')
            })


    } catch (error) {
        console.log(error, "==>> error")
    }
}

// async function neighbourDetailsFoo(countryName) {
//     try {
//         const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)

//         const resJson = await res.json()

//         return resJson

//     } catch (error) {
//         console.log(error, '==>> hamara error')
//     }
// }