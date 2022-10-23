//Write  password validation code here 
function setPasswordConfirmValidity(custPasword, custConfirmPassword) {
    if (custPasword != custConfirmPassword) {
        return "Passwords does not match!";
    } else {
        return "";
    }
}


// Write code to submit customer details 
function submitCustomerDetail(customer) {
   axios.post("http://localhost:3000/customer", customer).then(response => {
    alert("Data Submitted Successfully!");
   }).catch(e => {
    console.error("JSON Server Error!");
   });
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
    var error = {
        "idError" : validateId(customerId),
        "nameError" : validateName(name),
        "passwordError" : validatePassword(custPasword),
        "passwordConfirmError" : setPasswordConfirmValidity(custPasword, custConfirmPassword),
        "emailError" : validateEmail(email),
        "contactError" : validateContactNumber(contactNumber),
        "addressError" : validateAddress(address)
    };
    var errors = Object.values(error).filter(err => err != "");
    if (errors.length == 0) {
        var customer = {
            "id" : customerId,
            "name" : name,
            "password" : custPasword,
            "email" : email,
            "contactNumber" : contactNumber,
            "address" : address 
        }
        submitCustomerDetail(customer);
        return true;
    } else {
        displayErrorMessage(error);
        return false;
    }
}

function displayErrorMessage(errorMessages) {
    document.getElementById("idError").innerHTML = errorMessages.idError;
    document.getElementById("nameError").innerHTML = errorMessages.nameError;
    document.getElementById("custPaswordError").innerHTML = errorMessages.passwordError;
    document.getElementById("custConfirmPasswordError").innerHTML = errorMessages.passwordConfirmError;
    document.getElementById("emailError").innerHTML = errorMessages.emailError;
    document.getElementById("contactError").innerHTML = errorMessages.contactError;
    document.getElementById("addressError").innerHTML = errorMessages.addressError;
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