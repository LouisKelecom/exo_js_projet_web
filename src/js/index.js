// ----- MODAL -----
console.log(" ----- MODAL ----- ");

// Get the modal
let modal = document.getElementById('myModal');

// Button de nav du modal
let btnConnection = document.getElementById("connection");
console.log(btnConnection);

// Get the <span> element that closes the modal
let iCross = document.getElementsByClassName("fa-times")[0];

// Get the <form> signUp
let signUp = document.getElementById("signUp");
console.log(signUp);

// Get the <button> signIn
let btnSignIn = document.getElementById("btnSignIn");
console.log(btnSignIn);

// Get the <button> signUp
let btnSignUp = document.getElementById("btnSignUp");
console.log(btnSignUp);



// When the user clicks on the button, open the modal 
btnConnection.onclick = function () {
    btnSignIn.style.backgroundColor = "rgb(89, 86, 86)";
    modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
iCross.onclick = function () {
    modal.style.display = "none";
    btnSignUp.style.backgroundColor = "rgb(155, 155, 155)";
    signUp.style.display = "none";
    signIn.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        btnSignUp.style.backgroundColor = "rgb(155, 155, 155)";
        signUp.style.display = "none";
        signIn.style.display = "block";
    }
}

// When the user clicks on <button> signUp, reveal <form> signUp and hide <form> signIn
btnSignUp.onclick = function () {
    signIn.style.display = "none";
    signUp.style.display = "block";
    btnSignUp.style.backgroundColor = "rgb(89, 86, 86)";
    btnSignIn.style.backgroundColor = "rgb(155, 155, 155)";
}

// When the user clicks on <button> signIn, reveal <form> signIn and hide <form> signUp
btnSignIn.onclick = function () {
    signUp.style.display = "none";
    signIn.style.display = "block";
    btnSignIn.style.backgroundColor = "rgb(89, 86, 86)";
    btnSignUp.style.backgroundColor = "rgb(155, 155, 155)";
}




// ----- NAVBAR COULEUR NOIR-BLANC -----
console.log(" ----- NAVBAR COULEUR NOIR-BLANC ----- ");


// Get the <button> btn-light
let btnLight = document.getElementsByClassName("btn-light")[0];
console.log(btnLight);

// Get the <button> btn-dark
let btnDark = document.getElementsByClassName("btn-dark")[0];
console.log(btnDark);

// // Get all the elements of the navabar

let header = document.getElementById("header");

let navItem = document.getElementsByClassName("nav-link");
console.log(navItem);

let navbar = document.getElementById("navbar");

let burger = document.getElementsByClassName("navbar-toggler")[0];

console.log(burger);




btnDark.onclick = function () {
    header.classList.add("black");
    navbar.classList.add("black");
    navbar.classList.remove("white");
    burger.classList.add("burger-white");

    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.add("whiteLetters");
    };

}

btnLight.onclick = function () {
    header.classList.remove("black");
    navbar.classList.remove("black");
    navbar.classList.add("white");
    burger.classList.remove("burger-white");

    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.remove("whiteLetters");
    };
}




// ----- SHRINK NAVBAR ONSCROLL -----
console.log(" ----- SHRINK NAVBAR ONSCROLL ----- ");


// Get the elements of the navbar for the scroll
let scrollNavbar = document.getElementById("navbar");
console.log(scrollNavbar);
let logoScrollBar = document.getElementById("logo");
console.log(logoScrollBar);


// When the user scrolls down 500px from the top of the document, add the class "fixed-top" and remove 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollNavbar.classList.add("fixed-top");
        logoScrollBar.style.display = "block";

    } else {
        scrollNavbar.classList.remove("fixed-top");
        logoScrollBar.style.display = "none";
    }
}