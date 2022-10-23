//Write  password validation code here 
function setPasswordConfirmValidity(custPasword, custConfirmPassword) {
    if (custPasword != custConfirmPassword) {
        return "Passwords does not match!";
    } else {
        return "";
    }
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
        "passwordConfirmError" : setPasswordConfirmValidity(custPasword, custConfirmPassword),
        "emailError" : validateEmail(email),
        "contactError" : validateContactNumber(contactNumber),
        "addressError" : validateAddress(address)
    };
}

function validateId(customerId) {
    if (customerId === "" || customerId === null || customerId === undefined) {
        return "Please input this field!";
    } else {
        return "";
    }
}
function validateName(name) {
    if (name === "" || name === null || name === undefined) {
        return "Please input this field!";
    } else {
        return "";
    }
}

function validatePassword(password) {
    var regex = "[^ ]{8,}";
    if (password === "" || password === null || password === undefined) {
        return "Please input this field!";
    } else if (!password.match(regex)) {
        return "Invalid Password! Please enter min 8 characters!"
    } else {
        return "";
    }
}

function validateEmail(email) {
    var regex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    if (email === '' || email === undefined || email === null){
        return "Email cannot be empty";
    } else if(!email.match(regex)) {
        return "Invalid Email";
    } else {
        return "";
    }
}

function validateContactNumber(number) {
    var regex = "(?<!\d)\d{10}(?!\d)";
    if (number === "" || number === undefined || number === null) {
        return "Number cannot be empty."
    } else if (!number.match(regex)) {
        return "Invalid Number";
    } else {
        return "";
    }
}

function validateAddress(address) {
    if (address === "" || address === undefined || address === null) {
        return "Address cannot be blank";
    } else {
        return "";
    }
}