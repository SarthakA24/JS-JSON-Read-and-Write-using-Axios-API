//Write  password validation code here 
function setPasswordConfirmValidity() {
    
}


// Write code to submit customer details 
function submitCustomerDetail(event) {
   
}

// Functions to validate form data
function validateData() {
    var customerId = document.getElementById("custID").value;
    var name = document.getElementById("name").value;
    var custPasword = document.getElementById("custPasword").value;
    var custConfirmPassword = document.getElementById("custConfirmPassword").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var errors = {
        "idError" : validateId(customerId),
        "nameError" : validateName(name),
        "passwordError" : validatePassword(custPasword),
        "passwordConfirmError" : setPasswordConfirmValidity(custConfirmPassword),
        "emailError" : validateEmail(email),
        "contactError" : validateContactNumber(contactNumber),
        "addressError" : validateAddress(address)

    };
}

function validateId(customerId) {

}

function validatePassword(password) {

}

function validateName(name) {

}

function validateEmail(email) {

}

function validateContactNumber(number) {

}

function validateAddress(address) {

}