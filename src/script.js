//Event listeners
document.addEventListener('DOMContentLoaded', initializer)
document.querySelector('#orderBtn').addEventListener('click', handleOrder)
document.querySelector('#reviewForm').addEventListener('submit', handleSubmit)

//DOM manipuation functions
//Add items on the menu
function populateMenu(menuObj) {
    let menu = document.querySelector('#menuItems')

    //Create menu item
    menuObj.map((item) => {
        let li = document.createElement('li')
        li.textContent = item.name
        menu.appendChild(li)
        //listen to click on menu items to render the menu item on the page
        li.addEventListener('click', () => renderMenuObj(item))
    })
}

//Render a menu object
function renderMenuObj(menuItem) {
    let reviews = document.querySelector('#reviewList')

    //Render object
    document.querySelector("#name").textContent = menuItem.name
    document.querySelector('#rating').textContent = menuItem.rating
    document.querySelector('#image').src = menuItem.image
    document.querySelector('#price').textContent = menuItem.price
    document.querySelector('#description').textContent = menuItem.description

    //Add reviews
    reviews.innerHTML = ''
    menuItem.reviews.map((review) => {
        let li = document.createElement('li')
        li.textContent = review
        reviews.appendChild(li)
    })
}


//Event handlers
function handleOrder() {
    let description = document.querySelector('#description')
    description.textContent = 'Your order is being prepared 😄...'
}

//Add new reviews
function handleSubmit(e) {
    e.preventDefault()
    let li = document.createElement('li')
    li.textContent = e.target.review.value
    document.querySelector('#reviewList').appendChild(li)
    document.querySelector('#reviewForm').reset()
}

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