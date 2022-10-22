//Write code to get menu data from the json-server using axios API
var menuData = [];

getPromise = () => {
    const promise = axios.get("http://localhost:3000/menu").then(response => response.data);
    return promise;
}

//Write code to load menu data using window onload event: getPromise is the promise result obained from Axios call
window.onload = () => getPromise().then((response) => {
    menuData = response;
    displayMenu(menuData);
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

function displayMenu(menuItems) {
    // Remove existing nodes
    var allItem = document.querySelectorAll(".item");
    allItem.forEach(itemNode => itemNode.remove())
    // Add new menu items
    var node = document.querySelector("#tableItems");
    menuItems.forEach(item => {
        var tableRow = document.createElement("tr");
        tableRow.setAttribute("class", "item");
        node.appendChild(tableRow).innerHTML =
            `
            <td>${item.itemName}</td>
            <td>${item.price}</td>
        `;
    })
}


