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
    var orderId = document.querySelector("#orderId").value;
    var name = document.querySelector("#customerName").value;
    var email = document.querySelector("#email").value;
    var phoneNumber = document.querySelector("#phoneNumber").value;
    var date = document.querySelector("#date").value;
    var address = document.querySelector("#address").value;
    var totalAmount = document.querySelector(".totalPrice").innerHTML;
    if (orderId == "" || name == "" || phoneNumber == "" || date == "" || address == "") {
        alert("Please fill the all the fields!!");
    } else {
        alert(`Order Id = ${orderId}\nCustomer Name = ${name}\nEmail Address = ${email}\nPhone Number = ${phoneNumber}\nOrder Date = ${date}\nCustomer Address = ${address}\nOrder Total Amount = ${totalAmount}`);
    }
}

//Save the order details captured from the form in json-server using Axios API

