//Write code to get menu data from the json-server using axios API
var menuData = [];

getData = () => {
    axios.get("http://localhost:3000/menu").then( response => {
        menuData = response.data;
    }).catch((error) => {
        console.log("Data Fetch Error - " + error);
    });
}

//Write code to load menu data using window onload event: getPromise is the promise result obained from Axios call
// window.onload = () => getPromise.then((response) => {

// });

//Write code to filter the menu item from list
const category = document.getElementById('category');
category.addEventListener('change', function (e) {
    findItems(category.value);
});

function findItems(categoryName) {

}


