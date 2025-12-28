console.log("==>> javascript is running")

const img = document.querySelector('img')
const cardTitle = document.querySelector('.card-title')
const cardText = document.querySelector('.card-text')

const request = fetch('https://restcountries.com/v3.1/name/pakistan').then(function (result) {
    console.log(result, "===>>> result")
    return result.json()
}).then(function (result) {
    // console.log(result[0], "==>> result")
    console.log(result, "==>> result")

    renderCountry(result)

})

console.log(request, "==>> request")

function renderCountry(countryDetails) {
    const [countryData] = countryDetails

    console.log(countryData, "==>> country Data")

    const { flags, name } = countryData
    const { common, official } = name
    img.src = flags.png
    cardTitle.textContent = common
    cardText.textContent = official
}