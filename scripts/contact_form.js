

const userInfo = []

class Usercontact {
    constructor(name_lastname, phoneNumber, email, message) {
        this.name_lastname = name_lastname;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.message = message;
    }
};


// Variables
let contactForm = document.querySelector("#contactForm");
let inputNameAndLastname = document.querySelector("#inputNameAndLastname");
let inputTel = document.querySelector("#inputTel");
let inputEmail = document.querySelector("#inputEmail");
let inputtextArea = document.querySelector("#inputtextArea");


// Events 
contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createObject()
});


// Functions
function createObject() {
    try {
        let = messageRequest = new Usercontact(inputNameAndLastname.value, inputTel.value, inputEmail.value, inputtextArea.value);
        userInfo.push(messageRequest)
        sessionStorage.setItem("User Contact Info & Message", JSON.stringify(userInfo))
        console.log(messageRequest)
    } catch (error) {
        console.log(error)
    }
};
