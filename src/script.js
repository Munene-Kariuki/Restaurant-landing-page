//DOM manipuation functions
function populateMenu(menuObj) {
    let menu = document.querySelector('#menuItems')
   
    //Create menu item
    menuObj.map((item) => {
        let li = document.createElement('li')
        li.textContent = item.name
        menu.appendChild(li)
    })
}

function renderMenuObj(menuItem) {
    let reviews = document.querySelector('#reviewList')

    document.querySelector("#name").textContent = menuItem.name
    document.querySelector('#rating').textContent = menuItem.rating
    document.querySelector('#image').src = menuItem.image
    document.querySelector('#price').textContent = menuItem.price
    document.querySelector('#description').textContent = menuItem.description
    menuItem.reviews.map((review) => {
        let li = document.createElement('li')
        li.textContent = review
        reviews.appendChild(li)
    })
}



//Event listeners
document.addEventListener('DOMContentLoaded', initializer)





//fetch data from server
function getData() {
    fetch('http://localhost:3000/menuItems')
    .then((response) => response.json())
    .then((data) => populateMenu(data))
}

function getFirstObject() {
    fetch('http://localhost:3000/menuItems/1')
    .then((response) => response.json())
    .then((data) => renderMenuObj(data))
}

function initializer() {
    getData()
    getFirstObject()
}

