//DOM manipuation functions




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

