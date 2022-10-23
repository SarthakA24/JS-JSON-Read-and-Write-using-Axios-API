// Reuse the solution created to dynamically create order form fields developed 
// in the previous sprint challenge
function addFields() {
    var div = document.querySelector(".addFields");
    var childDiv = document.createElement("div");
    childDiv.setAttribute("class", "add");
    div.appendChild(childDiv).innerHTML =
        `
        <label for="category">Category Name:</label>
        <input type="text" id="category" name="category" required>
        <br>
        <label for="item">Item Name:</label>
        <input type="text" id="item" name="item" required>
        <br>
        <label for="price">Price:</label>
        <input type="number" id="price" name="price" required onkeyup="addAmount(this)">
        <br>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" required onkeyup="addAmount(this)">
        <br>
        <div>Amount = <span class="amount">0</span></div>
        <br><br>
    `;
}

function addAmount(element) {
    var div = element.parentNode;
    var amount = div.querySelector("#price").value * div.querySelector("#quantity").value;
    var node = div.querySelector(".amount");
    node.innerHTML = amount;
    addTotalAmount();
}

function addTotalAmount() {
    var finalAmount = 0
    var allAmounts = document.querySelectorAll(".amount");
    allAmounts.forEach(totalAmount => {
        finalAmount += Number(totalAmount.innerHTML);
    });
    var totalPrice = document.querySelector(".totalPrice");
    totalPrice.innerHTML = finalAmount;
}

// Save the order details on clicking the submit button
function submitForm() {
    var result = validateData();
    if (result) {
        var orderId = document.querySelector("#orderId").value;
        var name = document.querySelector("#customerName").value;
        var email = document.querySelector("#email").value;
        var phoneNumber = document.querySelector("#phoneNumber").value;
        var date = document.querySelector("#date").value;
        var address = document.querySelector("#address").value;
        var totalAmount = document.querySelector(".totalPrice").innerHTML;
        var allOrderItems = document.querySelectorAll(".add");
        var customerOrder = [];
        allOrderItems.forEach(orderItem => {
            var category = orderItem.querySelector("#category").value;
            var itemName = orderItem.querySelector("#item").value;
            var price = orderItem.querySelector("#price").value;
            var quantity = orderItem.querySelector("#quantity").value;
            var amount = orderItem.querySelector(".amount").innerHTML;
            var order = {
                "category" : category,
                "itemName" : itemName,
                "price" : price,
                "quantity" : quantity,
                "amount" : amount
            };
            customerOrder.push(order);
        });
        var finalCustomerOrder = {
            "orderId" : orderId,
            "name" : name,
            "email" : email,
            "phoneNumber" : phoneNumber,
            "date" : date,
            "address" : address,
            "orderedItems" : customerOrder,
            "finalAmount" : totalAmount
        };
        saveOrderDetails(finalCustomerOrder);
        displayCustomerOrder(finalCustomerOrder);
    }
}

function validateData() {
    var orderId = document.querySelector("#orderId").value;
    var name = document.querySelector("#customerName").value;
    var email = document.querySelector("#email").value;
    var phoneNumber = document.querySelector("#phoneNumber").value;
    var address = document.querySelector("#address").value;
    if (orderId == "" || orderId == undefined || orderId == null || name == "" || name == undefined || name == null || email == "" || email == undefined || email == null || phoneNumber == "" || phoneNumber == undefined || phoneNumber == null || address == null || address == undefined || address == ""){
        return false;
    } else {
        return true;
    }
}

//Save the order details captured from the form in json-server using Axios API
function saveOrderDetails(customerOrder) {
    axios.post("http://localhost:3002/order",customerOrder).then(response => {
        alert("Data saved successfully!!");
    }).catch(error => {
        alert("Error")
        console.log(error);
    });
}

function displayCustomerOrder(finalCustomerOrder) {
    var displayDiv = document.getElementById("finalOrder");
    var heading = document.createElement("h2");
    displayDiv.appendChild(heading).innerHTML = `Order Placed by Customer ${finalCustomerOrder.name}`;
    var orderBodyDiv = document.createElement("div");
    displayDiv.appendChild(orderBodyDiv).innerHTML = 
    `
        Order ID = ${finalCustomerOrder.orderId}<br>
        Customer Name = ${finalCustomerOrder.name}<br>
        Customer Email = ${finalCustomerOrder.email}<br>
        Customer Phone Number = ${finalCustomerOrder.phoneNumber}<br>
        Order Date = ${finalCustomerOrder.date}<br>
        Customer Address = ${finalCustomerOrder.address}<br>
        Final Payable Amount = ${finalCustomerOrder.finalAmount}<br>
    `;
    finalCustomerOrder.orderedItems.forEach(order => {
        var orderDiv = document.createElement("div");
        displayDiv.appendChild(orderDiv).innerHTML = 
        `
            Category = ${order.category}<br>
            Item Name = ${order.itemName}<br>
            Quantity = ${order.quantity}<br>
            Price = ${order.price}<br>
            Amount = ${order.amount}<br>
        `;
    });
}
