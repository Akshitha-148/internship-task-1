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
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value.trim();

    let email =
        document.getElementById("email").value.trim();

    let message =
        document.getElementById("message").value.trim();


    if (name === "") {

        alert("Please enter your name.");
        return;

    }


    if (email === "") {

        alert("Please enter your email.");
        return;

    }


    if (message === "") {

        alert("Please enter your message.");
        return;

    }


    alert("Form submitted successfully!");

});