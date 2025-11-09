const allPara = document.querySelectorAll('p')

allPara.forEach(para => {
    para.addEventListener('click', function (event) {
        console.log(event.target)
        event.target.style.backgroundColor = 'green'
    })
})

document.querySelector('button').addEventListener('click', function (event) {
    event.currentTarget.parentElement.style.backgroundColor = "black"
    event.currentTarget.parentElement.style.color = "white"
})