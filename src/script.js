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





//Event listeners
document.addEventListener('DOMContentLoaded', initializer)





//fetch data from server
function getData() {
    fetch('http://localhost:3000/menuItems')
    .then((response) => response.json())
    .then((data) => populateMenu(data))
}

function initializer() {
    getData()
}

