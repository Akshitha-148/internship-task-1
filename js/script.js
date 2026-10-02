// Variables

let studentName = "Student";
let studentAge = 20;

console.log(studentName);
console.log(studentAge);


// Array

let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "MySQL"
];

console.log(skills);


// Loop

for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}


// Function

function showWelcome() {

    alert("Welcome to my portfolio!");

}
let heading = document.querySelector("#home h2");

heading.addEventListener("click", function () {

    heading.innerHTML = "Welcome to My Portfolio!";

});
/* =========================
   CONTACT FORM - WHATSAPP
========================= */

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    let genderElement = document.querySelector(
        'input[name="gender"]:checked'
    );


    // Validation

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "") {
        alert("Please enter your email.");
        return;
    }

    if (!genderElement) {
        alert("Please select your gender.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }


    let gender = genderElement.value;


    // Your WhatsApp number
    // Example: 919876543210

    let phoneNumber = "917396930311";


    // Create WhatsApp message

    let whatsappMessage =
        "Hello! I received a new message from my portfolio website.\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Gender: " + gender + "\n" +
        "Message: " + message;


    // Create WhatsApp URL

    let whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    // Open WhatsApp

    window.location.href = whatsappURL;

});