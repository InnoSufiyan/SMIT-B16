const resturantMenu = [
    {
        title: "Biryani",
        price: 300,
        description: "Bohut Piyari Biryani",
        imgUrl: "https://i.ytimg.com/vi/XOFqB3cB7To/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASvHRRBUSEjlyWoBidH553BUM6Aw",
        category: "Lunch"
    },
    {
        title: "Korma",
        price: 250,
        description: "Bohut Piyara Korma",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JyCAcxcbhGMmRgAEMx0CkrcnfpDQ0nQq3A&s",
        category: "Lunch"
    },
    {
        title: "Bakray Ki Mandi",
        price: 800,
        description: "Bohut Piyari Mandi",
        imgUrl: "https://i.ytimg.com/vi/lJ4sscPiqQI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHFR1TsZcfPDI6zuXVSjnhnEFwoQ",
        category: "Lunch"
    },
    {
        title: "Halwa Puri",
        price: 200,
        description: "Bohut Piyari Biryani",
        imgUrl: "https://images.deliveryhero.io/image/fd-pk/LH/qhdg-listing.jpg",
        category: "Breakfast"
    },
    {
        title: "Aalo Ka paratha",
        price: 200,
        description: "Bohut Piyari Biryani",
        imgUrl: "https://peekncooksa.blob.core.windows.net/index-recipe/spicy_egg_paratha.jpg",
        category: "Breakfast"
    },
    {
        title: "Banana Milk Shake",
        price: 200,
        description: "Bohut Piyari Biryani",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXO5_l7pnff6EhMOvKxxrzYE3GjiqgQWxeRg&s",
        category: "Shakes"
    },
    {
        title: "StrawBerry Milk Shake",
        price: 300,
        description: "Bohut Piyari Biryani",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_qap8RQlDJnOwG_PUqfOftHI0t_CtN2W5Q&s",
        category: "Shakes"
    },
    {
        title: "Paaey",
        price: 750,
        description: "Bohut Piyari Biryani",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdt0y0kwm6Cv3QTV_ylfIg-dT0uJY12yuLg&s",
        category: "Breakfast"
    },
]


const btnArr = [
    "All",
    "Breakfast",
    "Lunch",
    "Shakes"
]

const myBtnArryForBody = btnArr.map(function (btn) {
    return `<button onclick="menu('${btn}')">${btn}</button>`
})

document.querySelector('#btns').innerHTML = myBtnArryForBody.join('')

// <button onclick="menu()">All</button>
//         <button onclick="menu('breakfast')">Breakfast</button>
//         <button onclick="menu('lunch')">Lunch</button>
//         <button onclick="menu('shakes')">Shakes</button>

menu()


function menu(category) {
    // It will return always an Array
    // It will give you filtered length according to your condition
    // will only return if the condition is true

    const myMenuHTMLForBody = resturantMenu.filter(function (menu) {
        if (category) {
            return menu.category.toLowerCase() == category.toLowerCase()
        } else {
            return true
        }
    }).map(function (menu) {
        const myMenuHTML = `<div class="foodItem">
            <!-- Image -->
            <div class="imgDiv">
                <img src="${menu.imgUrl}"
                    alt="">
            </div>
            <div class="titleDescription">
                <!-- Title and Price -->
                <div class="titlePrice">
                    <h2>${menu.title}</h2>
                    <p>${menu.price}</p>
                </div>
                <!-- Description -->
                <p>${menu.description}</p>
            </div>
        </div>`

        return myMenuHTML
    })

    document.querySelector('#foodItems').innerHTML = myMenuHTMLForBody.join('')
}



var a = ` <div class="foodItem">
            <!-- Image -->
            <div class="imgDiv">
                <img src="https://adas" alt="">
            </div>
            <div class="titleDescription">
                <!-- Title and Price -->
                <div class="titlePrice">
                    <h2>Biryani</h2>
                    <p>200</p>
                </div>
                <!-- Description -->
                <p>adasddsa</p>
            </div>
        </div>`