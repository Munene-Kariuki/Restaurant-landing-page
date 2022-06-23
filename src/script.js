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
    let name = document.querySelector("#name")
    let rating = document.querySelector('#rating')
    let image = document.querySelector('#image')
    let price = document.querySelector('#price')
    let description = document.querySelector('#description')
    let reviews = document.querySelector('#reviewList')
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
    .then((data) => console.log(data))
}

function initializer() {
    getData()
    getFirstObject()
}

