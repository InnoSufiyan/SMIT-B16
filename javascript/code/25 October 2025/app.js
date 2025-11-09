const aesiKiTesi = `<button onclick="themeHandler()">Dark</button>
    <h1 class="light ahmed shoaib">Heading</h1>
    <p class="light sufiyan jaffer">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sint in
        itaque iusto saepe
        quasi animi nam
        esse! Cupiditate similique quos maiores possimus ratione ipsum repellendus ipsa. Atque possimus tenetur culpa.
        Perspiciatis dolor tenetur ad eligendi quos magnam ipsa commodi eos asperiores autem error qui, assumenda amet
        veritatis rem unde.</p>`


document.body.innerHTML = aesiKiTesi

// const btn = document.createElement('button')
// btn.innerText = 'Dark'
// btn.setAttribute('onclick', 'themeHandler()')

// document.body.appendChild(btn)

// const meraH1 = document.createElement('h1')
// meraH1.textContent = 'Heading'
// meraH1.className = 'light ahmed shoaib'

// document.body.appendChild(meraH1)

// const meraPyaraPara = document.createElement('p')
// meraPyaraPara.innerHTML = 'Hi...adasdada'
// meraPyaraPara.className = 'light sufiyan jaffer'

document.body.appendChild(meraPyaraPara)




function themeHandler() {
    document.body.classList.toggle('light')
    document.body.classList.toggle('dark')
    document.querySelector('h1').classList.toggle('light')
    document.querySelector('h1').classList.toggle('dark')
    document.querySelector('p').classList.toggle('light')
    document.querySelector('p').classList.toggle('dark')

    const btn = document.querySelector('button')

    btn.textContent == 'Dark' ? btn.textContent = 'Light' : btn.textContent = 'Dark'

    // if (btn.textContent == 'Dark') {
    //     btn.textContent = 'Light'
    // } else {
    //     btn.textContent = 'Dark'
    // }
}