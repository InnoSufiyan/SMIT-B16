const heading2 = document.createElement('h2')
const heading3 = document.createElement('h2')
const unOrderedList = document.createElement('ul')
const list1 = document.createElement('li')
const anchorTag = document.createElement('a')

anchorTag.innerText = "Facebook"

anchorTag.setAttribute('href', "https://facebook.com")

const myName = 'talha'

document.body.appendChild(heading2)
document.body.appendChild(heading3)
document.body.insertBefore(unOrderedList, heading2)
unOrderedList.appendChild(list1)

list1.innerText = 'apple'

// heading2.textContent = "Aftab"

const text = document.createTextNode(myName)
const text2 = document.createTextNode('Saylani Mass IT Training')

heading3.appendChild(text)
heading2.appendChild(text2)

heading3.textContent = 'Rizwan'
// console.log(heading3.textContent)

function replacerHandler() {
    document.body.replaceChild(anchorTag, heading2)
}
