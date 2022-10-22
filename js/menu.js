//Write code to get menu data from the json-server using axios API
var menuData = [];

getPromise = () => {
    const promise = axios.get("http://localhost:3000/menu").then( response => response.data);
    return promise;
}

//Write code to load menu data using window onload event: getPromise is the promise result obained from Axios call
window.onload = () => getPromise().then((response) => {
    menuData = response;
});

//Write code to filter the menu item from list
const category = document.getElementById('category');
category.addEventListener('change', function (e) {
    findItems(category.value);
});

function findItems(categoryName) {
    if (categoryName === "All Menu Items") {
        displayMenu(menuData);
    } else {
    var menuItemsToDisplay = [];
    menuData.filter(item => {
        if (item.category === categoryName) {
            menuItemsToDisplay.push(item);
        }
    });
    displayMenu(menuItemsToDisplay);
}
}

function displayMenu(menuItems){
    var node = document.querySelector(".menuTable");
    menuItems.forEach(item => {
        var tableRow = document.createElement("tr");
        node.appendChild(tableRow).innerHTML = 
        `
            <th>${item.itemName}</th>
            <th>${item.price}</th>
        `;
    })
}


